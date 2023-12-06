const express  = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());


app.use(express.json());

router.get('/allstudentdetails', (req,res) => {
    let user = req.body;
    query = "select * from student_result";
    connection.query(query,(err,results) => {
        if (!err)
        {
            if (results.length <= 0)
            {
                res.status(500).json({message:"data not found"});
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