const mongoose = require('mongoose');

//Defining the Schema for the model
const ResourcesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    }
}, {
    timestamps : true
});

const Resources = mongoose.model('Resources', ResourcesSchema);
module.exports = Resources;