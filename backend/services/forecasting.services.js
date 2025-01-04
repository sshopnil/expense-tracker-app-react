const ARIMAPromise = require('arima/async');
const ExpenseSchema = require('../schemas/transactions.expense-schema');
const dayjs = require('dayjs');

exports.arima_forecast = async (req, res, next) => {
  // #swagger.tags = ['/forecast']

  const { user_id } = req.params;
  const expenses = await ExpenseSchema.find({ userId: user_id }).sort({ date: 1 });
  try {
    const ARIMA = await ARIMAPromise;
    const ts = expenses.map((item) => item.amount); 

    const arima = new ARIMA({
      p: 2,
      d: 0,
      q: 2,
      P: 1,
      D: 0,
      Q: 1,
      S: 2,
      verbose: false
    }).train(ts);

    const [pred_values, errors] = arima.predict(7); 

    const latest_date = new Date(expenses[expenses.length - 1].date);

    const future_dates = [];
    for (let i = 1; i <= 7; i++) {
      const future_date = new Date(latest_date);
      future_date.setDate(latest_date.getDate() + i);
      future_dates.push(dayjs(future_date).format('DD/MM/YYYY'));
    }


    const predicted_date_amount = future_dates.map((date, index) => ({
      date: date,
      amount: pred_values[index].toFixed(2)
    }));

    res.json(predicted_date_amount); 
  } catch (error) {
    console.error('Error during ARIMA prediction:', error);
    res.status(500).json({ message: 'Error during ARIMA prediction' });
  } finally {
    next();
  }
};
