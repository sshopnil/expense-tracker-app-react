//essential
const express = require('express');

const router = express.Router();


//controllers
const {add_income, get_all_income} = require('../controllers/transactions.controller');


//routes
router.post('/add-income', add_income);
router.get('/', get_all_income);

module.exports = router;