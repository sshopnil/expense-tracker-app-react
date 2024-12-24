import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Sidebar from "./components/Sidebar/Sidebar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
function App() {
    return (
        <Box flexGrow={1} className="container">
            <Grid container sx={{ height: "100vh", width: "100vw", boxSizing:"border-box"}} >
                <Grid size={2}>
                    <Box sx={{padding: '20px', boxSizing:'border-box', display:'grid', justifyContent:'center', alignItems:'center'}}>
                        <Sidebar />
                    </Box>
                </Grid>
                <Grid size={10} >
                    <Box sx={{padding: '20px', boxSizing:'border-box'}}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                        </Routes>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default App
