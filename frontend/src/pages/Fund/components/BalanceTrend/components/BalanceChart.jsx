import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BalanceChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={550}
      height={150}
      sx={{
        '& .MuiChartsAxis-root':{
          stroke:'#f1ae1b'
        },
        '& .MuiChartsAxis-line':{
          stroke:'#f1ae1b'
        }
      }}
    />
  );
}
