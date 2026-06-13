const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const AuthRoute = require('../Backend_Server/Route/AuthRoute')
const app = express();
const PORT = process.env.PORT;
require('./Database/Database_Connection');
// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Routes 
app.use('/auth',AuthRoute);
app.listen(PORT , ()=>{console.log(`This is server is live on the PORT : ${PORT}`)});