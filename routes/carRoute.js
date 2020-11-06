const express = require("express");
const router = express.Router();

const CarModel = require("../models/carModel");

var controller = require('../controllers/carController');

router.get('/', controller.getAll);

router.post('/add', controller.add);

router.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const car = await CarModel.findOne({ id });
        res.json({id: car})
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error
        });
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        var name = req.body.name
        var model = req.body.model
        var weight = req.body.weight
        var color = req.body.color
        const cars = await CarModel.findOneAndUpdate({id}, {name,model,weight, color});
        res.json({ name: cars })
    } catch (error) {
        res.status(400).json({
            status:"ว๊ายผิด",
            message: error
        })
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const cars = await CarModel.findOneAndDelete({ id });
        res.json({data:cars})
        
    } catch (error) {
        res.status(400).json({
            status:"ว๊ายผิด",
            message: error
        })
    }
})

module.exports = router;
