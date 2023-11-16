const users = require('../model/userDB');
const bcrypt = require('bcrypt');


const handleRegisterUsers = async (req, res) => {
    const user = req.body;
    // check if the user exist
    const duplicate = users.find(b => b.email == user.email);
    if(duplicate) return res.sendStatus(409);
    try{
        // register new user
        const hashPwd = await bcrypt.hash(password, 10);    // hash password
        const newUser = {...user, password: hashPwd} 
        user.push(...newUser);
        res.status(201).json({'success': `user ${newUser.name} registered successfully`})
    }
    catch(err){
        res.status(500).send({'message': err.message});
    }
}

module.exports = {handleRegisterUsers};
