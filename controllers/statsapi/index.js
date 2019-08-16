const router = require("express").Router();

//Defining which routes the app will work with on the backend
//const statRoutes = require("./stats.js");
const injRoutes = require("./injury");

//Defining how Express will work with the routes
//router.use("/stats", statRoutes);
router.use("/injuries", injRoutes);

router.use(function(req, res) {
  res.send("stats index page");
});

module.exports = router;
