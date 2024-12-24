import { Typography } from '@mui/material'
import '../styles/fundhistory.css'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export const RecentExpense = () =>{
    return(
        <div className="history-card">
            <Typography
            sx={{
                fontSize: 20,
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <PointOfSaleIcon sx={{marginRight: '10px',color: '#a7e6c8', fontSize: 20, alignSelf:'center', textAlign: 'center'}}/>
                Recent Expenses
                </Typography>
        </div>
    )
}