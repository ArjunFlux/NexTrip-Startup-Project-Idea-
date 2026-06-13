const { V2 } = require('paseto');
require('dotenv').config();
// const PrivateKey = process.env.JWT_Secet;
const PrivateKey = Buffer.from(process.env.Private_Key, 'base64'); // note that the keys should be in the base64 or in the correctly buffered 
const PublicKey = Buffer.from(process.env.Public_Key, 'base64');
// console.log("The keys are : ",PrivateKey , "& ", PublicKey);
async function createPastoToken(UserGiven){
    const payload = {
        UserName : UserGiven.User,
        RoleOfTheUser : UserGiven.UserRole,
        issuedAt: new Date().toISOString(),
    }
    try{
        const PastoToken = await V2.sign(payload , PrivateKey,{
        expiresIn:'1h',
        issuer:"WebSite",
        audience:"users",
        SameSite:"Strict",
        })
        return PastoToken;
    }catch(err){
        console.log("Error in creating the pasto token : ",err);
    }
}

async function VerifiyPastoToken(Token){
    const TokenForVerification = V2.verify(Token , PublicKey,{
      issuer: "my-app",
      audience: "users",
    });
    if(!TokenForVerification){
        return res.json({ valid : false});
    }
    return res.json({ valid: true, payload });
}
module.exports = {createPastoToken , VerifiyPastoToken};