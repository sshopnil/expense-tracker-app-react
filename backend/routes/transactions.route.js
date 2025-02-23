//essential
const express = require('express');

const router = express.Router();

//controllers
const {
    get_all_expenses, 
    add_expense, 
    add_fund, 
    get_fund, 
    get_amount_today, 
    get_amount_month,
    get_amount_year,
    get_amount_custom,
    get_category_amount,
    edit_expense,
    delete_expense
} = require('../services/transactions.services');
const {arima_forecast} = require('../services/forecasting.services');

//routes
router.post('/add-fund/:user_id', add_fund);
router.get('/fund/:user_id', get_fund);

//expenses routes
router.post('/add-expense/:user_id', add_expense);
router.get('/expense/:user_id', get_all_expenses);
router.get('/expense/today/:user_id', get_amount_today);
router.get('/expense/month/:user_id', get_amount_month);
router.get('/expense/year/:user_id', get_amount_year);
router.get('/expense/custom/:start_date/:end_date/:user_id', get_amount_custom);
router.get('/expense/category/:start_date/:end_date/:user_id', get_category_amount);
router.put('/expense/edit/:id', edit_expense);
router.delete('/expense/remove/:id', delete_expense);

// forecasting route 
router.get('/forecast/:user_id', arima_forecast);
module.exports = router;