
const ExpenseSchema = require('../schemas/transactions.expense-schema');
const { FundModel } = require('../schemas/transactions.fund-schema');


exports.add_expense = async (req, res, next) => {
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

exports.get_all_expenses = async (req, res, next) => {
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



// ==============================================fund services====================================================
exports.add_fund = async (req, res, next) => { //adding fund
    // const fund = FundModel({ ...req.body });
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
            // console.log(typeof(fund.totalFund));

            fund.totalFund += req.body.amount;
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
    const {user_id} = req.params;
    const funds = await FundModel.findOne({userId: user_id});
    res.json(funds);
}


// ========================================forecasting services =============================================

