import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../styles/addform.css'
import { Button } from '@mui/material';
import axios from 'axios';
import { URL } from '../../../../GLOBAL_URL';
import { useAuth } from '../../../../context/auth';
import { ToastContainer, toast } from 'react-toastify';

export const AddForm = ({ fetch }) => {
  const auth = useAuth();
  const [formData, setFormData] = React.useState({ amount: ''});
  const notifyWarning = ()=>{
    toast.warn('Add amount more than 0 to the fund', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.amount) {
      const res = await toast.promise(
        axios.post(`${URL}/transaction/add-fund/${auth.user}`, formData),
        {
          pending: 'Pending to add money...',
          success: `${formData.amount}৳ Added to the fund 💵`,
          error: 'Failed to add fund 🤯'
        }
    );

      if (res.data.msg) {
        setFormData({amount: ''});
        await fetch();
      }
    }
    else{
      notifyWarning();
    }
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
        padding: '15px'
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white', fontVariantNumeric: 'oldstyle-nums' }}
        placeholder="Add Balance"
        inputProps={{ 'aria-label': 'Enter a number' }}
        type='number'
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button type='submit' sx={{ backgroundColor: "rgba(45, 158, 219, 0.2)", margin: "0 10px" }} variant="contained" endIcon={<AddBoxIcon sx={{ fontSize: '50px' }} />}>
        Add
      </Button>
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
    </Paper>
  );
}
