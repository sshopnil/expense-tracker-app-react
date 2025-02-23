import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

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
    },
    '& .MuiBarLabel-root':{
      fill:'white'
    }
  },
};

export default function ForecastChart({ data }) {
  const modifiedData = data?.map((item)=> {return {date: dayjs(item.date).format('dddd\nDD/MM'), value: parseFloat(item.amount)}})

  return (
    <BarChart
      dataset={modifiedData}
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

