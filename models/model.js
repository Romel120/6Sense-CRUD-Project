const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    isBlocked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Employee', employeeSchema);