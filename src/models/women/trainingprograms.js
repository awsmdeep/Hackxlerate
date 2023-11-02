const mongoose = require('mongoose');

// Defining the scheme for the model
const trainingProgramSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    venue : {
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

const TrainingPrograms = mongoose.model('TrainingPrograms', trainingProgramSchema);
module.exports = TrainingPrograms;