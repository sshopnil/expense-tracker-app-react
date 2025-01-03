
const ExpenseSchema = require('../schemas/transactions.expense-schema');
const { FundModel } = require('../schemas/transactions.fund-schema');
const dayjs = require('dayjs');

exports.add_expense = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    // const {title, amount, category, description, date} = req.body;
    const {user_id} = req.params;
    const expense = ExpenseSchema({ userId: user_id, ...req.body });
    const availableFund = await FundModel.findOne({userId: user_id});
    // console.log(expense);
    try {
        const remaining_fund = availableFund.totalFund - req.body.amount;
        if (!req.body) {
            return res.status(400).json({ msg: "Invalid request body" });
        }
        if (req.body.amount <= 0 || !req.body.amount === 'number') {
            return res.status(400).json({ msg: "Amount must be a positive number" });
        }
        else if (remaining_fund < 0){
            return res.status(400).json({ msg: "Insufficient Fund Available" });
        }
        availableFund.totalFund = remaining_fund;

        await availableFund.save();
        await expense.save();

        res.status(200).json({ msg: "Expense incurred added!" });
    } catch (e) {
        console.log("Error: ", e);
    }
    finally {
        next();
    }
}
//geting all expenses incurred from a user

exports.get_all_expenses = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    const {user_id} = req.params;
    try {
        const all_expenses = await ExpenseSchema.find({userId: user_id});
        res.json(all_expenses);
    }
    catch (e) {
        console.log('Error while getting info');
    }
    finally {
        next();
    }
}


//getting expenses amount incurred today
exports.get_amount_today=async(req, res, next)=>{
    // #swagger.tags = ['/transaction']
    const {user_id} = req.params;
    try{
        const startOfDay = dayjs().startOf('day').toDate();
        const endOfDay = dayjs().endOf('day').toDate();
        const todays_expenses = await ExpenseSchema.find({
            userId:user_id,
            date:{
                $gte: startOfDay,
                $lt: endOfDay
            }
        });
        const total = todays_expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({total: total, expenses: todays_expenses});
    }
    catch(e){
        console.log("error while getting today's expenses");
    }
    finally{
        next();
    }
}

//getting expenses amount incurred this month
exports.get_amount_month=async(req, res, next)=>{
    // #swagger.tags = ['/transaction']
    const {user_id} = req.params;

    try{
        const startOfMonth = dayjs().startOf('month').toDate();
        const endOfMonth = dayjs().endOf('month').toDate();
        // console.log(startOfMonth)
        // console.log(endOfMonth)
        const expenses = await ExpenseSchema.find({
            userId:user_id,
            date:{
                $gte: startOfMonth,
                $lt: endOfMonth
            }
        });
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({total: total, expenses: expenses});
    }
    catch(e){
        console.log("error while getting this month's expenses");
        res.status(400);
    }
    finally{
        next();
    }
}

//getting expenses amount incurred this year
exports.get_amount_year=async(req, res, next)=>{
    // #swagger.tags = ['/transaction']
    const {user_id} = req.params;


    try{
        const startOfYear = dayjs().startOf('year').toDate();
        const endOfYear = dayjs().endOf('year').toDate();
        // console.log(startOfMonth)
        // console.log(endOfMonth)
        const expenses = await ExpenseSchema.find({
            userId:user_id,
            date:{
                $gte: startOfYear,
                $lt: endOfYear
            }
        });
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({total: total, expenses: expenses});
    }
    catch(e){
        console.log("error while getting this year's expenses");

        res.status(400);
    }
    finally{
        next();
    }
}

//getting expenses amount incurred in custom range
exports.get_amount_custom=async(req, res, next)=>{
    // #swagger.tags = ['/transaction']

    const { user_id, start_date, end_date } = req.params;

    try{
        const start = dayjs(start_date).startOf('day').toDate();
        const end = dayjs(end_date).endOf('day').toDate();
        
        const expenses = await ExpenseSchema.find({
            userId: user_id,
            createdAt: {
                $gte: start,
                $lte: end
            }
        });

        // console.log(start_date)
        // console.log(end_date)
        // console.log(user_id)
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({total: total, expenses: expenses});
    }
    catch(e){
        console.log("error while getting this customs's expenses");
        res.status(400).json({msg: e});
    }
    finally{
        next();
    }
}



// ==============================================fund services====================================================
exports.add_fund = async (req, res, next) => { //adding fund
    // const fund = FundModel({ ...req.body });
    // #swagger.tags = ['/transaction']

    const { user_id } = req.params;
    const fund = await FundModel.findOne({ userId: user_id });
    try {
        if (!req.body) {
            return res.status(400).json({ msg: 'Invalid Request Body' });
        }
        if (req.body.amount <= 0 || !req.body.amount === 'number') {
            return res.status(400).json({ msg: "Amount must be a positive number" });
        }
        if (!fund) {
            const newFund = new FundModel({
                userId: user_id,
                totalFund: req.body.amount,
                transactions: [{ amount: req.body.amount }]
            });
            await newFund.save();
            res.status(200).json({ msg: "New fund created!" });
        }
        else {
            // console.log(req.body.amount);

            fund.totalFund = parseFloat(fund.totalFund) + req.body.amount;
            fund.transactions.push({ amount: req.body.amount });
            await fund.save();
            res.status(201).json({ msg: "fund updated" });
        }
    }
    catch (e) {
        console.log('error', e);
    }
    finally {
        next();
    }
}

exports.get_fund = async(req, res, next)=>{
    // #swagger.tags = ['/transaction']

    const {user_id} = req.params;
    const funds = await FundModel.findOne({userId: user_id});
    res.json(funds);
}


// ========================================forecasting services =============================================

