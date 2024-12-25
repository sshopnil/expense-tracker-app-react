import * as React from 'react';
import './expenseform.css';
import { TextField, Box, InputLabel, NativeSelect, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



const categories = [
  'Food and Drinks', 'Shopping', 'Housing', 'Transportation', 'Vehicle', 'Entertainment', 'Electronics', 'Financial Expenses', 'Investments'
];

export const ExpenseRecord = () => {

  return (
    <Box className="expense">
      <Typography sx={{marginTop:'50px', fontWeight:'bold', textTransform:'uppercase'}}>Add Expense</Typography>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '20vw' }, padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
        noValidate
        autoComplete="off"
        className='expense-form'
      >
        <TextField
          id="title"
          label="Title"
          variant='standard'
          sx={{
            '.MuiInputBase-root': {
              input: {
                color: 'white',
                fontSize: '16px'
              },
            },
            '.MuiFormLabel-root': {
              color: 'white',
              fontSize: '14px'
            },
            '.MuiFormLabel-root::after': {
              color: 'white',
              fontSize: '14px'
            },
            '.MuiInputBase-root::after': {
              borderBottom: '1px solid white !important',
            },
            '.MuiInputBase-root::before': {
              borderBottom: '1px solid white !important',
            }
          }}
          type='text'
        />
        <TextField
          id="amount"
          label="Amount"
          variant='standard'
          sx={{
            '.MuiInputBase-root': {
              input: {
                color: 'white',
                fontSize: '16px',
              }
            },
            '.MuiFormLabel-root': {
              color: 'white',
              fontSize: '14px'
            },
            '.MuiFormLabel-root::after': {
              color: 'white',
              fontSize: '14px'
            },
            '.MuiInputBase-root::after': {
              borderBottom: '1px solid white !important',
            },
            '.MuiInputBase-root::before': {
              borderBottom: '1px solid white !important',
            }

          }}
          type='number'
        />
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
          }}
          sx={{
            '.MuiInputBase-root': {
              borderBottom: '1px solid #e9524a !important',
            },
            '.MuiNativeSelect-select': {
              option: {
                backgroundColor: '#202447',
                borderColor: '#e9524a',
                fontSize: '14px'

              },
              color: 'white',
              borderBottom: '2px solid white !important',
              fontSize: '14px'
            },
            '.MuiSvgIcon-root': {
              color: 'white'
            },
            backgroundColor: 'transparent !important'
          }}
        >
          <option value={''} disabled selected>Select a Category</option>
          {
            categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))
          }
        </NativeSelect>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="Basic date time picker" sx={{color:'white'}}/>
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={2}
          variant='standard'
          sx={{
            '.MuiInputBase-root': {
              textarea: {
                color: 'white',
                fontSize: '16px',
              },
            },
            '.MuiFormLabel-root': {
              color: 'white',
              fontSize: '14px'
            },
            '.MuiFormLabel-root::after': {
              color: 'white',
              fontSize: '14px'
            },
            '.MuiInputBase-root::after': {
              borderBottom: '1px solid white !important',
            },
            '.MuiInputBase-root::before': {
              borderBottom: '1px solid white !important',
            }
          }}
        />
      </Box>
    </Box>
  );
}