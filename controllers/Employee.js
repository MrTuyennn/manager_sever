const Employee = require('../models/Employee');
const mongoose = require('mongoose');

// tạo mới employee
exports.createEmployee = async (req,res) =>{
     let employee = await Employee({ 
         _id : new mongoose.Types.ObjectId,
         name : req.body.name,
         phone : req.body.phone,
         email : req.body.email,
         salary : req.body.salary,
         position : req.body.position,
         picture : req.body.picture,
     });
     employee.save(function(err,data) {
         if (err) {
             console.log(err);
             res.send("err");
             return;
         }else{
             console.log(data);
             console.log("thêm thành công");
             res.send("thêm thành công")
         }
     })
    
};

// xóa employee

exports.deleteEmployee = function(req, res) {
    console.log(req.body.id);
    console.log(req.params.id);
    Employee.findByIdAndDelete({_id:req.body.id},(err,data)=>{
       if(err){
           console.log(err);
           res.send("err");
           return;
       }else{
           console.log("Xóa thành công" + " " + data);
           res.send("xóa thành công");
       }
    })
};

// cập nhập employee
exports.updateEmployee = function (req, res) {
    Employee.findByIdAndUpdate( req.body.id,{ 
            name : req.body.name,
            phone : req.body.phone,
            email : req.body.email,
            salary : req.body.salary,
            position : req.body.position,
            picture : req.body.picture,
    }).catch(err =>{
        console.log(err);
        console.log("update thất bại");
        res.send("update thất bại");
    }).then(data =>{
        console.log(data);
        console.log("update thành công");
        res.send("update thành công");
    })
}