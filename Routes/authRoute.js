const router = require('express').Router();
const authController = require('../controller/authController');

router.post('/', authController.handleloginUsers);

module.exports = router;