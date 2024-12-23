import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { LinkOutlined } from '@ant-design/icons';
import type {
  Settings as LayoutSettings,
  MenuDataItem,
} from '@ant-design/pro-components';
import type { RunTimeLayoutConfig, RuntimeConfig } from '@umijs/max';
import { FormattedMessage, getLocale, history } from '@umijs/max';
import { message } from 'antd';
import defaultSettings from '../config/defaultSettings';
import HeaderContent from './components/headerContent';
import { getAdminInfo } from './services/admin';
import { getAnqiInfo } from './services/anqi';
import config from './services/config';
import { getSettingSystem } from './services/setting';
import {
  getSessionStore,
  getStore,
  removeStore,
  setStore,
} from './utils/store';

const loginPath = '/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: any;
  system?: any;
  anqiUser?: any;
  loading?: boolean;
  fetchUserInfo?: () => Promise<any | undefined>;
  fetchSystemSetting?: () => Promise<any | undefined>;
  fetchAnqiUser?: () => Promise<any | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await getAdminInfo();
      return msg.data;
    } catch (error) {}
    return undefined;
  };
  const fetchSystemSetting = async () => {
    try {
      const msg = await getSettingSystem();
      return msg.data?.system;
    } catch (error) {
      //
    }
    return undefined;
  };
  const fetchAnqiUser = async () => {
    try {
      const msg = await getAnqiInfo();
      return msg.data;
    } catch (error) {
      //
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  let pathName = history.location.pathname;
  if (pathName.indexOf('/system') === 0) {
    pathName = pathName.substring(7);
  }
  if (pathName !== loginPath) {
    const currentUser = await fetchUserInfo();
    const system = await fetchSystemSetting();
    const anqiUser = await fetchAnqiUser();

    return {
      fetchSystemSetting,
      fetchUserInfo,
      fetchAnqiUser,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
      system: system,
      anqiUser: anqiUser,
    };
  }
  return {
    fetchSystemSetting,
    fetchUserInfo,
    fetchAnqiUser,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    breadcrumbRender: false,
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    links: [
      <a
        key="anqicms"
        href="https://www.anqicms.com/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkOutlined />
        <span>
          <FormattedMessage id="app.links.anqicms" />
        </span>
      </a>,
    ],
    headerContentRender: () => <HeaderContent />,
    menuHeaderRender: undefined,
    menuDataRender: (menuData: MenuDataItem[]) => {
      let permissions =
        initialState?.currentUser?.group?.setting?.permissions || [];
      if (
        initialState?.currentUser?.id !== 1 &&
        initialState?.currentUser?.group_id !== 1
      ) {
        for (let i in menuData) {
          if (menuData[i].access) {
            // 需要处理
            let hasChildren = false;
            let tmpMenus = menuData[i];
            for (let j in tmpMenus.children) {
              if (
                permissions.indexOf(tmpMenus.children[Number(j)].path) === -1
              ) {
                tmpMenus.children[Number(j)].unaccessible = true;
              } else {
                hasChildren = true;
              }
            }
            if (!hasChildren) {
              menuData[i].unaccessible = true;
            }
          }
        }
      }

      if (
        initialState?.currentUser?.id !== 1 ||
        !initialState?.system?.default_site
      ) {
        for (let i in menuData) {
          if (menuData[i].path === '/website') {
            menuData[i].unaccessible = true;
            break;
          }
        }
      }

      return menuData;
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {/* {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )} */}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RuntimeConfig['request'] = {
  timeout: 150000,
  baseURL: config.baseUrl,
  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      const adminToken = getStore('adminToken');
      if (adminToken) {
        config.headers.admin = adminToken;
      }
      const sessionToken = getSessionStore('adminToken');
      if (sessionToken) {
        config.headers.admin = sessionToken;
      }
      const siteId = getSessionStore('site-id');
      if (siteId) {
        config.headers['Site-Id'] = siteId;
      }
      const subSiteId = getSessionStore('sub-site-id');
      if (subSiteId) {
        config.headers['Sub-Site-Id'] = subSiteId;
      }
      const selectLang = getLocale();
      if (selectLang) {
        config.headers['Accept-Language'] = selectLang;
      }

      return { ...config };
    },
  ],
  responseInterceptors: [
    [
      async function (response: any) {
        const { data } = response;
        if (data.code === 1001) {
          removeStore('adminToken');
          message.warning({
            content: data.msg,
            key: 'error',
            style: { marginTop: '50px' },
          });
          history.push('/login');
          return Promise.reject(data);
        } else if (data.codee === 1002) {
          removeStore('adminToken');
          message.warning({
            content: data.msg,
            key: 'error',
            style: { marginTop: '50px' },
          });
          return Promise.reject(data);
        }
        // 检查 header中是否有 update-token, 有的话，就更新 adminToken
        if (response['headers']['update-token']) {
          setStore('adminToken', response['headers']['update-token']);
        }
        return response;
      },
    ],
  ],
};
