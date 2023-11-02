const express = require('express');

// Importing the Models
const EduRes = require('../../models/child/edures');
const Guidances = require('../../models/child/guidance');
const AccessPrograms = require('../../models/child/accessprograms');

// Router Configuration
const router = new express.Router();

// Educational Resources
router.post('/child/edures', async (req,res) => {
    const eduRes = new EduRes(req.body);
    try{
        await eduRes.save();
        res.status(201).send({eduRes});
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/child/edures', async (req,res) => {
    try{
        const list = await EduRes.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(400).send(e);
    }
})

// Guidances
router.post('/child/guidances', async (req,res) => {
    const guidance = new Guidances(req.body);
    try{
        await guidance.save();
        res.status(201).send({guidance});
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/child/guidances', async (req,res) => {
    try{
        const list = await Guidances.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(400).send(e);
    }
});

// Access to Programs
router.post('/child/accessprograms', async (req,res) => {
    const accessprograms = new AccessPrograms(req.body);
    try{
        await accessprograms.save();
        res.status(201).send({accessprograms});
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/child/accessprograms', async (req,res) => {
    try{
        const list = await AccessPrograms.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports =  router;