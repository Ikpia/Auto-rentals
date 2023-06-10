const mongoose = require('mongoose');   // import mongoose  
const carDetailsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
},
{
timestamps:true
}
);

const CarDetails = mongoose.model('CarDetails', carDetailsSchema);
module.exports = CarDetails;