import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { Reports } from "./pages/Reports";
import { Expense } from "./pages/Expense";
import { Fund } from './pages/Fund'
import Sidebar from "./components/Sidebar/Sidebar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { TopBar } from './components/TopBar';


function App() {
    return (
        <Box flexGrow={1} className="container">
            <Grid container sx={{ height: "100vh", width: "100vw", boxSizing: "border-box" }} >
                <Grid size={2}>
                    <Box sx={{ padding: '20px', boxSizing: 'border-box', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                        <Sidebar />
                    </Box>
                </Grid>
                <Grid size={10} >
                    <Box sx={{ padding: '20px', boxSizing: 'border-box', color:'white'}}>
                        <TopBar/>
                        <Routes>
                            <Route path="/" element={<Fund />} />
                            <Route path="Expense" element={<Expense />} />
                            <Route path="Reports" element={<Reports />} />
                        </Routes>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default App
