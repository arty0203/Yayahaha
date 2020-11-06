const { mountpath } = require("../app");
const CarModel = require("../models/carModel");
const controller = {};

controller.getAll = async (req, res) => {
    try {
        const car = await CarModel.find({});
        res.status(200).json({
            results: car.length,
            data: { car }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        })
    }
}

controller.add = async (req, res) => {
    try {
        var id = req.body.id
        var name = req.body.name
        var model = req.body.model
        var weight = req.body.weight
        var color = req.body.color
        const newcar = new CarModel({ id, name, model, weight, color });
        const data = await CarModel.create(newcar);
        res.json({ name: data })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error
        });
    }
}
controller.getByID = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await CarModel.findOne({ id });
        res.json({ id: car })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error
        });
    }
}

controller.UpdateByID = async (req, res) => {
    try {
        const id = req.params.id;
        var name = req.body.name
        var model = req.body.model
        var weight = req.body.weight
        var color = req.body.color
        const cars = await CarModel.findOneAndUpdate({ id }, { name, model, weight, color });
        res.json({ name: cars })
    } catch (error) {
        res.status(400).json({
            status: "ว๊ายผิด",
            message: error
        })
    }
}

controller.deleteByID = async (req, res) => {
    try {
        const id = req.params.id
        const cars = await CarModel.findOneAndDelete({ id });
        res.json({ data: cars })

    } catch (error) {
        res.status(400).json({
            status: "ว๊ายผิด",
            message: error
        })
    }
}

module.exports = controller;
