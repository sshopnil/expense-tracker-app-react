import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import PropTypes from 'prop-types';


function valueFormatter(value) {
  return `Tk. ${value}`;
}
const chartSetting = {
  series: [{ dataKey: 'value', label: 'Expenses For Next 7 Days', valueFormatter }],
  height: 300,
  sx: {
    '& .axisClasses.directionY .axisClasses.label': {
      transform: 'translateX(-10px)',
    },
    '& .MuiChartsAxis-root': {
      stroke: '#f1ae1b'
    },
    '& .MuiChartsAxis-line': {
      stroke: '#f1ae1b'
    },
    '& .MuiChartsLegend-root':{
      stroke: 'white'
    }
  },
};

export default function ForecastChart({ data }) {

  return (
    <BarChart
      dataset={data}
      xAxis={[
        { scaleType: 'band', dataKey: 'date'},
      ]}
      barLabel={(item) => `${item.value} ৳`}
      {...chartSetting}
    />
  );
}

ForecastChart.propTypes = {
  data: PropTypes.any
}

