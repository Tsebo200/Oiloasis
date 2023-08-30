const express = require('express')

const OilsSchema = require('../models/Oils.jsx');
const oils = require('../models/Oils.jsx');

const router = express();

//Read all
router.get('/api/oils', async(req, res) =>{
    const findkick = await OilsSchema.find()
    res.json(findkick)
})

//Read one
router.get('/api/oil/:id', async (req, res) => {
    const findkick = await OilsSchema.findById(req.params.id)
    res.json(findkick)
})

//Create
router.post('/api/oil', async (req,res) => {
    const kick = new OilsSchema({...req.body})
    await kick.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Update
router.put('/api/oil/:id', async (req, res) =>{
    const {id} = req.params.id;
    await OilsSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/oil/:id', async (req, res) =>{
    await OilsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;