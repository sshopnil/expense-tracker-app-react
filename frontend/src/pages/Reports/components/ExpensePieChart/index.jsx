import { Button, Typography } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './expensepie.css'

export const ExpensePieChart = ()=>{
    return (
        <div className="container-pie">
            <Typography sx={{ p: 2, textAlign: 'center', fontWeight: 'bolder' }}>Expenditures Per Category</Typography>
            <div className="mid-components-pie">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { variant: "standard" } }}
                            sx={{
                                'MuiOutlinedInput-input': {
                                    border: '1px solid white !important'
                                },
                                '.MuiInputBase-root': {
                                    input: {
                                        color: 'white !important',
                                        fontSize: '16px'
                                    },
                                },
                                '. MuiInputAdornment-root': {
                                    color: 'white !important'
                                },
                                '.MuiFormLabel-root': {
                                    color: 'white !important',
                                    fontSize: '14px'
                                },
                                '.MuiInputBase-root::after': {
                                    borderBottom: '1px solid white !important',
                                },
                                '.MuiInputBase-root::before': {
                                    borderBottom: '1px solid white !important',
                                },
                                '.MuiOutlinedInput-input': {
                                    color: 'white'
                                },
                                '.MuiSvgIcon-root': {
                                    color: 'white !important',
                                    WebkitTextFillColor: 'white'
                                },
                            }}
                            label="Start Date" />
                        <DatePicker
                            slotProps={{ textField: { variant: "standard" } }}
                            sx={{
                                'MuiOutlinedInput-input': {
                                    border: '1px solid white !important'
                                },
                                '.MuiInputBase-root': {
                                    input: {
                                        color: 'white !important',
                                        fontSize: '16px'
                                    },
                                },
                                '. MuiInputAdornment-root': {
                                    color: 'white !important'
                                },
                                '.MuiFormLabel-root': {
                                    color: 'white !important',
                                    fontSize: '14px'
                                },
                                '.MuiInputBase-root::after': {
                                    borderBottom: '1px solid white !important',
                                },
                                '.MuiInputBase-root::before': {
                                    borderBottom: '1px solid white !important',
                                },
                                '.MuiOutlinedInput-input': {
                                    color: 'white'
                                },
                                '.MuiSvgIcon-root': {
                                    color: 'white !important',
                                    WebkitTextFillColor: 'white'
                                },
                            }}
                            label="End Date" />
                </LocalizationProvider>
                <Button variant='contained'>Go</Button>
            </div>
        </div>
    )
}