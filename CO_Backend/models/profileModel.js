import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match:  [/\S+@\S+\.\S+/,"Invalid email format"]
    },
    phoneNumber:{
        type: Number,
        maxlength: 10,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: 'default.jpg'
    }

})

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;