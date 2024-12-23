import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onItemSelect }) => {
  const items = ['Dashboard', 'Reports', 'Settings'];

  return (
    <div className="sidebar">
      {items.map((item) => (
        <div key={item} className="sidebar-item" onClick={() => onItemSelect(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;