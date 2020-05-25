const Data = require("../db/db.json");
// we're already importing express.js
// const bodyParser = require("body-parser");
// const uuid = require("uuid");
const router = require("express").Router();
const path = require("path");

// CREATE

// GET /notes
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET /
// * home default route
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exporting routes out to server
module.exports = router;