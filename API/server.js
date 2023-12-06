require('dotenv').config()
const http = require('http');
const secretKey = "secretkey";

const app = require('./Routes/index')
const server = http.createServer(app);
server.listen(process.env.PORT);