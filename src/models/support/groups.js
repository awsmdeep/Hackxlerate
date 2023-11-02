const mongoose = require('mongoose');


// Defining the scheme for the model
const groupSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    }
} , {
    timestamps : true
});

const Groups = mongoose.model('Groups', groupSchema);
module.exports = Groups;