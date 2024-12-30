const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
}, {timestamps:true});


UserSchema.plugin(AutoIncrement, { inc_field: 'user_id' });


module.exports = { usermodel: mongoose.model('User', UserSchema), UserSchema };