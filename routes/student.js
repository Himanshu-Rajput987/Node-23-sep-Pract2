const express = require('express');
const router = express.Router();
const studentcontroller = require('../controller/studentcontroller');
router.use(express.json());


router.get('/student', (req,res)=>{
    studentcontroller.getStudent(req, res);

})
router.post('/add/Student', (req, res)=>{
    studentcontroller.addStudent(req,res);
})

module.exports = router;