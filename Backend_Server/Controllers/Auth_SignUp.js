const UserModel = require('../Database/UserDatabase');
const bcrypt = require('bcrypt');
const { createPastoToken } = require('../Service/PastoToken');
// const cookie = require('cookie-parser');
const bodyParser = require('body-parser');
async function CheckTheConvertedPassword(Password , Email){
    const HashedPassword = await UserModel.findOne({Email:Email},"Password");
    if(!HashedPassword){
        console.log("Error in the try block of the Password : ",err)
        return false;
    }
    try{
        const MatchHashedPassword = await bcrypt.compare(Password , HashedPassword.Password); // note that the user password should only be the password not the whole object
        return true;
    }catch(err){
        console.log("Error in the try block of the Password : ",err);
        return false;
    }
}
async function Auth_SignUp(req,res) {
    const {Email , Password} = req.body;
    if(!Email || !Password){
        return res.status(500).json({"Message":"Incomplete information entered by the user"});
    }
    const ConformationPassword = await CheckTheConvertedPassword(Password , Email);
    if(ConformationPassword == true){
        try{
            const BodyForToken = await UserModel.findOne({Email : Email});
            const PastoToken = await createPastoToken(BodyForToken);
            if(!PastoToken){
                return res.status(503).json({"Message":"Couldn't implement the pasto token due to some error"});
            }
            res.cookie("Pasto_token",PastoToken,{
                httponly:true,
                maxage:9000,
                secure:true,
            });
            console.log("The Pasto token is : ",PastoToken);
            return res.status(201).json({"Message":"Successfully Loggged in the user and made the pasto token for the logged in user"});
        }catch(err){
            console.log("Error in the pasto token block : ",err);
            return res.status(502).json({"Message":"Coudn't implement the Pasto token due to : ",err});
        }
    }
}
module.exports = Auth_SignUp