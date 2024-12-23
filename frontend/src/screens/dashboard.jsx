import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const DashBoard=()=>{
    const [activeItem, setActiveItem] = useState('Dashboard');
    const handleSidebarClick = (item) => {
        setActiveItem(item);
      };
    return(
        <Box sx={{height: "100vh", width:"100vw"}} flexGrow={1}>
            <Grid container spacing={2} sx={{height: "100vh", width:"100vw"}}>
                <Grid size={2}>
                    <Box >
                    <Sidebar onItemSelect={handleSidebarClick} />
                    </Box>
                </Grid>
                <Grid size={10} >  
                    <Box>
                    <Content activeItem={activeItem} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashBoard;