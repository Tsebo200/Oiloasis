const express = require('express')

const OilsSchema = require('../models/Oils.jsx');
const oils = require('../models/Oils.jsx');

const router = express();

//Read all
router.get('/api/oils', async(req, res) =>{
    const findoil = await OilsSchema.find()
    res.json(findoil)
})

//Read one
router.get('/api/oil/:id', async (req, res) => {
    const findoil = await OilsSchema.findById(req.params.id)
    res.json(findoil)
})

//Create
router.post('/api/oil', async (req,res) => {
    const oils = new OilsSchema({...req.body})
    await oils.save()
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

// Update 2
// router.patch('/api/oil/:id', async (req, res) =>{
//     console.log(res.body);
//     let stock = +req.body.varOne
    
//     const findProduct = await newProductModel.updateOne
//     // {_id: req.params.id},
//     // {}
// })

//Delete
router.delete('/api/oil/:id', async (req, res) =>{
    await OilsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;