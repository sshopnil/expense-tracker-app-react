const ARIMAPromise = require('arima/async');
const ExpenseSchema = require('../schemas/transactions.expense-schema');


exports.arima_forecast = async (req, res, next)=> {
    // #swagger.tags = ['/forecast']

    const {user_id} = req.params;
    const expenses = await ExpenseSchema.find({userId: user_id});
    try {
      const ARIMA = await ARIMAPromise; // Wait for ARIMA to be loaded
      const ts = expenses.map((item=> item.amount));

    //   const ts = data.map((item)=>item.amount);
      const arima = new ARIMA({ p: 0, d: 1, q: 10, P: 0, D: 0, Q: 0, S: 0, verbose: false }).train(ts);
      const [pred, errors] = arima.predict(7);
  
      console.log(pred); // Predicted values
      // You can also log errors or return the predictions if needed
      res.json(pred);
    } catch (error) {
      console.error('Error during ARIMA prediction:', error);
    }
    finally{
        next();
    }
  }
  
