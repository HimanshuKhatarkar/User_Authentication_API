import mongoose from 'mongoose'


// Defining Schema
const userSchema = new mongoose.Schema({
    name: {type:String, required : true, trim:true},
    email: {type:String, required : true, trim:true},
    password: {type:String, required : true, trim:true},
    age: {type:String, required : false},
    address_city: {type:String, required : false, trim:true},
    job_profile:{type:String, required : false, trim:true},
    job_current_company: {type:String, required : false, trim:true},
    tc: {type:Boolean, required : true}
})

// Model
const userModel = mongoose.model("user", userSchema)

export default userModel;