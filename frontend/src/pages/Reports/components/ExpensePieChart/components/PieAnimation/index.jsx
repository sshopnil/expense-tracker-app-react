import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS } from './webUsageStats';
import PropTypes from 'prop-types';

export default function PieAnimation({chartData}) {
  const valueFormatter = (item) => `${item.value}%`;
  const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

  return (
    <Box sx={{ width: '100%' }}>
      <PieChart
        height={300}
        series={[
          {
            data: mobileAndDesktopOS,
            innerRadius: 50,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
        skipAnimation={false}
      />
    </Box>
  );
}

PieAnimation.propTypes = {
  chartData: PropTypes.object
}