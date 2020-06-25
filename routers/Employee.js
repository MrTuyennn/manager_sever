const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// method post data
const employee = require('../controllers/Employee');
router.post('/send-data',employee.createEmployee);
router.post('/delete-data',employee.deleteEmployee);
router.post('/update-data',employee.updateEmployee);

// method get data
const api = require('../apis/Employee');
router.get('/api/getall-data',api.getAllEmployees);


module.exports = router;

// "name" : "nguyễn ngọc tuyên suuny 12",
//     "phone" : "0969734928",
//     "email" : "nguyenngoctuyen188@gmail.com",
//     "salary" : "1k$",
//     "picture" : "image.jpg",
//     "position" : "react native"