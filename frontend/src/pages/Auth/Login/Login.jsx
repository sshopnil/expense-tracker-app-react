
import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../../context/auth';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../../GLOBAL_URL';
import axios from 'axios';


export const Login = () => {
    const [user, setUser] = useState(null);
    const [form, setForm] = useState({email: ''});
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(form.email){

            const res = await axios.get(`${URL}/user/login/${form.email}`);
            if(res.status == 200){
                auth.login(res.data.user.user_id);
                navigate('/', {replace: true});
            }
            // console.log(auth.user);
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
                    label="Your Email"
                    variant='standard'
                    value={form.email}
                    onChange={(e)=>setForm({...form, email: e.target.value})}
                    sx={{
                        '.MuiInputBase-root': {
                            input: {
                                color: 'white',
                                fontSize: '16px',
                                borderRadius: '5px',
                                padding:'5px',
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
                />

                <Button type="submit" sx={{ backgroundColor: "rgba(45, 158, 219, 0.2)", margin: "0 10px" }} variant="contained" >
                    Login
                </Button>
            </Box>
        </Box>
    );
}