const mongoose = require('mongoose');

async function connection(){
    try{
        await mongoose.connect(`mongodb://localhost:27017/database-23-pract2`);
        console.log("database connected...");
    }catch(err){
        console.log(err);
    }
}
module.exports = connection;