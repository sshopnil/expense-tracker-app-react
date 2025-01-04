import { Typography } from "@mui/material"
import { ExpenseByDate } from "./components/ExpenseByDate"
import { ExpensePieChart } from "./components/ExpensePieChart"
import './report.css'
export const Reports = () => {

    return (
        <div
            style={{
                display: 'grid',
                marginTop: '20px'
            }}
        >
            <div className="reportBox">
                <ExpenseByDate />
                <ExpensePieChart />
            </div>
        </div>
    )
}