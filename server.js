const express = require("express");
// const routes = require("./controllers"); - not being used right now. need to comment this back in later.
const app = express();
const PORT = process.env.PORT || 3001;
// var db = require("./models"); - not being used right now. need to comment this back in later.

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving up static assets on Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adding routes
// app.use(routes); - not being used right now. need to comment this back in later.

// Connecting to the DB and starting the server
// db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
// }); - DB is not being used right now. need to comment this back in later.
