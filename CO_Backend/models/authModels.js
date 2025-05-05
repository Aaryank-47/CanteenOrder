import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    college : {
        type: String,
        required: true,
        trim: true
    },
    contact : {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Phone number must be 10 digits"]
    },
    email : {
        type: String,
        required: true,
        trim: true,
        match : [/\S+@\S+\.\S+/,"Invalid email format"]
    },
    password : {
        type: String,
        required: true,
        trim: true,
        // match: [/^(?=.[a-z])(?=.[A-Z])(?=.*\d)(?=.*[@$!?&%*])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain atleast 8 characters, one uppercase, one lowercase, one symbol"]
    },
    otp : {
        type: String,
        default: null
    },
    otpExpire : {
        type: Date,
        default: null
    },
})

const User = mongoose.model('User',userSchema);
export default User;
