const express = require("express");
const app = express();
const PORT = 3000;

// route definition.
app.get("/", (req, res) => {
    res.send("Hello ExpressJS!");
});
app.listen(PORT, () => {
    console.log(`express app listening on post ${PORT}.`);
})