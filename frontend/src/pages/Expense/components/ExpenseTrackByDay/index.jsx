import { Typography } from '@mui/material'
import './track.css'
import PropTypes from 'prop-types'

export const ExpenseTrack = ({day, month, year}) => {

    return (
        <div className="track-section">
            <div className="box">
                <div className="grouped-info">
                    <Typography sx={{ fontSize: '24px' }}>{day?.total} ৳</Typography>
                    <Typography sx={{ color: '#e9524a', fontWeight: 'bold' }}>Expenses Today</Typography>
                </div>
            </div>
            <div className="box">
                <div className="grouped-info">
                    <Typography sx={{ fontSize: '24px' }}>{month?.total} ৳</Typography>
                    <Typography sx={{ color: '#e9524a', fontWeight: 'bold' }}>This Month</Typography>
                </div>
            </div>
            <div className="box">
                <div className="grouped-info">
                    <Typography sx={{ fontSize: '24px' }}>{year?.total} ৳</Typography>
                    <Typography sx={{ color: '#e9524a', fontWeight: 'bold' }}>This Year</Typography>
                </div>
            </div>
        </div>
    )
}
ExpenseTrack.propTypes = {
    day: PropTypes.object.isRequired,
    month: PropTypes.object.isRequired,
    year: PropTypes.object.isRequired
}
