const Employee = require('../models/Employee');

// lấy toàn bộ dữ liệu

exports.getAllEmployees = (req, res) => {
    try {
        Employee.find({})
        .then(data =>{
            console.log(data)
            res.send(data)
        }).catch(err =>{
            console.log(err)
        })
    } catch (error) {
        console.log(error);
    }
}
