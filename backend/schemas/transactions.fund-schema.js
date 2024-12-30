const mongoose = require('mongoose');

const FundSchema = new mongoose.Schema({
  userId: { type: Number, required: true },  
  totalFund: { type: Number, required: true },
  transactions: [
    {
      date: { type: Date, default: Date.now }, 
      amount: { type: Number, required: true }
    }
  ],
});

FundSchema.virtual('User', {
  ref: 'User',
  localField: 'userId',
  foreignField: 'user_id',  
  justOne: true  
});

module.exports = {FundModel: mongoose.model('Fund', FundSchema)};
