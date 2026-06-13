const mongoose = require('mongoose');
const UserDatabaseSchema = mongoose.Schema({
    User:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        unique:true,
    },
    UserRole:{
        type:String,
        role:["Admin","Normal","Checker"],
        default:"Normal",
    }
},{timestamp:true})
const UserSchemaModel = mongoose.model("UserDatabase",UserDatabaseSchema);
module.exports = UserSchemaModel