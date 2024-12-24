import { Box, Typography } from "@mui/material";
import '../styles/BalanceCard.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const BalanceCard = () =>{
    return(
        <Box className = 'card'>
            <Typography 
            sx={{
                fontSize: {md: 32, sm: 20},
                textAlign: 'center',
                margin:'20px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center'
            }}
            >
            <AccountBalanceWalletIcon sx={{marginRight: '10px',color: '#ff0024', fontSize: 32, alignSelf:'center', textAlign: 'center'}}/>
                
                Balance Available 
            
            </Typography>
            <Typography
            sx={{
                fontSize: {md: 36, sm: 20},
                textAlign: 'center',
                margin:'20px 0'
            }}
            >0.00</Typography>
        </Box>
    )
}