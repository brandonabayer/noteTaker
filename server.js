// import dependency packages
const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")

// initialize the app through express

var app = express();

// create a port

var PORT = process.env.PORT || 3000;

// body parsing static information

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// grab html files and render them through our browser
app.use(express.static("public"));

// routes

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// start our server

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
