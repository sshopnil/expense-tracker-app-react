const mongoose = require('mongoose');
const { Schema } = mongoose;

const IncomeSchema = new Schema({
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
  type:{
    type: String,
    default: "income"
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
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Income', IncomeSchema);