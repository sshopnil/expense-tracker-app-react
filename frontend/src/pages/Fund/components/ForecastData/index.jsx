import { Typography } from '@mui/material'
import '../styles/fundhistory.css'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
// import Logs from './components/log';
import ForecastChart from './components/ForecastChart';
import PropTypes from 'prop-types';

export const ForecastData = ({data, isAvailable}) => {
    // console.log(isAvailable);
    return (
        <div className="history-card">
            <Typography
                sx={{
                    fontSize: 20,
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <HistoryToggleOffIcon sx={{ marginRight: '10px', color: '#a7e6c8', fontSize: 20, alignSelf: 'center', textAlign: 'center' }} />
                Forecasted Expenses
            </Typography>
            <div className="log-table">
                {isAvailable ? <ForecastChart data={data}/>: <Typography>Add at least 10 expenses to view forecasted data</Typography>}
            </div>
        </div>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.array,
    isAvailable: PropTypes.bool
}