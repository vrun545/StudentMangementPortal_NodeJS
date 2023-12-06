const express = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();

router.put('/edit/:rollno',  (req,res) => {
    const Roll = req.params.rollno;
    let user = req.body;
    query = "update  student_result set name =? ,marks=?,DOB = ? where rollno = ?";
    connection.query(query,[user.name,user.marks,user.DOB,Roll],(err,results)=>{
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