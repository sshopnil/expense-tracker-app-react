import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const Sidebar = () => {

const linkStyles = ({isActive}) =>{
  return{
    backgroundColor: isActive ? '#2d9edb9a' : 'transparent',
    borderRadius: '10px'
  }
}


  return (
    <div className="sidebar">
      <Typography className='sidebar-title'>Expense <span style={{color:'#e9524a', fontSize: 22}}>Tracker</span></Typography>
      <hr className='line'/>
      <NavLink style={linkStyles} to={'/'} className='sidebar-item'>Fund</NavLink>
      <NavLink style={linkStyles} to={'/Expense'} className='sidebar-item'>Expense</NavLink>
      <NavLink style={linkStyles} to={'/Reports'} className='sidebar-item'>Reports</NavLink>
    </div>
  );
};


export default Sidebar;