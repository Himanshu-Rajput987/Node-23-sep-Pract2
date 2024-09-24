const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    roolNo: { type: String},
    name: { type: String },
    fatherName: { type: String },
    AadherNo: { type: String }
})

module.exports = mongoose.model('Student', StudentSchema);