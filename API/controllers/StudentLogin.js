const express = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());

app.use(express.json());

//for particular student result:
router.get('/studentres/:rollno', (req,res) =>{
    const Roll = req.params.rollno;
    let user = req.body;
    query = "select * from student_result where rollno = ? "
    connection.query(query,[Roll],(err,results)=>{
        if(!err){
            if(results.length <= 0)
            {
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            res.status(500).json({message : "something went wrong"})
        }
        else{
            res.status(200).json(results);
        }
    })
})
module.exports = router;