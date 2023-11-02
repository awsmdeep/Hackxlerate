// Importing the mongoose library
const mongoose = require('mongoose');

// Defining the Schema for this model
const supportProgramsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    criteria: {
        type : String,
    },
    contact : {
        type : String,
        unique : true,
    },
    link : {
        type : String,
        required : true
    }
}, {
    timestamps : true
});

const SupportPrograms = mongoose.model('SupportPrograms',supportProgramsSchema);

module.exports = SupportPrograms;

