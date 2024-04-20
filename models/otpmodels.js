import mongoose from 'mongoose'


// Defining Schema
const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
})

// Model
const OTPmodel = mongoose.model("otps", otpSchema)

export default OTPmodel;