const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const Teamroster = sequelize.define(
  "teamroster",
  {
    FfbName: Sequelize.STRING(20),
    PlayerID: Sequelize.INTEGER,
    LastName: Sequelize.STRING(15),
    FirstName: Sequelize.STRING(20),
    position: Sequelize.STRING(3)
  },
  {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  }
);

// Syncs with DB
Teamroster.sync();

module.exports = Teamroster;
