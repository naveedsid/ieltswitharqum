const express = require("express");
const app = express();
const path = require("path");




app.use(express.static(path.join(__dirname, "/public")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/about", (req, res) => {
    res.render("about");
});


app.get("/ielts-calculator", (req, res) => {
    res.render("ielts-calculator");
});




module.exports = app;