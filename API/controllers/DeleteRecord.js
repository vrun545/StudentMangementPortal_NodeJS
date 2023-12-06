const express = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();

router.delete("/delete/:rollno",(req,res) =>{
    const Roll = req.params.rollno;
    let user = req.body;
    query = "DELETE FROM student_result WHERE rollno = ?";
    connection.query(query,[Roll],(err,results)=>{
        if(!err){
            if(results.length <= 0)
            {
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            res.status(500).json({message : "something went wrong " + user.rollno})
        }
        else{
            res.status(200).json(results);
        }
    })
})

module.exports = router;