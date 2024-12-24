import { BalanceCard } from "./components/BalanceCard/BalanceCard"
import { AddForm } from "./components/AddForm"
import { RecentExpense } from "./components/RecentExpense"
import { BalanceTrend } from "./components/BalanceTrend"
import './fund.css'
export const Fund = () => {
    return (
        <div className="container">
            <AddForm />
            <div className="middle">
                <BalanceCard />
                <BalanceTrend />
            </div>
            <RecentExpense />
        </div>
    )
}