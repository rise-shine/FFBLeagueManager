// Creates a "Character" model that matches up with DB
module.exports = function (sequelize, DataTypes) {

  const Teamroster = sequelize.define(
    "teamroster",
    {
      FfbName: {
        type: DataTypes.STRING(20)
      },
      PlayerID: {
        type: DataTypes.INTEGER
      },
      LastName: {
        type: DataTypes.STRING(15)
      },
      FirstName: {
        type: DataTypes.STRING(20)
      },
      position: {
        type: DataTypes.STRING(3)
      }
    },
    {
      // disable the modification of tablenames; By default, DataTypes will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );

  return Teamroster
}

