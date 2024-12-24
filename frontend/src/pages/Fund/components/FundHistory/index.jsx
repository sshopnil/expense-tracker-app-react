import { Typography } from '@mui/material'
import '../styles/fundhistory.css'
import HistoryIcon from '@mui/icons-material/History';

export const FundHistory = () =>{
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
                <HistoryIcon sx={{marginRight: '10px',color: '#a7e6c8', fontSize: 20, alignSelf:'center', textAlign: 'center'}}/>
                Fund History
                </Typography>
        </div>
    )
}