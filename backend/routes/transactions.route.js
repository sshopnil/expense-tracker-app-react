//essential
const express = require('express');

const router = express.Router();


//controllers
const {get_all_expenses, add_expense, add_fund} = require('../services/transactions.services');


//routes
router.post('/add-expense', add_expense);
router.post('/add-fund/:user_id', add_fund);
router.get('/expense', get_all_expenses);

module.exports = router;