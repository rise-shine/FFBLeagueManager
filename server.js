const express = require("express");
const routes = require("./controllers");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving up static assets on Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adding routes
app.use(routes);

// Connecting to the DB and starting the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
