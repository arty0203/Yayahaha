const express = require("express");
const router = express.Router();

const CarModel = require("../models/carModel");

var controller = require('../controllers/carController');

router.get('/', controller.getAll);

router.post('/add', controller.add);

router.get('/:id',controller.getByID);


router.put('/:id',controller.UpdateByID)

router.delete('/:id',controller.deleteByID)

module.exports = router;
