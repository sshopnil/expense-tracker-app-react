import { Typography } from '@mui/material';
import RecentExpenseList from './components/RecentExpenseList';
import './expensemonth.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import { URL } from '../../../../GLOBAL_URL';

export const RecentExpenses = ({day, fetchData}) => {
    const [form, setForm] = useState(
        {
            title: null,
            amount: null,
            category:null
        }
    )

    const handleEdit = async(id)=>{
        try {
            const res = await toast.promise(
                axios.put(`${URL}/transaction/expense/edit/${id}`, form),
                {
                    pending: 'Pending to load data...',
                    success: {
                        render() {
                            fetchData();
                            return 'Expense updated successfully!';
                        }
                    },
                    error: {
                        render() {
                            fetchData();
                            return 'Failed to update fund';
                        }
                    }
                }
            );
            // fetchData();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally{
            fetchData();
        }
    }
        
    
    const handleDelete = async(id)=>{
        try {
            const res = await toast.promise(
                axios.delete(`${URL}/transaction/expense/remove/${id}`),
                {
                    pending: 'Pending to load data...',
                    success: {
                        render() {
                            fetchData();
                            return 'Expense updated successfully!';
                        }
                    },
                    error: {
                        render() {
                            fetchData();
                            return 'Failed to update fund';
                        }
                    }
                }
            );
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }
    return (
        <div className="expense-container">
            <Typography sx={{fontWeight: 'bolder',textTransform: 'uppercase', padding: '0px 0 10px 0', textAlign:'center', fontSize:'18px'}}>Recent Expenses</Typography>
            {day?.expenses?.length != 0 ? <RecentExpenseList day={day} handleEdit={handleEdit} handleDelete={handleDelete} form={form} setForm={setForm}/>:<Typography sx={{textAlign:'center'}}>No new expenses incurred today</Typography>}
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
        </div>
    );
}

RecentExpenses.propTypes={
    day: PropTypes.object,
    fetchData: PropTypes.func
}