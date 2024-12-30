const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  userId: { type: Number, required: true },
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount:{
    type: Number,
    required: true,
    trim: true
  },
  date:{
    type: Date,
    trim: true,
    default: Date.now
  },
  category:{
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    trim: true,
  },
});

ExpenseSchema.virtual('User', {
  ref: 'User',
  localField: 'userId',
  foreignField: 'user_id',  
  justOne: false  
});

module.exports = mongoose.model('Expense', ExpenseSchema);