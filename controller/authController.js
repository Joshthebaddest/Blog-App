const users = require('../model/userDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();


const handleLoginUsers = async (req, res) => {
    const {email, password} = req.body;
    // check if the user exist
    const user = users.find(b => b.email == user.email);
    if(!user) return res.sendStatus(401);   // unathorized user
    try{
        // conpare password
        const match = await bcrypt.compare(password, user.password)    // hash password
        if (match){
            // jwt
            const accessToken = jwt.sign(
                {'username': user.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '4h'}
            );
            const refreshToken = jwt.sign(
                {'username': user.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: '1d'}
            )
            user.refreshToken = refreshToken;
            const getAllUsers = users.filter(b => b.email !== user.email);
            users = [...getAllUsers, user]; 

            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
            res.json({accessToken});
        }
        else{
            res.sendStatus(401)
        }
    }
    catch(err){
        res.status(500).send({'message': err.message});
    }
}

module.exports = {handleloginUsers};
