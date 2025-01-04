import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieAnimation({ chartData }) {
  const valueFormatter = (item) => {
    return (
      <>
        <tspan x="0" dy="-1em">{item.label}</tspan>
        <tspan x="0" dy="1.2em">{item.value}৳</tspan>
      </>
    );
  };
  return (
    <Box sx={{ height: '70vh', width: '40vw', padding: '50px', boxSizing: 'border-box' }}>
      <PieChart
        series={[
          {
            data: chartData || [],
            innerRadius: 50,
            outerRadius: 180,
            arcLabel: 'formattedValue',
            arcLabelMinAngle: 15,
            cx: 200,
            cy: 200,
            paddingAngle: 2,
            cornerRadius: 4,
            valueFormatter
          },
        ]}
        sx={{
          '.MuiPieArcLabel-root': {
            fill: 'white',  // Make arc labels white
          },
          '.MuiChartsLegend-series': {
            text:{
              fill: 'white !important',  // Ensure legend text is white

            }
          },
          '.MuiTypography-root': {
            color: 'white',  // Apply to any general typography used in the chart
          },
        }}
        skipAnimation={false}
      />
    </Box>
  );
}

PieAnimation.propTypes = {
  chartData: PropTypes.array
};
