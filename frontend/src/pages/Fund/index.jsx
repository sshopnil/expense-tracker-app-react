import { BalanceCard } from "./components/BalanceCard/BalanceCard"
import { AddForm } from "./components/AddForm"
import { FundHistory } from "./components/FundHistory"
import './fund.css'
export const Fund = () =>{
    return(
        <div className="container">
            <AddForm/>
            <BalanceCard/>
            <FundHistory/>
        </div>
    )
}