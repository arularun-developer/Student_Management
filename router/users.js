var express = require('express');
var router = express.Router();
var user = require('../controller/userController')

router.post('/register', user.user_regsiter)
router.post('/login', user.user_login)

router.delete('/userDelete', user.userDeleted)


module.exports = router;
