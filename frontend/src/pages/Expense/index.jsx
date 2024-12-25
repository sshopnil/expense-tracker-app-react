import { ExpenseRecord } from "./components/AddExpense"
import { ExpenseTrack } from "./components/ExpenseTrackByDay"
import { ExpenseThisMonth } from "./components/ExpenseMonth"
import './expense.css'
export const Expense = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <ExpenseTrack />
            <div className="last-section">
                <ExpenseRecord />
                <ExpenseThisMonth />
            </div>
        </div>
    )
}