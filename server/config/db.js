const mongoose = require("mongoose")
const connectDB = () =>{
    try{
        const conn = mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to Db`);}
    catch(error){
        console.log(`Error in Db connection ${error}`);}};
module.exports =  connectDB;