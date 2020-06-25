const Employee = require('../models/Employee');

// lấy toàn bộ dữ liệu

exports.getAllEmployees = async(req, res) => {
    try {
        let employees = await Employee.find({});
        return res.status(200).json({status: 'true', data: employees});
    } catch (error) {
        console.log(error);
    }
}
