
import { TextField, Box, Button } from '@mui/material';

export const Login = () => {
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
            >
                <TextField
                    id="email"
                    label="email"
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
                    type='email'
                />

                <Button sx={{ backgroundColor: "rgba(45, 158, 219, 0.2)", margin: "0 10px" }} variant="contained" >
                    Login
                </Button>
            </Box>
        </Box>
    );
}