
import { TextField, Box, Button } from '@mui/material';

export const Register = () => {
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
                <TextField
                    id="username"
                    label="username"
                    variant='standard'
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
                    type='text'
                />

                <Button sx={{ backgroundColor: "rgba(45, 158, 219, 0.2)", margin: "0 10px" }} variant="contained" >
                    Register
                </Button>
            </Box>
        </Box>
    );
}