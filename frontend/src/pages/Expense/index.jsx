import { ExpenseRecord } from "./components/AddExpense"
import { ExpenseTrack } from "./components/ExpenseTrackByDay"
import { RecentExpenses } from "./components/RecentExpenses"
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
                <RecentExpenses />
            </div>
        </div>
    )
}