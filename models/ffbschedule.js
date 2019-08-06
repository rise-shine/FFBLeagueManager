// Creates a "Character" model that matches up with DB
const Ffbschedule = sequelize.define(
  "ffbschedule",
  {
    GameWeek: Sequelize.INTEGER,
    FfbName: Sequelize.STRING(20),
    Opponent: Sequelize.STRING(20),
    Home: Sequelize.BOOLEAN,
    Win: Sequelize.BOOLEAN
  },
  {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  }
);

// Syncs with DB
Ffbschedule.sync();

module.exports = Ffbschedule;
