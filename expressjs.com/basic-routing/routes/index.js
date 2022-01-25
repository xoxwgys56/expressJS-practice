const express = require('express');
const router = express.Router();

// home page
router.get('/', function(req, res, next) {
    res.send("Hello GET ExpressJS!");
});

router.post('/', function(req, res, next) {
    res.send("Hello POST ExpressJS!");
});

router.put('/', function(req, res, next) {
    res.send("Hello PUT ExpressJS!");
});

router.delete('/', function(req, res, next) {
    res.send("Hello DELETE ExpressJS!");
});

module.exports = router;