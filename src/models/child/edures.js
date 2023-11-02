const mongoose =  require('mongoose');

// Defining the Scheme of the model
const eduresSchema = new mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    grade : {
        type : Number,
        required : true
    },
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

const EduRes = mongoose.model('EduRes', eduresSchema);
module.exports = EduRes;