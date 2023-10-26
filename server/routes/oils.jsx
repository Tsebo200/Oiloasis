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
router.patch('/api/oil/:id', async(req, res) => {

    console.log(req.body);

    const findProduct = await newProductModel.updateOne(
        { _id: req.params.id },
        {$set: {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            description: req.body.description,
            disclaimer: req.body.disclaimer,
            size: req.body.size,
            quantity: req.quantity,
            color: req.body.color
        }}
    );
    res.json(findProduct)
});


//Delete
router.delete('/api/oil/:id', async (req, res) =>{
    await OilsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// //Delete
// router.delete('/api/oil/:id', async (req, res) => {
//   try {
//     const oil = await OilsSchema.findById(req.params.id);

//     if (!oil) {
//       return res.status(404).json({ message: 'No product found' });
//     }

//     await oil.remove();
//     res.json({ message: 'Product removed' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// });

// //Delete 2
// router.delete('/api/deleteproduct/:id', async (req, res) => {
//     const findProduct = await newProductModel.remove({_id: req.params.id});
//     res.json(findProduct);
// });

module.exports = router;