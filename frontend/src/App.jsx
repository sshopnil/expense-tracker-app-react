import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { Reports } from "./pages/Reports";
import { Expense } from "./pages/Expense";
import { Fund } from './pages/Fund'
import { Login } from './pages/Auth/Login/Login';
import { Register } from './pages/Auth/Register/Register';
import Sidebar from "./components/Sidebar/Sidebar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { TopBar } from './components/TopBar';
import { AuthProvider, useAuth } from './context/auth';
import { RequiredAuth } from './context/required';

const loginStyle = ()=>{
    return {
        padding: '20px', boxSizing: 'border-box', color: 'white', margin: 'auto'
    }
}
const mainStyle = ()=>{
    return {
        padding: '20px', boxSizing: 'border-box', color: 'white', margin: 'auto', height:'94.5vh' 
    }
}

function App() {
    const auth = useAuth();
    // console.log(auth?.user);

    return (
            <Box flexGrow={1} className="container">
                <Grid container sx={{ height: "100vh", width: "100vw", boxSizing: "border-box" }} >
                    <Grid size={auth?.user ? 2: 12}>
                        <Box sx={{ padding: '20px', boxSizing: 'border-box', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                            {auth?.user ? <Sidebar /> : <TopBar />}
                        </Box>
                    </Grid>
                    <Grid size={auth?.user? 10: 12}>
                        <Box sx={auth?.user ? mainStyle : loginStyle}>
                            <Routes>
                                <Route path="/" element={
                                    <RequiredAuth>
                                        <Fund />
                                    </RequiredAuth>
                                } />
                                <Route path="Expense" element={
                                    <RequiredAuth>
                                        <Expense />
                                    </RequiredAuth>
                                } />
                                <Route path="Reports" element={
                                    <RequiredAuth>
                                        <Reports />
                                    </RequiredAuth>
                                } />
                                <Route path="Auth/Login" element={<Login />} />
                                <Route path="Auth/Register" element={<Register />} />
                            </Routes>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    )
}

export default App
