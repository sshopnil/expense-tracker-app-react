import { Box, Typography } from "@mui/material";
import '../styles/BalanceCard.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const BalanceCard = ({data}) =>{
    return(
        <Box className = 'card'>
            <Typography 
            sx={{
                fontSize: {md: 20, sm: 18},
                margin:'20px',
                display: 'flex',
                alignItems: 'center',

            }}
            >
            <AccountBalanceWalletIcon sx={{marginRight: '10px',color: '#ff0024', fontSize: 24, alignSelf:'center', textAlign: 'center'}}/>
                
                Balance Available 
            
            </Typography>
            <Typography
            sx={{
                fontSize: {md: 64, sm: 20},
                textAlign: 'center',
                margin:'20px 0'
            }}
            >{data?.totalFund} ৳</Typography>
        </Box>
    )
}