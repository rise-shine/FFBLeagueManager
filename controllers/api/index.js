const router = require("express").Router();

//Defining which routes the app will work with on the backend
const teamRoutes = require("./team");
const rosterRoutes = require("./roster");
const scheduleRoutes = require("./schedule");

//Defining how Express will work with the routes
router.use("/team", teamRoutes);
router.use("/roster", rosterRoutes);
router.use("/schedule", scheduleRoutes);

module.exports = router;
