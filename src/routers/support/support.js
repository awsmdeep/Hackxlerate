const express = require('express');

// Importing the Models
const SupportPrograms = require('../../models/support/programs');
const Groups = require('../../models/support/groups');
const Resource = require('../../models/support/resources');

//Router configuration
const router = new express.Router();


// Financial assistance programs endpoints
router.post('/support/programs',async (req, res) => {

    const supportProgram = new SupportPrograms(req.body);
    
    try{
        await supportProgram.save();
        res.status(201).send({supportProgram});
    }catch (e){
        res.status(400).send(e);
    }
});

router.get('/support/programs', async (req,res) => {
    try{
        const list = await SupportPrograms.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(404).send(e);
    }
});


// Support Groups Programs
router.post('/support/groups', async (req, res) => {
    const group = new Groups(req.body);

    try{
        await group.save();
        res.status(201).send({group});
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/support/groups',async (req,res) => {
    try{
        const list = await Groups.find({});

        res.status(200).json(list);
    }catch(e){
        res.status(404).send(e);
    }
});

// Resources Programs
router.post('/support/resources', async (req,res) => {
    const resourceProgram = new Resource(req.body);
        
    try{
        await resourceProgram.save();
        res.status(201).send({resourceProgram});
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/support/resources',async (req,res) => {
    try{
        const list = await Resource.find({});
        res.status(200).json(list);
    }catch(e){
        res.status(404).send(e);
    }
});


module.exports = router;