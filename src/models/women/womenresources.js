const mongoose = require('mongoose');

// Defining the scheme for the model
const womenresourcesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
} , {
    timestamps : true
});

const WomenResources = mongoose.model('WomenResources', womenresourcesSchema);
module.exports = WomenResources;