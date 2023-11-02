const mongoose = require('mongoose');

// Defining the Schema for the model
const guidanceSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    }
})

const Guidances = mongoose.model('Guidances', guidanceSchema);
module.exports = Guidances;