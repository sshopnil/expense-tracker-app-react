import { BalanceCard } from "./components/BalanceCard/BalanceCard"
import { AddForm } from "./components/AddForm"
import { TransactionLog } from "./components/TransactionLog"
import { BalanceTrend } from "./components/BalanceTrend"
import './fund.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { URL } from "../../GLOBAL_URL"
import { useAuth } from "../../context/auth"

export const Fund = () => {
    const [fund, setFund] = useState(null);
    const auth = useAuth();
    // console.log(URL);
    useEffect(()=>{
        fetchFund();
    }, []);
    const fetchFund = async()=>{
        const res = await axios.get(`${URL}/transaction/fund/${auth.user}`);
        setFund(res.data);
    }
    return (
        <div className="container">
            <AddForm fetch={fetchFund}/>
            <div className="middle">
                <BalanceCard data={fund}/>
                <BalanceTrend />
            </div>
            <TransactionLog />
        </div>
    )
}