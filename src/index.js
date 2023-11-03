// Importing the required libraries
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const axios = require('axios');
require('./db/mongoose');   // Mongoose Model
const port = process.env.PORT;
const apiUrl = process.env.API_BASE_URL || 'http://localhost:3000';


const app = express();

// Defining the paths for Express Confiurations
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

// Setting up handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

//Using the 'use' function to enable data rendering in JSON format
app.use(express.json());
app.use(express.static(publicDirectoryPath));

//Importing Routers
const supportRouter = require('./routers/support/support');
const childRouter = require('./routers/child/child');
const womenRouter = require('./routers/women/women');


app.use(supportRouter);
app.use(childRouter);
app.use(womenRouter);

app.get('',async (req,res) => {
    res.render('index', {
        name : "Sidharth"
    });
})

app.get('/main', (req,res) => {
    res.render('main');
})

app.get('/table' ,async (req,res) => {

    // Support programs
    const supportPrograms = await axios({
        method: 'GET',
        url: `${apiUrl}/support/programs`
    });

    // Support Resources
    const supportResources = await axios({
        method : 'GET',
        url :  `${apiUrl}/support/resources`
    });
    
    // Support Groups
    const supportGroups = await axios({
        method : 'GET',
        url : `${apiUrl}/support/groups`
    })
    res.render('table', {
        supportPrograms : supportPrograms.data,
        supportResources : supportResources.data,
        supportGroups : supportGroups.data
    });
})

// Child Section
app.get('/table1' ,async (req,res) => {

    // Support programs
    const educationResources = await axios({
        method: 'GET',
        url: `${apiUrl}/child/edures`
    });

    // Support Resources
    const guidance = await axios({
        method : 'GET',
        url :  `${apiUrl}/child/guidances`
    });
    
    // Support Groups
    const accessPrograms = await axios({
        method : 'GET',
        url : `${apiUrl}/child/accessprograms`
    })
    res.render('table1', {
        educationResources : educationResources.data,
        guidance : guidance.data,
        accessPrograms : accessPrograms.data
    });
});

// Women Section
app.get('/table2' ,async (req,res) => {

    // Technical Trainings
    const technicalTraining = await axios({
        method: 'GET',
        url: `${apiUrl}/women/trainingprograms`
    });

    // Resources
    const resources = await axios({
        method : 'GET',
        url :  `${apiUrl}/women/womenresources`
    });
    res.render('table2', {
        technicalTraining : technicalTraining.data,
        resources : resources.data
    });
});



//Listen Call
app.listen(port , () => {
    console.log("Server is set up at port ", port);
});

module.exports = app;