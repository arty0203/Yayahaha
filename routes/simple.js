const express = require("express");
const router = express.Router();

// route
router.route.get("/", function (req, res) {
    res.json({ message: 'get', data: req.body })
});

router.route.post("/", function (req, res) {
    var username = req.body.user;
    var password = req.body.password

    if (username === 'admin' && password === '1234') {
        res.json({ message: 'post', result: true, data: req.body })
    } else {
        res.json({ message: 'post', result: false, data: req.body })
    }
});

router.route.put("/", (req, res) => {
    var username = req.body.user;
    var password = req.body.password

    if (username === 'admin' && password === '1234') {
        res.json({ message: 'put', result: true, data: req.body })
    } else {
        res.json({ message: 'put', result: false, data: req.body })
    }
});

router.route.delete("/", (req, res) => {
    res.json({ message: 'delete' })
});

module.exports = router;