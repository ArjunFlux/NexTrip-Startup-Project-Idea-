require('dotenv').config();
const mongoose = require('mongoose');
const DatabaseConnectionUrl = process.env.DatabaseConnection_URL;
mongoose.connect(DatabaseConnectionUrl).then(()=>{console.log("The Database connection successfully established")}).catch((err)=>{console.log("There is an erorr while connecting to the database",err)});
