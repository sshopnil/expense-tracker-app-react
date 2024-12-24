import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const AddForm =()=> {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700, boxSizing: 'border-box',
        background: '#30355b',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        margin: '50px',
        padding: '15px',
    }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color:'white', fontVariantNumeric: 'oldstyle-nums'}}
        placeholder="Add Balance"
        inputProps={{ 'aria-label': 'Enter a number' }}
        type='number'
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <FormControl sx={{ boxSizing: 'border-box', height: 'auto', width: '10vw', borderColor:'white !important'}}>
        <InputLabel id="demo-simple-select-label" sx={{color:'white !important'}}>Source</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
          sx={{
            color:'white !important'
          }}
        >
          <MenuItem value={10}>Cash</MenuItem>
          <MenuItem value={20}>Bank</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AddBoxIcon />
      </IconButton>
    </Paper>
  );
}
