// to pass data to HTML
const fs = require("fs");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const router = require("express").Router();
const db = require("../db/db.json");

// module.exports = function (app) {
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

// GET
router.get("/notes", function (req, res) {
    res.json(db);
});
router.get("/notes/:id", function (req, res) {
    const found = db.some(db => db.id === req.params.id);
    if (found) {
        res.json(db.filter(db => db.id === req.params.id));
    } else {
        res
            .status(400)
            .json({ msg: `no note with the id of ${req.params.id} found` });
    }
});
// POST
// whenever we click post
router.post("/notes", function (req, res) {
    //console.log(Date.now());
    req.body.id = uuid.v4();
    console.log(req.body);
    db.push(req.body);
    res.json(req.body);
});

// DELETE
// Whenever we click on delete icon
// : meaning this parameter can change values for specific id
router.delete("/notes/:id", function (req, res) {
    // store.deleteYourFile(req.params.id)
    console.log("deleted note")
    const found = db.some(db => db.id === req.params.id);

    if (!found) {
        res
            .status(400)
            .json({ msg: `no note with the id of ${req.params.id} found` });
    }
    const filter = db.filter(db => db.id !== req.params.id);
    // rewrite file at new array values
    fs.writeFileSync("./db/db.json", JSON.stringify(filter))
    res.sendStatus(200)
        

        


});

// exporting routes out to server

module.exports = router;
