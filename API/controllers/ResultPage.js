const express = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
 
app.use(express.json());
 
router.post('/studentresult', (req,res) => {
    let token;
    let user = req.body;
    query = "select * from student_result where rollno = ? and DOB =?"
 
    connection.query(query,[user.rollno,user.DOB],(err,results)=>{
        if (!err) {
            if (results.length <= 0) {
                res.status(401).json({ message: "Unauthorized" });
            } else {
                res.status(200).json(results);
            }
        }else{
            res.status(500).json({ message: "something went wrong" });
        }
    })
})
 
module.exports = router;