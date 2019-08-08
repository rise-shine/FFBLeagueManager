const router = require("express").Router();

//Defining which routes the app will work with on the backend
const statRoutes = require("./stats");
const injRoutes = require("./injury");

//Defining how Express will work with the routes
router.use("/gamestats", statRoutes);
router.use("/injury", injRoutes);

module.exports = router;
