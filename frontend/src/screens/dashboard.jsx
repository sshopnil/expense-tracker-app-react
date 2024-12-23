import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const DashBoard=()=>{
    return(
        <Box sx={{height: "100vh", width:"100vw"}} flexGrow={1}>
            <Grid container spacing={2} sx={{height: "100vh", width:"100vw"}}>
                <Grid size={2} sx={{backgroundColor: "black"}}>
                    <Box >
                        <Typography>Side bar here</Typography>
                    </Box>
                </Grid>
                <Grid size={10} sx={{backgroundColor: "red"}}>  
                    <Box>
                        <Typography>Contents</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashBoard;