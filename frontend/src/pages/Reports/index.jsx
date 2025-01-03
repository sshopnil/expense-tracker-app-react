import { Typography } from "@mui/material"
import { ExpenseByDate } from "./components/ExpenseByDate"
import { ExpensePieChart } from "./components/ExpensePieChart"
export const Reports = () => {
    return (
        <div
            style={{
                display: 'grid',
                marginTop:'20px'
            }}
        >
            <div 
            style={{
                display:'flex',
                justifyContent:'space-around'
            }}
            >
                <ExpenseByDate />
                <ExpensePieChart />
            </div>
        </div>
    )
}