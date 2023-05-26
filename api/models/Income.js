const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IncomeSchema = new Schema({
    paycheck: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;