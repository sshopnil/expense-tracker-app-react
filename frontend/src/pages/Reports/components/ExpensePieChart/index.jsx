import { Button, Typography } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './expensepie.css'
import PieAnimation from './components/PieAnimation';
import { URL } from '../../../../GLOBAL_URL';
import axios from 'axios';
import { useAuth } from '../../../../context/auth';
import { useState } from 'react';

export const ExpensePieChart = ()=>{
    const auth = useAuth();
    const [chartData, setChartData] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    const FetchChartData = async()=>{
        console.log(start);
        console.log(end);
        if (start && end) {
            try {
                const res = await axios.get(`${URL}/transaction/expense/category/${start.toString()}/${end.toString()}/${auth.user}`);
                setChartData(res.data.chartData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
    return (
        <div className="container-pie">
            <Typography sx={{ p: 2, textAlign: 'center', fontWeight: 'bolder' }}>Expenditures Per Category</Typography>
            <div className="mid-components-pie">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={start}
                            onChange={(newVal) => setStart(newVal)}
                            slotProps={{ textField: { variant: 'standard' } }}
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
                            value={end}
                            onChange={(newVal) => setEnd(newVal)}
                            slotProps={{ textField: { variant: 'standard' } }}
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
                <Button variant='contained' onClick={FetchChartData}>Go</Button>
            </div>
            {chartData&&<PieAnimation chartData= {chartData}/>}
        </div>
    )
}