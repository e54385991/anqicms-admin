import { getStatisticSpider } from '@/services/statistic';
import { Line } from '@ant-design/plots';
import { PageContainer, StatisticCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React, { useEffect, useState } from 'react';

const StatisticSpider: React.FC<any> = () => {
  const [data, setData] = useState<any[]>([]);
  const intl = useIntl();

  const asyncFetch = () => {
    getStatisticSpider()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
    // fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log('fetch data failed', error);
    //   });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    //padding: 'auto',
    xField: 'date',
    yField: 'value',
    seriesField: 'label',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return (
    <PageContainer>
      <StatisticCard
        title={intl.formatMessage({ id: 'statistic.spider' })}
        tooltip={intl.formatMessage({ id: 'statistic.spider.tips' })}
        chart={<Line {...config} />}
      />
    </PageContainer>
  );
};

export default StatisticSpider;
