
const IncomeSchema = require('../schemas/transactions.income-schema');


exports.add_income = async (req, res, next) => {
    // const {title, amount, category, description, date} = req.body;

    const income = IncomeSchema({ ...req.body });
    console.log(income);
    try {
        if (!req.body) {
            return res.status(400).json({ msg: "Invalid request body" });
        }
        if (req.body.amount <= 0 || !req.body.amount === 'number') {
            return res.status(400).json({ msg: "Amount must be a positive number" });
        }
        await income.save();
        res.status(200).json({ msg: "Added to the fund" });
    } catch (e) {
        console.log("Error: ", e);
    }
    finally {
        next();
    }
}

exports.get_all_income = async (req, res, next) => {
    try {
        const all_income = await IncomeSchema.find();
        res.json(all_income);
    }
    catch(e){
        console.log('Error while getting info');
    }
    finally{
        next();
    }
}