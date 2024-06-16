﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/login',
    layout: false,
    routes: [
      {
        path: '/login',
        name: 'login',
        component: './login',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'home',
    hideInTop: true,
    component: './dashboard/index',
  },
  {
    path: '/setting',
    name: 'setting',
    icon: 'setting',
    access: 'canAdmin',
    routes: [
      {
        path: '/setting/system',
        name: 'system',
        component: './setting/system',
      },
      {
        path: '/setting/content',
        name: 'content',
        component: './setting/content',
      },
      {
        path: '/setting/safe',
        name: 'safe',
        component: './setting/safe',
      },
      {
        path: '/setting/sensitive',
        name: 'sensitive',
        component: './setting/sensitive',
      },
      {
        path: '/setting/contact',
        name: 'contact',
        component: './setting/contact',
      },
      {
        path: '/setting/tdk',
        name: 'tdk',
        component: './setting/index',
      },
      {
        path: '/setting/banner',
        name: 'banner',
        component: './setting/banner',
      },
      {
        path: '/setting/nav',
        name: 'nav',
        component: './setting/nav',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/archive',
    name: 'archive',
    icon: 'profile',
    access: 'canAdmin',
    routes: [
      {
        path: '/archive/list',
        name: 'list',
        component: '@/pages/content/archive/index',
      },
      {
        path: '/archive/recycle',
        hideInMenu: true,
        name: 'recycle',
        component: '@/pages/content/archive/recycle',
      },
      {
        hideInMenu: true,
        path: '/archive/detail',
        component: '@/pages/content/archive/detail',
      },
      {
        path: '/archive/category',
        name: 'category',
        component: '@/pages/content/category/archive',
      },
      {
        hideInMenu: true,
        path: '/archive/category/detail',
        component: '@/pages/content/category/archive/detail',
      },
      {
        path: '/archive/tag',
        name: 'tag',
        component: '@/pages/content/tag/index',
      },
      {
        path: '/archive/page',
        name: 'page',
        component: '@/pages/content/category/page',
      },
      {
        hideInMenu: true,
        path: '/archive/page/detail',
        component: '@/pages/content/category/page/detail',
      },
      {
        path: '/archive/module',
        name: 'module',
        component: '@/pages/content/module/index',
      },
      {
        path: '/archive/attachment',
        name: 'attachment',
        component: '@/pages/content/attachment/index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/plugin',
    name: 'plugin',
    icon: 'appstore',
    access: 'canAdmin',
    routes: [
      {
        path: '/plugin/index',
        name: 'index',
        hideInMenu: true,
        component: '@/pages/plugin/index',
      },
      {
        path: '/plugin/rewrite',
        name: 'rewrite',
        type: 'system',
        component: '@/pages/plugin/rewrite/index',
        icon: 'rewrite',
      },
      {
        path: '/plugin/push',
        name: 'push',
        type: 'normal',
        component: '@/pages/plugin/push/index',
        icon: 'push',
      },
      {
        path: '/plugin/sitemap',
        name: 'sitemap',
        type: 'normal',
        component: '@/pages/plugin/sitemap/index',
        icon: 'sitemap',
      },
      {
        path: '/plugin/robots',
        name: 'robots',
        type: 'normal',
        component: '@/pages/plugin/robots/index',
        icon: 'robots',
      },
      {
        path: '/plugin/friendlink',
        name: 'friendlink',
        type: 'normal',
        component: '@/pages/plugin/link/index',
        icon: 'friendlink',
      },
      {
        path: '/plugin/comment',
        name: 'comment',
        type: 'normal',
        component: '@/pages/plugin/comment/index',
        icon: 'comment',
      },
      {
        path: '/plugin/anchor',
        name: 'anchor',
        type: 'normal',
        component: '@/pages/plugin/anchor/index',
        icon: 'anchor',
      },
      {
        path: '/plugin/guestbook',
        name: 'guestbook',
        type: 'normal',
        component: '@/pages/plugin/guestbook/index',
        icon: 'guestbook',
      },
      {
        path: '/plugin/keyword',
        name: 'keyword',
        type: 'content',
        component: '@/pages/plugin/keyword/index',
        icon: 'keyword',
      },
      {
        path: '/plugin/material',
        name: 'material',
        type: 'content',
        component: '@/pages/plugin/material/index',
        icon: 'material',
      },
      {
        path: '/plugin/fileupload',
        name: 'fileupload',
        type: 'normal',
        component: '@/pages/plugin/fileupload/index',
        icon: 'fileupload',
      },
      {
        path: '/plugin/sendmail',
        name: 'sendmail',
        type: 'system',
        component: '@/pages/plugin/sendmail/index',
        icon: 'sendmail',
      },
      {
        path: '/plugin/collector',
        name: 'collector',
        type: 'content',
        component: '@/pages/plugin/collector/index',
        icon: 'collector',
      },
      {
        path: '/plugin/importapi',
        name: 'importapi',
        type: 'content',
        component: '@/pages/plugin/importapi/index',
        icon: 'importapi',
      },
      {
        path: '/plugin/redirect',
        name: 'redirect',
        type: 'content',
        component: '@/pages/plugin/redirect/index',
        icon: 'redirect',
      },
      {
        path: '/plugin/transfer',
        name: 'transfer',
        type: 'content',
        component: '@/pages/plugin/transfer/index',
        icon: 'transfer',
      },
      {
        path: '/plugin/storage',
        name: 'storage',
        type: 'system',
        component: '@/pages/plugin/storage/index',
        icon: 'storage',
      },
      {
        path: '/plugin/user',
        name: 'user',
        type: 'shop',
        component: '@/pages/plugin/user/index',
        icon: 'user',
      },
      {
        path: '/plugin/group',
        name: 'group',
        type: 'shop',
        component: '@/pages/plugin/group/index',
        icon: 'group',
      },
      {
        path: '/plugin/wechat',
        name: 'wechat',
        type: 'shop',
        component: '@/pages/plugin/wechat/index',
        icon: 'wechat',
      },
      {
        path: '/plugin/weapp',
        name: 'weapp',
        type: 'shop',
        component: '@/pages/plugin/weapp/index',
        icon: 'weapp',
      },
      {
        path: '/plugin/order',
        name: 'order',
        type: 'shop',
        component: '@/pages/plugin/order/index',
        icon: 'order',
      },
      {
        path: '/plugin/pay',
        name: 'pay',
        type: 'shop',
        component: '@/pages/plugin/pay/index',
        icon: 'pay',
      },
      {
        path: '/plugin/finance',
        name: 'finance',
        type: 'shop',
        component: '@/pages/plugin/finance/index',
        icon: 'finance',
      },
      {
        path: '/plugin/retailer',
        name: 'retailer',
        type: 'shop',
        component: '@/pages/plugin/retailer/index',
        icon: 'retailer',
      },
      {
        path: '/plugin/fulltext',
        name: 'fulltext',
        type: 'content',
        component: '@/pages/plugin/fulltext/index',
        icon: 'fulltext',
      },
      {
        path: '/plugin/backup',
        name: 'backup',
        type: 'system',
        component: '@/pages/plugin/backup/index',
        icon: 'backup',
      },
      {
        path: '/plugin/replace',
        name: 'replace',
        type: 'system',
        component: '@/pages/plugin/replace/index',
        icon: 'replace',
      },
      {
        path: '/plugin/titleimage',
        name: 'titleimage',
        type: 'content',
        component: '@/pages/plugin/titleimage/index',
        icon: 'titleimage',
      },
      {
        path: '/plugin/htmlcache',
        name: 'htmlcache',
        type: 'system',
        component: '@/pages/plugin/htmlcache/index',
        icon: 'htmlcache',
      },
      {
        path: '/plugin/aigenerate',
        name: 'aigenerate',
        type: 'content',
        component: '@/pages/plugin/aigenerate/index',
        icon: 'ai',
      },
      {
        path: '/plugin/timefactor',
        name: 'timefactor',
        type: 'content',
        component: '@/pages/plugin/timefactor/index',
        icon: 'timefactor',
      },
      {
        path: '/plugin/interference',
        name: 'interference',
        type: 'system',
        component: '@/pages/plugin/interference/index',
        icon: 'interference',
      },
      {
        path: '/plugin/watermark',
        name: 'watermark',
        type: 'content',
        component: '@/pages/plugin/watermark/index',
        icon: 'watermark',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/design',
    name: 'design',
    icon: 'Code',
    access: 'canAdmin',
    routes: [
      {
        path: '/design/index',
        name: 'index',
        component: '@/pages/design/index',
      },
      {
        hideInMenu: true,
        path: '/design/editor',
        name: 'editor',
        component: '@/pages/design/editor',
      },
      {
        hideInMenu: true,
        path: '/design/detail',
        name: 'detail',
        component: '@/pages/design/detail',
      },
      {
        path: '/design/doc',
        name: 'doc',
        component: '@/pages/design/doc',
      },
      {
        path: '/design/market',
        name: 'market',
        component: '@/pages/design/market',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/statistic',
    name: 'statistic',
    icon: 'lineChart',
    access: 'canAdmin',
    routes: [
      {
        path: '/statistic/spider',
        name: 'spider',
        component: '@/pages/statistic/spider',
      },
      {
        path: '/statistic/traffic',
        name: 'traffic',
        component: '@/pages/statistic/traffic',
      },
      {
        path: '/statistic/detail',
        name: 'detail',
        component: '@/pages/statistic/detail',
      },
      {
        path: '/statistic/includes',
        name: 'includes',
        component: '@/pages/statistic/include',
      },
      {
        path: '/statistic/include/detail',
        name: 'includedetail',
        component: '@/pages/statistic/include/detail',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    access: 'canAdmin',
    hideInTop: true,
    routes: [
      {
        path: '/account/index',
        name: 'index',
        component: '@/pages/account/index',
      },
      {
        path: '/account/list',
        name: 'list',
        component: '@/pages/account/list',
      },
      {
        path: '/account/group/list',
        name: 'grouplist',
        component: '@/pages/account/group/index',
      },
      {
        path: '/account/logs/login',
        name: 'loginlogs',
        component: '@/pages/account/logs/login',
      },
      {
        path: '/account/logs/action',
        name: 'actionlogs',
        component: '@/pages/account/logs/action',
      },
    ],
  },
  {
    path: '/website',
    name: 'website',
    icon: 'Cluster',
    access: 'canAdmin',
    hideInTop: true,
    component: '@/pages/website',
  },
  {
    path: '/tool/upgrade',
    icon: 'CloudSync',
    name: 'upgrade',
    access: 'canAdmin',
    hideInTop: true,
    component: '@/pages/tool/upgrade',
  },
  {
    path: '/tool/cache',
    name: 'cache',
    hideInMenu: true,
    component: '@/pages/tool/cache',
  },
  {
    path: '/preview',
    link: 'preview',
    name: 'preview',
    hideInMenu: true,
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
