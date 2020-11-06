const express = require("express");
const router = express.Router();

const CarModel = require("../models/carModle");

router.get('/', async (req, res) => {
    try {
        res.json({ message: 'carRoute' });
    } catch (error) {
        res.status(404).json({ error: error });
    }
});

router.post('/add', async (req, res) => {
    try {
        var id = req.body.id;
        var name = req.body.name;
        var color = req.body.color;
        var model = req.body.model;
        var weight = req.body.weight;
        
        var newCarModel = new CarModel({ id, name, color, model, weight });
        var response = await CarModel.create(newCarModel);

        res.json({ data: response });
    } catch (error) {
        res.status(404).json({ error: error });
    }
});

module.exports = router;
