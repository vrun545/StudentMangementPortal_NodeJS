const express = require('express');
const connection = require('../ConnectionFiles/connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
 
router.post("/adminlogin", async (req, res) => {
    let user = req.body;
    query = "select * from admin where name = ? and email = ?";
    connection.query(query, [user.adminName, user.adminEmail], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                res.status(401).json({ message: "Unauthorized" });
            } else {
                res.status(200).json(results);
            }
        } else {
            res.status(500).json({ message: "something went wrong" });
        }
    });
});
 
module.exports = router;