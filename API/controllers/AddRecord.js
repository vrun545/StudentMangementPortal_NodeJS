const express = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());

app.use(express.json());

router.post('/add',(req,res) => {
    let user = req.body;
    query = "INSERT INTO student_result (rollno,name,DOB,marks) VALUES (? , ? , ? , ?)";
    connection.query(query,[user.rollno,user.name,user.DOB,user.marks], (err, results) => {
        if(!err){
            if(results.length <= 0)
            {
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            res.status(500).json({message : "something went wrong "})
        }
        else{
            res.status(200).json(results);
        }
    })
})

module.exports = router;