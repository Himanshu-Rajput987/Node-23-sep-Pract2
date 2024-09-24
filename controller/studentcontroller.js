const Student = require('../models/Student');

async function getStudent(req,res){
    try{
        let students = await Student.find({});
        console.log(students);
        res.send(students);
    }catch(err){
        console.log(err);
    }
}
async function addStudent(req,res){
    try{
        console.log(req.body, 'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log("Data Save Successfully");
        res.end("Student Added");
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getStudent,
    addStudent,
}