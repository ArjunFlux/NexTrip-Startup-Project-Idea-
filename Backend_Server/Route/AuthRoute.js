const express = require('express');
const Router = express.Router();
// files imports (Controllers)
const Auth_SignIn = require('../Controllers/Auth_SignIn')
const Auth_SignUp = require('../Controllers/Auth_SignUp');
const Auth_GetUser = require('../Controllers/Auth_GetUser')
// (Middleware)
const MiddlewareHandleRBCA = require('../Middleware/RoleBasedControlAccess');
// All the routes related to authentication
Router.post("/signIn",Auth_SignIn);
Router.post('/signUp',Auth_SignUp);
Router.get('/users',MiddlewareHandleRBCA,Auth_GetUser)
module.exports = Router