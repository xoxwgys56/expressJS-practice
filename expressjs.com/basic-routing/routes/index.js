const express = require('express');
const router = express.Router();

// home page
router.get('/', function(req, res, next) {
    res.send("Hello ExpressJS!");
});

module.exports = router;