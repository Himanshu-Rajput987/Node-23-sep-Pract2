const express = require('express');
// const path = require('path');
const student = require('./routes/student');
let connection = require('./connection');
const app = express();
app.use(student);
connection();

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
})