const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Employee = new Schema({
    // _id: Schema.Types.ObjectId,
    name : String,
    phone : String,
    email : String,
    salary : String,
    picture : String,
    position : String,
})

const employee = mongoose.model('empoloyee', Employee);
module.exports = employee;