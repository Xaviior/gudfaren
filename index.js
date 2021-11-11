const express = require("express");
const app = express();
const expressPort = 3000;
const mongoPort = 27017;
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose
  .connect(`mongodb://localhost:${mongoPort}/gudfaren`)
  .then(() => {
    console.log("Mongoose port open");
  })
  .catch((err) => {
    console.log("Mongo Error");
    console.log(err);
  });
// SET:::::
app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// USE:::::
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("newUser");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/vaaler", (req, res) => {
  res.render("vaaler");
});

// Create New User
app.post("/newUser", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  console.log(req.body);
  res.redirect("/home");
});

app.listen(expressPort, () => {
  console.log(`Port ${expressPort} is Open`);
});
