import { BalanceCard } from "./components/BalanceCard/BalanceCard"
import { AddForm } from "./components/AddForm"
import { ForecastData } from "./components/ForecastData"
import { BalanceTrend } from "./components/BalanceTrend"
import './fund.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { URL } from "../../GLOBAL_URL"
import { useAuth } from "../../context/auth"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Fund = () => {
    const [fund, setFund] = useState(null);
    const [forecast, setForecast] = useState(null);
    const auth = useAuth();
    // console.log(URL);
    useEffect(() => {
        fetchFund();
    }, []);
    const fetchFund = async () => {
        const res1 = await axios.get(`${URL}/transaction/fund/${auth.user}`);
        const res2 = await axios.get(`${URL}/transaction/forecast/${auth.user}`);
        setFund(res1.data);
        setForecast(res2.data);
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (fund && forecast) {
            setLoading(false);
        }
    }, [fund, forecast]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
            </Box>
        );
    }
    return (
        <div className="container">
            <AddForm fetch={fetchFund} />
            <div className="middle">
                <BalanceCard data={fund} />
                <BalanceTrend />
            </div>
            <ForecastData data={forecast} />
        </div>
    )
}