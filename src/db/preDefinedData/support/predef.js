const mongoose = require('../../mongoose');

// Importing the Models
const SupportPrograms = require('../../../models/support/programs');
const Groups = require('../../../models/support/groups');
const Resources = require('../../../models/support/resources');
const EduRes = require('../../../models/child/edures');
const Guidances = require('../../../models/child/guidance');
const AccessPrograms = require('../../../models/child/accessprograms');
const TrainingPrograms = require('../../../models/women/trainingprograms');
const WomenResources = require('../../../models/women/womenresources');

// JSON files
const programsData = require('./programs.json');
const groupsData = require('./groups.json');
const resourcesData = require('./resources.json');
const eduResData = require('./educationResources.json');
const guidanceData = require('./guidance.json');
const accessprogramsData = require('./AccessToProgram.json');
const trainingProgramData = require('./trainingprograms.json');
const womenResourceData = require('./womenresources.json');

// Putting in predefined data into the database

// Programs database
const supportPrograms = async () => {
    try {
        for (i = 0; i < programsData.length; i++) {
            const supportProgram = new SupportPrograms(programsData[i]);
            await supportProgram.save();
            console.log(supportProgram);
        }
    } catch (e) {
        console.log(e);
    }
}

// Groups database
const groups = async () => {
    try{
        for(i=0;i<groupsData.length;i++){
            const groupProgram = new Groups(groupsData[i]);
            await groupProgram.save();
            console.log(groupProgram);
        }
    }catch(e){
        console.log(e);
    }
}

// Resources database
const resources = async () => {
    try{
        for(i=0;i<resourcesData.length;i++){
            const resourceProgram = new Resources(resourcesData[i]);
            await resourceProgram.save();
            console.log(resourceProgram);
        }
    }catch(e) {
        console.log(e);
    }
}

// Child Section

//Education Resources database
const edures = async () => {
    try{
        for(i=0;i<eduResData.length;i++){
            const eduResProgram = new EduRes(eduResData[i]);
            await eduResProgram.save();
            console.log(eduResProgram);
        }
    }catch(e) {
        console.log(e);
    }
}

// Guidances database
const guidances = async () => {
    try{
        for(i=0;i<guidanceData.length;i++){
            const guidanceProgram = new Guidances(guidanceData[i]);
            await guidanceProgram.save();
            console.log(guidanceProgram);
        }
    }catch(e) {
        console.log(e);
    }
};

//Access to Programs Database
const accessPrograms = async () => {
    try{
        for(i=0;i<accessprogramsData.length;i++){
            const accessProgram = new AccessPrograms(accessprogramsData[i]);
            await accessProgram.save();
            console.log(accessProgram);
        }
    }catch(e) {
        console.log(e);
    }
};

// Training Program Database
const trainingPrograms = async () => {
    try{
        for(i=0;i<trainingProgramData.length;i++){
            const trainingProgram = new TrainingPrograms(trainingProgramData[i]);
            await trainingProgram.save();
            console.log(trainingProgram);
        }
    }catch(e) {
        console.log(e);
    }
}

// Women Resource Database
const womenResource = async () => {
    try{
        for(i=0;i<womenResourceData.length;i++){
            const womenResourceProgram = new WomenResources(womenResourceData[i]);
            await womenResourceProgram.save();
            console.log(womenResourceProgram);
        }
    }catch(e) {
        console.log(e);
    }
}

const runDataPrograms = async ()=>{
    await supportPrograms();
    await groups();
    await resources();
    await edures();
    await guidances();
    await accessPrograms();
    await trainingPrograms();
    await womenResource();
}
runDataPrograms();