const http = require("http");
const express = require("express");

const port = 3000;
const app = express();

app.use(express.static("public"));