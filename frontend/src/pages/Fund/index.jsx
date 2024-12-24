import { BalanceCard } from "./components/BalanceCard/BalanceCard"
import { AddForm } from "./components/AddForm"
import { FundHistory } from "./components/FundHistory"
import { AccountBalance } from "./components/AccountBalance"
import './fund.css'
export const Fund = () =>{
    return(
        <div className="container">
            <AddForm/>
            <div className="middle">
            <BalanceCard/>
            <AccountBalance/>
            </div>
            <FundHistory/>
        </div>
    )
}