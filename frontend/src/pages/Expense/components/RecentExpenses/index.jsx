import { Typography } from '@mui/material';
import RecentExpenseList from './components/RecentExpenseList';
import './expensemonth.css'

export const RecentExpenses = () => {
    return (
        <div className="expense-container">
            <Typography sx={{fontWeight: 'bolder',textTransform: 'uppercase', padding: '0px 0 10px 0', textAlign:'center', fontSize:'18px'}}>Recent Expenses</Typography>
            <RecentExpenseList />
        </div>
    );
}