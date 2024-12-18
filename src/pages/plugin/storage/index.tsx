import { pluginGetStorage, pluginSaveStorage, pluginStorageUploadFile } from '@/services';
import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Alert, Button, Card, Divider, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';

const PluginStorage: React.FC<any> = () => {
  const [pushSetting, setPushSetting] = useState<any>({});
  const [fetched, setFetched] = useState<boolean>(false);
  const [storageType, setStorageType] = useState<string>('local');
  const intl = useIntl();

  const getSetting = async () => {
    const res = await pluginGetStorage();
    let setting = res.data || {};
    setPushSetting(setting);
    setStorageType(setting.storage_type);
    setFetched(true);
  };

  useEffect(() => {
    getSetting();
  }, []);

  const changeStorageType = (e: any) => {
    setStorageType(e.target.value);
  };

  const handleUploadFile = (field: string, e: any) => {
    const formData = new FormData();
    formData.append('file', e.file);
    formData.append('name', field);
    const hide = message.loading(intl.formatMessage({ id: 'setting.system.submitting' }), 0);
    pluginStorageUploadFile(formData)
      .then((res) => {
        message.success(res.msg);
        pushSetting[field] = res.data;
        setPushSetting(Object.assign({}, pushSetting));
      })
      .finally(() => {
        hide();
      });
  };

  const onSubmit = async (values: any) => {
    const hide = message.loading(intl.formatMessage({ id: 'setting.system.submitting' }), 0);
    pluginSaveStorage(values)
      .then((res) => {
        message.success(res.msg);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        hide();
      });
  };
  return (
    <PageContainer>
      <Card>
        <Alert message={intl.formatMessage({ id: 'plugin.storage.tips' })} />
        <div className="center-mid-card">
          {fetched && (
            <ProForm onFinish={onSubmit} initialValues={pushSetting}>
              <Divider>
                <FormattedMessage id="plugin.storage.base" />
              </Divider>
              <P
                name="storage_type"
                label={intl.formatMessage({ id: 'plugin.storage.type' })}
                fieldProps={{
                  onChange: changeStorageType,
                }}
                options={[
                  {
                    value: 'local',
                    label: intl.formatMessage({ id: 'plugin.storage.type.local' }),
                  },
                  {
                    value: 'aliyun',
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.aliyun' }),
                  },
                  {
                    value: 'tencent',
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.tencent' }),
                  },
                  {
                    value: 'qiniu',
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.qiniu' }),
                  },
                  {
                    value: 'upyun',
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.upyun' }),
                  },
                  {
                    value: 'ftp',
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.ftp' }),
                  },
                  {
                    value: 'ssh',
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.ssh' }),
                  },
                  {
                    value: 'minio', // 新增 MinIO 类型
                    label: intl.formatMessage({ id: 'plugin.htmlcache.storage-type.minio' }), // 需要在国际化文件中增加 minio 类型的翻译
                  },

                ]}
              />
              <ProFormText
                name="storage_url"
                label={intl.formatMessage({ id: 'plugin.storage.url' })}
                placeholder=""
              />
              <div className={storageType === 'local' ? 'hidden' : ''}>
                <ProFormRadio.Group
                  name="keep_local"
                  label={intl.formatMessage({ id: 'plugin.storage.keep-local' })}
                  options={[
                    {
                      value: false,
                      label: intl.formatMessage({ id: 'plugin.storage.keep-local.no' }),
                    },
                    {
                      value: true,
                      label: intl.formatMessage({ id: 'plugin.storage.keep-local.yes' }),
                    },
                  ]}
                  extra={intl.formatMessage({ id: 'plugin.storage.keep-local.description' })}
                />
              </div>
              <div className={storageType !== 'aliyun' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.aliyun" />
                </Divider>
                <ProFormText
                  name="aliyun_endpoint"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.aliyun.endpoint' })}
                  placeholder={intl.formatMessage({
                    id: 'plugin.htmlcache.aliyun.endpoint.placeholder',
                  })}
                />
                <ProFormText name="aliyun_access_key_id" label="AccessKeyId" placeholder="" />
                <ProFormText
                  name="aliyun_access_key_secret"
                  label="AccessKeySecret"
                  placeholder=""
                />
                <ProFormText
                  name="aliyun_bucket_name"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.aliyun.bucket-name' })}
                  placeholder=""
                />
              </div>
              <div className={storageType !== 'tencent' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.tencent" />
                </Divider>
                <ProFormText name="tencent_secret_id" label="SecretId" placeholder="" />
                <ProFormText name="tencent_secret_key" label="SecretKey" placeholder="" />
                <ProFormText
                  name="tencent_bucket_url"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.tencent.bucket-url' })}
                  placeholder={intl.formatMessage({
                    id: 'plugin.htmlcache.tencent.bucket-url.placeholder',
                  })}
                />
              </div>
              <div className={storageType !== 'qiniu' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.qiniu" />
                </Divider>
                <ProFormText name="qiniu_access_key" label="AccessKey" placeholder="" />
                <ProFormText name="qiniu_secret_key" label="SecretKey" placeholder="" />
                <ProFormText
                  name="qiniu_bucket"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.qiniu.bucket-name' })}
                  placeholder={intl.formatMessage({
                    id: 'plugin.htmlcache.qiniu.bucket-name.placeholder',
                  })}
                />
                <ProFormRadio.Group
                  name="qiniu_region"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region' })}
                  options={[
                    {
                      value: 'z0',
                      label: intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region.z0' }),
                    },
                    {
                      value: 'z1',
                      label: intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region.z1' }),
                    },
                    {
                      value: 'z2',
                      label: intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region.z2' }),
                    },
                    {
                      value: 'na0',
                      label: intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region.na0' }),
                    },
                    {
                      value: 'as0',
                      label: intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region.as0' }),
                    },
                    {
                      value: 'cn-east-2',
                      label: intl.formatMessage({ id: 'plugin.htmlcache.qiniu.region.cn-east2' }),
                    },
                    {
                      value: 'fog-cn-east-1',
                      label: intl.formatMessage({
                        id: 'plugin.htmlcache.qiniu.region.fog-cn-east1',
                      }),
                    },
                  ]}
                />
              </div>
              <div className={storageType !== 'upyun' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.upyun" />
                </Divider>
                <ProFormText
                  name="upyun_operator"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.upyun.operator' })}
                  placeholder=""
                />
                <ProFormText
                  name="upyun_password"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.upyun.password' })}
                  placeholder=""
                />
                <ProFormText
                  name="upyun_bucket"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.upyun.bucket' })}
                  placeholder=""
                />
              </div>
              <div className={storageType !== 'ftp' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.ftp" />
                </Divider>
                <p>
                  <FormattedMessage id="plugin.htmlcache.ftp.tips" />
                </p>
                <ProFormText
                  name="ftp_host"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ftp.host' })}
                  placeholder=""
                />
                <ProFormDigit
                  name="ftp_port"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ftp.port' })}
                  placeholder=""
                />
                <ProFormText
                  name="ftp_username"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ftp.username' })}
                  placeholder=""
                />
                <ProFormText
                  name="ftp_password"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ftp.password' })}
                  placeholder=""
                />
                <ProFormText
                  name="ftp_webroot"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ftp.webroot' })}
                  placeholder=""
                />
              </div>
              <div className={storageType !== 'minio' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.minio" /> {/* 需要在国际化文件中增加 MinIO 的翻译 */}
                </Divider>
                <ProFormText
                  name="minio_endpoint"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.minio.endpoint' })}
                  placeholder={intl.formatMessage({
                    id: 'plugin.htmlcache.minio.endpoint.placeholder',
                  })}
                />
                <ProFormText
                  name="minio_access_key"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.minio.access-key' })}
                  placeholder=""
                />
                <ProFormText
                  name="minio_secret_key"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.minio.secret-key' })}
                  placeholder=""
                />
                <ProFormText
                  name="minio_bucket"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.minio.bucket-name' })}
                  placeholder=""
                />
              </div>

              <div className={storageType !== 'ssh' ? 'hidden' : ''}>
                <Divider>
                  <FormattedMessage id="plugin.htmlcache.storage-type.ssh" />
                </Divider>
                <ProFormText
                  name="ssh_host"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ssh.host' })}
                  placeholder=""
                />
                <ProFormDigit
                  name="ssh_port"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ssh.port' })}
                  placeholder=""
                />
                <ProFormText
                  name="ssh_username"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ssh.username' })}
                  placeholder=""
                />
                <ProFormText
                  name="ssh_password"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ssh.password' })}
                  placeholder=""
                />
                <ProFormText
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ssh.or-key' })}
                  extra={intl.formatMessage({ id: 'plugin.htmlcache.ssh.or-key.description' })}
                >
                  <Upload
                    name="file"
                    className="logo-uploader"
                    showUploadList={false}
                    accept=".crt,.pem,.key"
                    customRequest={async (e) => handleUploadFile('ssh_private_key', e)}
                  >
                    <Button type="primary">
                      <FormattedMessage id="plugin.htmlcache.ssh.or-key.upload" />
                    </Button>
                  </Upload>
                  {pushSetting.ssh_private_key && (
                    <div className="upload-file">{pushSetting.ssh_private_key}</div>
                  )}
                </ProFormText>
                <ProFormText
                  name="ssh_webroot"
                  label={intl.formatMessage({ id: 'plugin.htmlcache.ssh.webroot' })}
                  placeholder=""
                />
              </div>
            </ProForm>
          )}
        </div>
      </Card>
    </PageContainer>
  );
};

export default PluginStorage;
