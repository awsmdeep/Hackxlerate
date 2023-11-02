const express = require('express');

// Importing the models
const TrainingPrograms = require('../../models/women/trainingprograms');
const WomenResources = require('../../models/women/womenresources');

// Defining the router
const router = new express.Router();

// Training Programs
router.post('/women/trainingprograms', async (req,res) => {
    const trainingProgram = new TrainingPrograms(req.body);
    try{
        await trainingProgram.save();
        res.status(201).send({trainingProgram});
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/women/trainingprograms', async (req,res) => {
    try{
        const list = await TrainingPrograms.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(500).send(e);
    }
})

// Women Resources
router.post('/women/womenresources', async (req,res) => {
    const womenResource = new WomenResources(req.body);
    try{
        await womenResource.save();
        res.status(201).send({womenResource});
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/women/womenresources', async (req,res) => {
    try{
        const list = await WomenResources.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;