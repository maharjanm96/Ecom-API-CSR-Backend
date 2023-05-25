const mongoose = require('mongoose');

const connectDatabase = async () =>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected Successfully!!!")

    }catch(err){
        console.log(err);
    }    
}
module.exports = connectDatabase;