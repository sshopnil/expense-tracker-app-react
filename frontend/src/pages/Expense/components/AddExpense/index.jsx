import * as React from 'react';
import './expenseform.css';
import { TextField, Box, NativeSelect, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import axios from 'axios';
import { URL } from '../../../../GLOBAL_URL';
import { useAuth } from '../../../../context/auth';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

const categories = [
  'Food and Drinks', 'Shopping', 'Housing', 'Transportation', 'Vehicle', 'Entertainment', 'Electronics', 'Financial Expenses', 'Investments'
];

export const ExpenseRecord = ({fetchData}) => {
  const auth = useAuth();
  const [value, setValue] = React.useState(dayjs());
  const [form, setForm] = React.useState({
    title: '',
    amount: '',
    category: '',
    date: dayjs().toISOString(),
  });

  // Handle form submission
  const handleAddExpense = async (e) => {
    e.preventDefault();
    // console.log(form);
    if (!form.title || !form.amount || !form.category) {
      alert("Please fill out all required fields.");
      return;
    }
    // const res = await axios.post(`${URL}/transaction/add-expense/${auth.user}`, form);

    const res = await toast.promise(
      axios.post(`${URL}/transaction/add-expense/${auth.user}`, form),
      {
        pending: 'Pending to add expense...',
        success: {render(){
          fetchData()
          return `${form.amount}৳ deducted from the fund -💵`
        }},
        error: 'Failed to add expense 🤯'
      }
  );
    if (res.status == 200) {
      fetchData();
      setForm(
        {
          title: '',
          amount: '',
          category: '',
          date: dayjs().toISOString(),
        }
      );
    }
  };

  // // Handle date change 
  // const handleDateChange = (newValue) => {
  //   setValue(newValue);
  //   setForm({ ...form, date: newValue.toISOString() });
  // };

  return (
    <Box className="expense">
      <Typography sx={{ marginTop: '30px', fontWeight: 'bold', textTransform: 'uppercase' }}>
        Add Expense
      </Typography>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '20vw' },
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
        noValidate
        autoComplete="off"
        className='expense-form'
        onSubmit={handleAddExpense}
      >
        {/* Title Field */}
        <TextField
          id="title"
          label="Title"
          variant='standard'
          sx={textFieldStyles}
          value={form.title}
          type='text'
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        {/* Amount Field */}
        <TextField
          id="amount"
          label="Amount"
          variant='standard'
          value={form.amount}
          sx={textFieldStyles}
          type='number'
          onChange={(e) => setForm({ ...form, amount: parseFloat(e.target.value) })}
          required
        />

        {/* Category Dropdown */}
        <NativeSelect
          defaultValue={form.category}
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          sx={selectStyles}
          required
        >
          <option value="" disabled hidden>Select a Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </NativeSelect>

        {/* DateTime Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            id="date"
            label="Incurred On"
            value={value}
            slotProps={{ textField: { variant: "standard" } }}
            sx={textFieldStyles}
            disableOpenPicker
            disabled
          />
        </LocalizationProvider>


        {/* Submit Button */}
        <Button
          type='submit'
          sx={{ backgroundColor: "rgba(45, 158, 219, 0.2)", margin: "0 10px" }}
          variant="contained"
          endIcon={<PublishIcon />}
        >
          Submit
        </Button>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
};

const textFieldStyles = {
  '.MuiInputBase-root': {
    input: {
      color: 'white',
      fontSize: '16px'
    },
    textarea: {
      color: 'white',
      fontSize: '16px'
    }
  },
  '.MuiFormLabel-root': {
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
    WebkitTextFillColor: 'white'
  },
};

const selectStyles = {
  '.MuiNativeSelect-select': {
    color: 'white',
    fontSize: '14px',
    borderBottom: '2px solid white !important',
  },
  '.MuiNativeSelect-select option': {
    backgroundColor: '#202447 !important',
    borderColor: '#e9524a',
  },
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  backgroundColor: 'transparent !important'
};

ExpenseRecord.propTypes={
  fetchData: PropTypes.func.isRequired
}
