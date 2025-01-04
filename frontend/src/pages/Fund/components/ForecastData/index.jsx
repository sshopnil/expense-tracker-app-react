import { Typography } from '@mui/material'
import '../styles/fundhistory.css'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
// import Logs from './components/log';
import ForecastChart from './components/ForecastChart';
import PropTypes from 'prop-types';

export const ForecastData = ({data}) => {
    // console.log(data);
    const fixedData = data?.map((item)=> {return {date: item.date, value: parseFloat(item.amount)}})
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
                <PointOfSaleIcon sx={{ marginRight: '10px', color: '#a7e6c8', fontSize: 20, alignSelf: 'center', textAlign: 'center' }} />
                Forecasted Expenses
            </Typography>
            <div className="log-table">
                <ForecastChart data={fixedData}/>
            </div>
        </div>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.array
}