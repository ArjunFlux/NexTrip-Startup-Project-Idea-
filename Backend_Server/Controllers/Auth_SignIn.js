const UserModel = require('../Database/UserDatabase')
const bcrypt = require('bcrypt');
async function convertPasswordIntoHashedPassword(Password){
    const SaltRound = 10;
    const HashedPassword = await bcrypt.hash(Password,SaltRound);
    if(!HashedPassword){
        return res.json({"Message":"Error while converting the Password into Hashed Password"});
    }
    return HashedPassword;
}
async function Auth_SignIn(req,res){
    const {Name , Email , Password} = req.body;
    console.log(" Name , Email , Password and the Role is : ",Name , Email , Password);
    if(!Name || !Email || !Password){
        return res.status(401).json({"Error":"401","Message":"The user has given incomplete details"})
    }
    const ConvertedPassword = await convertPasswordIntoHashedPassword(Password);
    if(ConvertedPassword){
        const NewUser = UserModel.create({
            User : Name,
            Email : Email,
            Password : ConvertedPassword,
        })
        if(!NewUser){
            return res.status(501).json({"Message":"Error while creating a new User"})
        }else{
            return res.status(201).json({"Message":"User successfully created"});
        }
    }else{
        return res.status(501).json({"Message":"The hashing of the password couldn't be implemented"});
    }
}
module.exports = Auth_SignIn