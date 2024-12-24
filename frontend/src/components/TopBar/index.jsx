import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

export const TopBar = () => {
    return (
        <Grid size={12}>
            <Box
                sx={{
                    height: '6vh',
                    width: '80vw',
                    boxSizing: 'border-box',
                    background: '#30355b',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.18)'
                }}>


            </Box>
        </Grid>
    )
}