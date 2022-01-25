const createError = require('http-errors');
const express = require("express");
const PORT = 3000;

const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");

const app = express();

// route definition.
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use((req, res, next) => {
    // catch 404
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error");
});


// app.listen is located on `/bin/www` file.

module.exports = app;