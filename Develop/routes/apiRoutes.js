// to pass data to HTML
var path = require("path");
const router = require("express").Router();
const db = require("/Users/brandonbayer/Documents/Trilogy/NU-CHI-FSF-PT-12-2019-U-C/Week_11/HW/Develop/db/db.json");

// GET

router.get("/notes", function (req, res) {
    console.log("workin", db);
    res.json(db);
    // db.getNotes().then(notes => res.json(notes))
    // res.json();
});
// getNotes function inside of the database
// POST
// whenever we click post


router.post("/notes");
// DELETE
// Whenever we click on delete icon
// : meaning this parameter can change values for specific id
router.delete("/notes/:id");

// exporting routes out to server

module.exports = router;