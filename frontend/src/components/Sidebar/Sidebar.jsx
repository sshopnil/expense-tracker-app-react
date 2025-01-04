import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const linkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? '#2d9edb9a' : 'transparent',
      borderRadius: '10px'
    }
  }
const handleLogout =(e) =>{
  e.preventDefault();
  auth.logout();
  navigate('Auth/Login', {replace: true});
}

  return (
    <div className="sidebar">
      <Typography className='sidebar-title'>Expense <span style={{ color: '#e9524a', fontSize: 22, fontWeight: 'bolder' }}>Tracker</span></Typography>
      <hr className='line' />
      <NavLink style={linkStyles} to={'/'} className='sidebar-item'>Fund</NavLink>
      <NavLink style={linkStyles} to={'/Expense'} className='sidebar-item'>Expense</NavLink>
      <NavLink style={linkStyles} to={'/Reports'} className='sidebar-item'>Reports</NavLink>

      <div className="bottom-info">
      <hr className='line' />
        <button onClick={handleLogout} style={{ width: '100%', backgroundColor: '#e9524a', color: 'white' }}>Logout</button>
      </div>
    </div>
  );
};


export default Sidebar;