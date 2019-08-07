// Creates a "Character" model that matches up with DB
module.exports = function(sequelize, DataTypes) {

  const Ffbschedule = sequelize.define(
    "ffbschedule",
    {
      GameWeek: {
        type: DataTypes.INTEGER
      },
      FfbName: {
        type: DataTypes.STRING(20)
      },
      Opponent: {
        type: DataTypes.STRING(20)
      },
      Home: {
        type: DataTypes.BOOLEAN
      },
      Win: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  )

  return Ffbschedule 
};
