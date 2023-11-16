const router = require('express').Router();
const registerController = require('../controller/registerController');

router.post('/', registerController.handleRegisterUsers);

module.exports = router;