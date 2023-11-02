const mongoose = require('mongoose');
const accessProgramsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    mode : {
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

const AccessPrograms = mongoose.model('AccessPrograms', accessProgramsSchema);
module.exports = AccessPrograms;