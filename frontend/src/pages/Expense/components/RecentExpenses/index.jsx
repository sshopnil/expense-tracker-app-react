import { Typography } from '@mui/material';
import RecentExpenseList from './components/RecentExpenseList';
import './expensemonth.css'
import PropTypes from 'prop-types';

export const RecentExpenses = ({day}) => {
    return (
        <div className="expense-container">
            <Typography sx={{fontWeight: 'bolder',textTransform: 'uppercase', padding: '0px 0 10px 0', textAlign:'center', fontSize:'18px'}}>Recent Expenses</Typography>
            <RecentExpenseList day={day}/>
        </div>
    );
}

RecentExpenses.propTypes={
    day: PropTypes.object.isRequired
}