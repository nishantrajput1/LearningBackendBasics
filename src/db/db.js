const mongoose = require("mongoose");
// package to connect database to server
async function connectDB(){
    // ye mongoose bhot powerful hoti hai  
    // agar cluster ke andar halley naam ka database nahi milta hai to ye use create kardega
    // seerver ko connect karega database se 
    await mongoose.connect("MONGODB_URI rEPLACE")
    console.log("Connected to DB");
    
} 
module.exports = connectDB;