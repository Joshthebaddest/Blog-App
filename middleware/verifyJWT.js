const users = require('../model/userDB');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyJWT = async (req, res, next) => {
    const authHeader = req.header.authorization || req.header.Authorization
    if(!authHeader) return res.sendStatus(401);
    // check if the user exist
    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded)=>{
            if(err) return res.sendStatus(403);
            req.user = decoded.username;
            next()
        }
    )
}

module.exports = { verifyJWT };
