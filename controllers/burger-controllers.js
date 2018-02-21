var express = require("express"); 
var router = express.Router();
var burger = require("../models/burger.js");
router.get("/", function(req, res) {
 burger.all(function(data) {
var hbsObject = {
 burgers: data
};
res.render("index", hbsObject);
});
});

router.post("/", function(req, res) {
 console.log("POST PARAMS: %s",req.body.burger)
 burger.create([
 "burger_name"
], [
    req.body.burger
 ], function() {
    res.redirect("/");
  });
});
router.put("/:id", function(req, res) {
var condition = "id = " + req.params.id;
burger.update({devoured: true}, condition, function() {
res.redirect("/");
  });
});

module.exports = router;