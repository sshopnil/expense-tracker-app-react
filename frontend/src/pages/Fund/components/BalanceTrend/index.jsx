import { Box, Typography } from "@mui/material";
import '../styles/accountbalance.css';
import TimelineIcon from '@mui/icons-material/Timeline';

export const BalanceTrend = () =>{
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
            <TimelineIcon sx={{marginRight: '10px',color: '#f1ae1b', fontSize: 24, alignSelf:'center', textAlign: 'center'}}/>
                
                Balance Trend
            
            </Typography>
        </Box>
    )
}