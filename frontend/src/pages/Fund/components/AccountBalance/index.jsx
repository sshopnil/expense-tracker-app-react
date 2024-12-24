import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import '../styles/accountbalance.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TollIcon from '@mui/icons-material/Toll';

export const AccountBalance = () =>{
    return(
        <Box className = 'card'>
            <Typography 
            sx={{
                fontSize: {md: 20, sm: 18},
                textAlign: 'center',
                margin:'20px',
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <AccountBalanceWalletIcon sx={{marginRight: '10px',color: '#f1ae1b', fontSize: 24, alignSelf:'center', textAlign: 'center'}}/>
                
                Balances Per Account
            
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PaymentsIcon sx={{color:'#1dbf73'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Cash"/>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <AccountBalanceIcon sx={{color:'white'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Bank"/>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <TollIcon sx={{color:'yellow'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Other"/>
                </ListItem>
            </List>
        </Box>
    )
}