
import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';
import { URL } from '../../../GLOBAL_URL';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: ''
    });
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.username) {
            alert("Please fill out all required fields.");
            return;
          }
          // const res = await axios.post(`${URL}/transaction/add-expense/${auth.user}`, form);
      
          const res = await toast.promise(
            axios.post(`${URL}/user/add-user`, form),
            {
              pending: 'Pending to add user...',
              success: `User registered, now Login using email`,
              error: 'Failed to create user 🤯'
            }
        );
          if (res.status == 200) {
            navigate('/Auth/Login');

          }
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '20vw' }, padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="email"
                    label="Email"
                    variant='standard'
                    sx={{
                        '.MuiInputBase-root': {
                            input: {
                                color: 'white',
                                fontSize: '16px',
                                borderRadius: '5px',
                                padding: '5px',
                                marginTop: '10px'
                            },
                        },
                        '.MuiFormLabel-root': {
                            color: 'white',
                            fontSize: '24px',
                        },
                        '.MuiFormLabel-root::after': {
                            color: 'white',
                            fontSize: '20px',
                        },
                        '.MuiInputBase-root::after': {
                            borderBottom: '1px solid white !important',
                            borderRadius: '5px'

                        },
                        '.MuiInputBase-root::before': {
                            borderBottom: '1px solid white !important',
                            borderRadius: '5px'
                        }
                    }}
                    type='email'
                    value={form.email}
                    onChange={(e)=>setForm({...form, email: e.target.value})}
                    required
                />
                <TextField
                    id="username"
                    label="Username"
                    variant='standard'
                    sx={{
                        '.MuiInputBase-root': {
                            input: {
                                color: 'white',
                                fontSize: '16px',
                                borderRadius: '5px',
                                padding: '5px',
                                marginTop: '10px'
                            },
                        },
                        '.MuiFormLabel-root': {
                            color: 'white',
                            fontSize: '24px',
                        },
                        '.MuiFormLabel-root::after': {
                            color: 'white',
                            fontSize: '20px',
                        },
                        '.MuiInputBase-root::after': {
                            borderBottom: '1px solid white !important',
                            borderRadius: '5px'

                        },
                        '.MuiInputBase-root::before': {
                            borderBottom: '1px solid white !important',
                            borderRadius: '5px'
                        }
                    }}
                    type='text'
                    value={form.username}
                    onChange={(e)=>setForm({...form, username: e.target.value})}
                    required
                />

                <Button sx={{ backgroundColor: "rgba(45, 158, 219, 0.2)", margin: "0 10px" }} variant="contained" type='submit'>
                    Register
                </Button>
            </Box>
            <ToastContainer
                position="center"
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
}