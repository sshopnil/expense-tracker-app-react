import { Typography } from '@mui/material'
import './track.css'

export const ExpenseTrack = () => {
    return (
        <div className="track-section">
            <div className="box">
                <div className="grouped-info">
                    <Typography sx={{ fontSize: '24px' }}>0.00 ৳</Typography>
                    <Typography sx={{ color: '#e9524a', fontWeight: 'bold' }}>Expenses Today</Typography>
                </div>
            </div>
            <div className="box">
                <div className="grouped-info">
                    <Typography sx={{ fontSize: '24px' }}>0.00 ৳</Typography>
                    <Typography sx={{ color: '#e9524a', fontWeight: 'bold' }}>This Month</Typography>
                </div>
            </div>
            <div className="box">
                <div className="grouped-info">
                    <Typography sx={{ fontSize: '24px' }}>0.00 ৳</Typography>
                    <Typography sx={{ color: '#e9524a', fontWeight: 'bold' }}>This Year</Typography>
                </div>
            </div>
        </div>
    )
}