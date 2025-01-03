import * as React from 'react';
import './expenseform.css';
import { TextField, Box, InputLabel, NativeSelect, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';


const categories = [
  'Food and Drinks', 'Shopping', 'Housing', 'Transportation', 'Vehicle', 'Entertainment', 'Electronics', 'Financial Expenses', 'Investments'
];

export const ExpenseRecord = () => {
  const [value, setValue] = React.useState(dayjs());

  return (
    <Box className="expense">
      <Typography sx={{ marginTop: '30px', fontWeight: 'bold', textTransform: 'uppercase' }}>Add Expense</Typography>
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
              color: 'white',
              borderBottom: '2px solid white !important',
              fontSize: '14px'
            },
            '.css-a4seda-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option': {
              backgroundColor: '#202447 !important',
              borderColor: '#e9524a',
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
        <DateTimePicker
        label="Incurred On"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{ textField: { variant: "standard", contentEditable:'plaintext-only'} }}
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
            },
            '.Mui-disabled': {
              color: 'white !important',
              WebkitTextFillColor:'white'
            },
        }}
        disabled
        disableOpenPicker
      />
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
        <Button sx={{backgroundColor: "rgba(45, 158, 219, 0.2)", margin:"0 10px"}} variant="contained" endIcon={<PublishIcon />}>
        Submit
      </Button>
      </Box>
    </Box>
  );
}