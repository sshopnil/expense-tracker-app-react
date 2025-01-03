import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../styles/addform.css'
import { Button } from '@mui/material';
import dayjs from 'dayjs';


export const AddForm = () => {
    const [date, setDate] = React.useState(dayjs());
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(date);
  }
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, boxSizing: 'border-box',
        background: '#30355b',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        margin: '50px',
        '& .MuiSelect-root': {
          borderColor: 'white !important'
        },
        padding:'15px'
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white', fontVariantNumeric: 'oldstyle-nums' }}
        placeholder="Add Balance"
        inputProps={{ 'aria-label': 'Enter a number' }}
        type='number'
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button type='submit' sx={{backgroundColor: "rgba(45, 158, 219, 0.2)", margin:"0 10px"}} variant="contained" endIcon={<AddBoxIcon sx={{fontSize:'50px'}}/>}>
        Add
      </Button>
    </Paper>
  );
}
