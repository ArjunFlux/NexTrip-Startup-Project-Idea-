async function MiddlewareHandleRBCA(req,res,next){
    const TokenFromUser = req.body.Pasto_token;
    console.log("This is the Pasto token from the user : ",TokenFromUser);
    if(!TokenFromUser){
        return res.status(400).json({"Error":"401","Message":"Wrong Pasteo Token"})
    }
}  
module.exports = MiddlewareHandleRBCA