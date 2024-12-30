
const ExpenseSchema = require('../schemas/transactions.expense-schema');
const IncomeSchema = require('../schemas/transactions.income-schema');


exports.add_expense = async (req, res, next) => {
    // const {title, amount, category, description, date} = req.body;

    const expense = ExpenseSchema({ ...req.body });
    console.log(expense);
    try {
        if (!req.body) {
            return res.status(400).json({ msg: "Invalid request body" });
        }
        if (req.body.amount <= 0 || !req.body.amount === 'number') {
            return res.status(400).json({ msg: "Amount must be a positive number" });
        }
        await expense.save();
        res.status(200).json({ msg: "Expense incurred added!" });
    } catch (e) {
        console.log("Error: ", e);
    }
    finally {
        next();
    }
}

exports.get_all_expenses = async (req, res, next) => {
    try {
        const all_expenses = await ExpenseSchema.find();
        res.json(all_expenses);
    }
    catch (e) {
        console.log('Error while getting info');
    }
    finally {
        next();
    }
}

exports.add_income = async (req, res, next) => {
    const income = IncomeSchema({ ...req.body });
    try {
        if (!req.body) {
            return res.status(400).json({ msg: 'Invalid Request Body' });
        }
        if (req.body.amount <= 0 || !req.body.amount === 'number') {
            return res.status(400).json({ msg: "Amount must be a positive number" });
        }
        await income.save();
        res.status(200).json({ msg: "Added to the fund" });
    }
    catch(e){
        console.log('error', e);
    }
    finally{
        next();
    }
}