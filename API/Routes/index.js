const express = require('express');
var cors = require('cors');
const connection = require('../ConnectionFiles/connection');

//Controllers
const studentdetailsRoute = require('../controllers/ResultPage');
const allstudentdetailsRoute = require('../controllers/StudentRecords');
const deletestudentRoute = require('../controllers/DeleteRecord');
const editstudentRoute = require('../controllers/UpdateRecord');
const addstudentRoute = require('../controllers/AddRecord');
const adminloginRoute = require('../controllers/AdminLogin');
const resultRoute = require('../controllers/StudentLogin');


// Middlewares
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Routes
app.use('/student',studentdetailsRoute);
app.use('/alldetails',allstudentdetailsRoute);
app.use('/deletestudent',deletestudentRoute);
app.use('/editstudent',editstudentRoute);
app.use('/addstudent',addstudentRoute);
app.use('/login',adminloginRoute);
app.use('/result',resultRoute)

module.exports = app;