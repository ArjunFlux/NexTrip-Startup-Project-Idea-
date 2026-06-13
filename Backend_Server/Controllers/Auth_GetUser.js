const UserModel = require('../Database/UserDatabase');
async function HandleGetUser(req,res){
    try{
        const AllUsers = await UserModel.find({});
        if(!AllUsers){
            return res.status(500).json({"Error":"Internal Server Error","Message":"Coudln't get the user info"})
        }
        return res.status(202).json({"Success":"Request Execuated"});
    }catch(err){
        return res.status(504).json({"Error":"Gateway Timeout","Message":"Couldn't reslove the error/command in the try block"});
    }
}
module.exports = HandleGetUser