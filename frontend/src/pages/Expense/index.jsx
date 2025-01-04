import { ExpenseRecord } from "./components/AddExpense"
import { ExpenseTrack } from "./components/ExpenseTrackByDay"
import { RecentExpenses } from "./components/RecentExpenses"
import './expense.css'
import axios from "axios"
import { useAuth } from "../../context/auth"
import { URL } from "../../GLOBAL_URL"
import { useState, useEffect} from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export const Expense = () => {
    const auth = useAuth();
    const [thisday, setThisDay] = useState();
    const [thisMonth, setThisMonth] = useState();
    const [thisYear, setThisYear] = useState();


    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async ()=>{
        const dayRes = await axios.get(`${URL}/transaction/expense/today/${auth.user}`);
        const monthRes = await axios.get(`${URL}/transaction/expense/month/${auth.user}`);
        const yearRes = await axios.get(`${URL}/transaction/expense/year/${auth.user}`);

        setThisDay(dayRes.data);
        setThisMonth(monthRes.data);
        setThisYear(yearRes.data);
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (thisday && thisMonth && thisYear) {
            setLoading(false);
        }
    }, [thisday, thisMonth, thisYear]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
            </Box>
        );
    }


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <ExpenseTrack day={thisday} month={thisMonth} year={thisYear}/>
            <div className="last-section">
                <ExpenseRecord fetchData = {fetchAllData}/>
                <RecentExpenses day={thisday}/>
            </div>
        </div>
    )
}