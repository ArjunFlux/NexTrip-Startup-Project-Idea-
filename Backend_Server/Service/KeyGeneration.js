const nacl = require('tweetnacl');
console.log("Pasto Key generation starting now .... ")
const keyPair = nacl.sign.keyPair()
const privateKey = Buffer.from(keyPair.secretKey).toString('base64');
const publicKey = Buffer.from(keyPair.publicKey).toString('base64');
console.log("Pasto Key generation has been completed .....")
