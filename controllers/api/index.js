const router = require("express").Router();

//Defining which routes the app will work with on the backend
const teamRoutes = require("./team");
const rosterRoutes = require("./roster");
const scheduleRoutes = require("./schedule");
const users = require('./users');

//Defining how Express will work with the routes
router.use("/team", teamRoutes);
router.use("/roster", rosterRoutes);
router.use("/schedule", scheduleRoutes);
router.use("/users", users)

module.exports = router;
