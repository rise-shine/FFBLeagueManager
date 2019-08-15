const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const statsApi = require("./statsapi/stats");
// Defining how Express will work with the API Routes
router.use("/api", apiRoutes);
router.use("/statsapi", statsApi);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.send("statsapi route page");
});

module.exports = router;
