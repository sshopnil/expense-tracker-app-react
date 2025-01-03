import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Topbar.css';
const linkStyles = ({ isActive }) => {
    return {
        backgroundColor: isActive ? '#2d9edb9a' : 'transparent',
        borderRadius: '10px',
    }
}
export const TopBar = () => {
    return (
        <Grid size={12}>
            <Box
                sx={{
                    height: '6vh',
                    width: '20vw',
                    boxSizing: 'border-box',
                    background: '#30355b',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <div className="top-bar-item-box">
                    <NavLink style={linkStyles} to={'/Auth/Login'} className={'top-bar-item'}>Log In</NavLink>
                    <NavLink style={linkStyles} to={'/Auth/Register'} className={'top-bar-item'}>Register</NavLink>
                </div>
            </Box>
        </Grid>
    )
}