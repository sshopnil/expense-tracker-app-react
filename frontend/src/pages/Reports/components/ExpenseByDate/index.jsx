import { Button, Typography } from '@mui/material';
import './expensedate.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useAuth } from '../../../../context/auth';
import { URL } from '../../../../GLOBAL_URL';
import axios from 'axios';
import ReportList from './components/ReportList';

export const ExpenseByDate = () => {
    const auth = useAuth();
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [filter, setFilter] = useState([]);

    const onReportSubmit = async () => {
        if (start && end) {
            try {
                const res = await axios.get(`${URL}/transaction/expense/custom/${start.toString()}/${end.toString()}/${auth.user}`);
                setFilter(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return (
        <div className="container-bydate">
            <Typography sx={{ p: 2, textAlign: 'center', fontWeight: 'bolder' }}>
                Expenditure Report
            </Typography>
            <div className="mid-components-bydate">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={start}
                        onChange={(newVal) => setStart(newVal)}
                        slotProps={{ textField: { variant: 'standard' } }}
                        label="Start Date"
                        sx={{
                            '& .MuiInputBase-input': {
                                color: 'white',
                                fontSize: '16px'
                            },
                            '& .MuiFormLabel-root': {
                                color: 'white',
                                fontSize: '14px'
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            '& .MuiInputBase-root:before': {
                                borderBottom: '1px solid white'
                            },
                            '& .MuiInputBase-root:after': {
                                borderBottom: '1px solid white'
                            }
                        }}
                    />
                    <DatePicker
                        value={end}
                        onChange={(newVal) => setEnd(newVal)}
                        slotProps={{ textField: { variant: 'standard' } }}
                        label="End Date"
                        sx={{
                            '& .MuiInputBase-input': {
                                color: 'white',
                                fontSize: '16px'
                            },
                            '& .MuiFormLabel-root': {
                                color: 'white',
                                fontSize: '14px'
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            '& .MuiInputBase-root:before': {
                                borderBottom: '1px solid white'
                            },
                            '& .MuiInputBase-root:after': {
                                borderBottom: '1px solid white'
                            }
                        }}
                    />
                </LocalizationProvider>
                <Button variant='contained' onClick={onReportSubmit}>Go</Button>
            </div>
            <div className="bottom-report-container">
                <ReportList filter={filter} />
                <div className="total-money">
                    <Typography sx={
                        {
                            float: 'left',
                            padding: '10px',
                            fontSize: '18px',
                            fontWeight: 'bolder'
                        }
                    }>Total Expense</Typography>
                    <Typography sx={
                        {
                            float: 'right',
                            padding: '10px',
                            fontSize: '18px',
                            fontWeight: 'bolder'
                        }
                    }>
                        {filter && filter?.total} Tk
                    </Typography>
                </div>
            </div>
        </div>
    );
};
