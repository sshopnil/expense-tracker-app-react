import { ExpenseRecord } from "./components/AddExpense"
import ECalander from "./components/ECalander"
import './expense.css'
export const Expense = () => {
    return (
        <div 
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center'
            }}        
        >
            <ExpenseRecord />
            <div className="transactionSection">
            <div className="calander-bg">
                <ECalander/>
            </div>
            
            </div>
        </div>
    )
}