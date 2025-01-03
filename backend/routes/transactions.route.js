//essential
const express = require('express');

const router = express.Router();

//controllers
const {get_all_expenses, add_expense, add_fund, get_fund} = require('../services/transactions.services');
const {arima_forecast} = require('../services/forecasting.services');

//routes
router.post('/add-expense/:user_id', add_expense);
router.post('/add-fund/:user_id', add_fund);
router.get('/fund/:user_id', get_fund);
router.get('/expense/:user_id', get_all_expenses);
router.get('/forecast/:user_id', arima_forecast);
module.exports = router;