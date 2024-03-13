var express = require('express');
var router = express.Router();
var studentController = require('../controller/studentController')
var { Jwt_verify_token } = require('../helper/jwt')

router.post('/Added', Jwt_verify_token, studentController.student_Add)
router.get('/Getall', Jwt_verify_token, studentController.getAllStudentsList)

router.post('/MarkAdded', Jwt_verify_token, studentController.studentMarkAdded)

router.get('/MarksGet', Jwt_verify_token, studentController.getAllMarksList)

router.put('/MarksUpdated', Jwt_verify_token, studentController.studentMarkUpdated)

router.get('/PassedDetails', Jwt_verify_token, studentController.getPassMarkDetails)

router.get('/FailedDetails', Jwt_verify_token, studentController.getFailedMarkDetails)



module.exports = router;
