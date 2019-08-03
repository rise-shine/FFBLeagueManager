const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const Playerstat = sequelize.define(
  "playerstat",
  {
    PlayerID: Sequelize.INTEGER,
    GameWeek: Sequelize.INTEGER,
    LastName: Sequelize.STRING(15),
    FirstName: Sequelize.STRING(20),
    TeamName: Sequelize.STRING(20),
    Position: Sequelize.STRING(3),
    FantasyScore: Sequelize.DECIMAL(3, 1),
    PassAtt: Sequelize.INTEGER,
    PassComp: Sequelize.INTEGER,
    PassYard: Sequelize.INTEGER,
    PassTd: Sequelize.INTEGER,
    PassInt: Sequelize.INTEGER,
    PassSack: Sequelize.INTEGER,
    RushAtt: Sequelize.INTEGER,
    RushYds: Sequelize.INTEGER,
    RushTd: Sequelize.INTEGER,
    RecFumb: Sequelize.INTEGER,
    Sacks: Sequelize.INTEGER,
    Safties: Sequelize.INTEGER,
    int: Sequelize.INTEGER,
    IntTd: Sequelize.INTEGER,
    FumTd: Sequelize.INTEGER,
    KrTd: Sequelize.INTEGER,
    PrTd: Sequelize.INTEGER,
    FgMade: Sequelize.INTEGER,
    FgAtt: Sequelize.INTEGER,
    Fg19: Sequelize.INTEGER,
    Fg29: Sequelize.INTEGER,
    Fg39: Sequelize.INTEGER,
    Fg49: Sequelize.INTEGER,
    Fg50Plus: Sequelize.INTEGER,
    XpMade: Sequelize.INTEGER
  },
  {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  }
);

// Syncs with DB
Playerdata.sync();

module.exports = Playerstat;
