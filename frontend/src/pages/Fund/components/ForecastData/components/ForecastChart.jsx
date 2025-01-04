import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './dataset';
import PropTypes from 'prop-types';


const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  series: [{ dataKey: 'amount', label: 'Seoul rainfall', valueFormatter }],
  height: 300,
  sx: {
    '& .axisClasses.directionY .axisClasses.label': {
      transform: 'translateX(-10px)',
    },
  },
};

export default function ForecastChart({data}) {
  
  return (
    <BarChart
        dataset={data}
        xAxis={[
          { scaleType: 'band', dataKey: 'date'},
        ]}
        {...chartSetting}
      />
  );
}

ForecastChart.propTypes = {
  data: PropTypes.any
}

