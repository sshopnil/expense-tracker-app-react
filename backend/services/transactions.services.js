
const ExpenseSchema = require('../schemas/transactions.expense-schema');
const { FundModel } = require('../schemas/transactions.fund-schema');
const mongoose = require('mongoose');
const dayjs = require('dayjs');

exports.add_expense = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    // const {title, amount, category, description, date} = req.body;
    const { user_id } = req.params;
    const expense = ExpenseSchema({ userId: user_id, ...req.body });
    const availableFund = await FundModel.findOne({ userId: user_id });
    // console.log(expense);
    try {
        const remaining_fund = availableFund.totalFund - req.body.amount;
        if (!req.body) {
            return res.status(400).json({ msg: "Invalid request body" });
        }
        if (req.body.amount <= 0 || !req.body.amount === 'number') {
            return res.status(400).json({ msg: "Amount must be a positive number" });
        }
        else if (remaining_fund < 0) {
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

    const { user_id } = req.params;
    try {
        const all_expenses = await ExpenseSchema.find({ userId: user_id });
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
exports.get_amount_today = async (req, res, next) => {
    // #swagger.tags = ['/transaction']
    const { user_id } = req.params;
    try {
        const startOfDay = dayjs().startOf('day').toDate();
        const endOfDay = dayjs().endOf('day').toDate();
        const todays_expenses = await ExpenseSchema.find({
            userId: user_id,
            date: {
                $gte: startOfDay,
                $lt: endOfDay
            }
        }).sort({ date: -1 });
        const total = todays_expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({ total: total, expenses: todays_expenses });
    }
    catch (e) {
        console.log("error while getting today's expenses");
    }
    finally {
        next();
    }
}

//getting expenses amount incurred this month
exports.get_amount_month = async (req, res, next) => {
    // #swagger.tags = ['/transaction']
    const { user_id } = req.params;

    try {
        const startOfMonth = dayjs().startOf('month').toDate();
        const endOfMonth = dayjs().endOf('month').toDate();
        // console.log(startOfMonth)
        // console.log(endOfMonth)
        const expenses = await ExpenseSchema.find({
            userId: user_id,
            date: {
                $gte: startOfMonth,
                $lt: endOfMonth
            }
        });
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({ total: total, expenses: expenses });
    }
    catch (e) {
        console.log("error while getting this month's expenses");
        res.status(400);
    }
    finally {
        next();
    }
}

//getting expenses amount incurred this year
exports.get_amount_year = async (req, res, next) => {
    // #swagger.tags = ['/transaction']
    const { user_id } = req.params;


    try {
        const startOfYear = dayjs().startOf('year').toDate();
        const endOfYear = dayjs().endOf('year').toDate();
        // console.log(startOfMonth)
        // console.log(endOfMonth)
        const expenses = await ExpenseSchema.find({
            userId: user_id,
            date: {
                $gte: startOfYear,
                $lt: endOfYear
            }
        });
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

        res.status(200).json({ total: total, expenses: expenses });
    }
    catch (e) {
        console.log("error while getting this year's expenses");

        res.status(400);
    }
    finally {
        next();
    }
}

//getting expenses amount incurred in custom range
exports.get_amount_custom = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    const { user_id, start_date, end_date } = req.params;

    try {
        const start = dayjs(start_date).startOf('day').toDate();
        const end = dayjs(end_date).endOf('day').toDate();

        const expenses = await ExpenseSchema.find({
            userId: user_id,
            date: {
                $gte: start,
                $lte: end
            }
        });

        let totalAmount = 0;
        const dailyTotals = {};

        expenses.forEach(expense => {
            const date = dayjs(expense.date).format('DD-MM-YYYY');

            totalAmount += expense.amount;

            if (!dailyTotals[date]) {
                dailyTotals[date] = {
                    total: 0,
                    expenses: []
                };
            }
            dailyTotals[date].total += expense.amount;
            dailyTotals[date].expenses.push(expense);
        });

        const groupedByDate = Object.entries(dailyTotals).map(([date, data]) => ({
            date,
            total: data.total,
            expenses: data.expenses
        }));

        res.status(200).json({
            total: totalAmount,
            expenses,
            groupedByDate
        });
    } catch (e) {
        console.error("Error fetching expenses:", e);
        res.status(400).json({ msg: 'Error fetching expenses' });
    } finally {
        next();
    }
};


//getting expenses amount incurred in category wise
exports.get_category_amount = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    const { user_id, start_date, end_date } = req.params;

    try {
        const start = dayjs(start_date).startOf('day').toDate();
        const end = dayjs(end_date).endOf('day').toDate();

        const expenses = await ExpenseSchema.find({
            userId: user_id,
            date: {
                $gte: start,
                $lte: end
            }
        });

        const categoryTotal = {};
        // const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

        // console.log(expenses);
        expenses.forEach(expense => {

            if (!categoryTotal[expense.category]) {
                categoryTotal[expense.category] = {
                    total: 0
                };
            }
            categoryTotal[expense.category].total += expense.amount;
        });

        const chartData = Object.entries(categoryTotal).map(([key, value]) => ({
            label: key,
            value: value.total
        }));

        res.status(200).json({ chartData });
    } catch (e) {
        console.error("Error fetching expenses:", e);
        res.status(400).json({ msg: 'Error fetching expenses' });
    } finally {
        next();
    }
};

exports.edit_expense = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    const { id } = req.params;
    const { title, amount, category } = req.body;

    try {
        const old_expense = await ExpenseSchema.findById(id);

        // console.log(old_expense);
        const new_amount = old_expense.amount - amount;

        const availableFund = await FundModel.findOne({ userId: old_expense.userId });
        const remaining_fund = availableFund.totalFund + new_amount;
        if (remaining_fund < 0) {
            return res.status(400).json({ msg: "Insufficient Fund Available" });
        }
        availableFund.totalFund = remaining_fund;


        const update_expense = await ExpenseSchema.findByIdAndUpdate(
            id,
            { title, amount, category },
            { new: true } 
        );

        if (!update_expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        await availableFund.save();
        res.status(200).json(update_expense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating expense', error: error.message });
    }
    finally{
        next();
    }
}


exports.delete_expense = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    const { id } = req.params;

    try {
        const deleted_inf = await ExpenseSchema.findOne({_id:id});

        const availableFund = await FundModel.findOne({ userId: deleted_inf.userId });
        
        const new_amount = availableFund.totalFund + deleted_inf.amount;
        availableFund.totalFund = new_amount;

        
        const deleted_expense = await ExpenseSchema.findByIdAndDelete(id);

        if (!deleted_expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        await availableFund.save();

        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting expense', error: error.message });
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

exports.get_fund = async (req, res, next) => {
    // #swagger.tags = ['/transaction']

    const { user_id } = req.params;
    const funds = await FundModel.findOne({ userId: user_id });
    if (!funds) {
        // If no funds exist for the user, initialize the fund object
        const newFund = new FundModel({
            userId: user_id,
            totalFund: 0,
            transactions: []
        });
        await newFund.save();
        funds = newFund;
    }

    res.json(funds);
}


// ========================================forecasting services =============================================

