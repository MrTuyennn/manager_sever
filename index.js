const express = require('express');
const app = express()
const port = 3000

// cấu hình bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// kết nối mongoose (database)
const connectDB = require('./config/db')
connectDB();

// khai báo employee (database)
const employee = require('./routers/Employee');
app.use(employee);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))