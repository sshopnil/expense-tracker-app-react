import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <Typography className='sidebar-title'>Expense <span style={{color:'#e9524a'}}>Tracker</span></Typography>
      <hr className='line'/>
      <NavLink to={'/'} className='sidebar-item'>Home</NavLink>
      <NavLink to={'/about'} className='sidebar-item'>About</NavLink>
    </div>
  );
};


export default Sidebar;