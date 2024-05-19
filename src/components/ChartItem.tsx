import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Chart } from '../types';

interface ChartItemProps {
  chart: Chart;
}

const ChartItem: React.FC<ChartItemProps> = ({ chart }) => {
  const options = {
    title: {
      text: chart.name,
    },
    series: [
      {
        type: chart.type,
        data: chart.data.map(d => [new Date(d.date).getTime(), d.value]),
        color: chart.color,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartItem;
