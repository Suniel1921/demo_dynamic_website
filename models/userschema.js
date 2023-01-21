const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        require: true,
    },

    password: {
        type : String,
        require : true,
    },
    date: {
        type: Date,
        default: Date.now,
    }


})

//crating collections 
const userDetails = mongoose.model("userDetails", userSchema);
module.exports = userDetails;