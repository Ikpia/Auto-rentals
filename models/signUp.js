const mongoose = require('mongoose');
const signUpSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    phone:{
        type:Number,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique:true,
        match:/^\S+@\S+\.\S+$/
    },

    password:{
        type:String,
        require:true
    },

    profession:{
        type:String,
        require:true
    },

    payments:{
        type:String,
        default:'not paid'
    },

},
{
    timestamps:true
}
);

const SignUp = mongoose.model('SignUp', signUpSchema);
module.exports = SignUp;