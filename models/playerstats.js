// Creates a "Character" model that matches up with DB
module.exports = function(sequelize, DataTypes) {

  const Playerstat = sequelize.define(
    "playerstat",
    {
      PlayerID: {
        type: DataTypes.INTEGER
      },
      GameWeek: {
        type: DataTypes.INTEGER
      },
      LastName: {
        type: DataTypes.STRING(15)
      },
      FirstName: {
        type: DataTypes.STRING(20)
      },
      TeamName: {
        type: DataTypes.STRING(20)
      },
      Position: {
        type: DataTypes.STRING(3)
      },
      FantasyScore: {
        type: DataTypes.DECIMAL(3, 1)
      },
      PassAtt: {
        type: DataTypes.INTEGER
      },
      PassComp: {
        type: DataTypes.INTEGER
      },
      PassYard: {
        type: DataTypes.INTEGER
      },
      PassTd: {
        type: DataTypes.INTEGER
      },
      PassInt: {
        type: DataTypes.INTEGER
      },
      PassSack: {
        type: DataTypes.INTEGER
      },
      RushAtt: {
        type: DataTypes.INTEGER
      },
      RushYds: {
        type: DataTypes.INTEGER
      },
      RushTd: {
        type: DataTypes.INTEGER
      },
      RecFumb: {
        type: DataTypes.INTEGER
      },
      Sacks: {
        type: DataTypes.INTEGER
      },
      Safties: {
        type: DataTypes.INTEGER
      },
      int: {
        type: DataTypes.INTEGER
      },
      IntTd: {
        type: DataTypes.INTEGER
      },
      FumTd: {
        type: DataTypes.INTEGER
      },
      KrTd: {
        type: DataTypes.INTEGER
      },
      PrTd: {
        type: DataTypes.INTEGER
      },
      FgMade: {
        type: DataTypes.INTEGER
      },
      FgAtt: {
        type: DataTypes.INTEGER
      },
      Fg19: {
        type: DataTypes.INTEGER
      },
      Fg29: {
        type: DataTypes.INTEGER
      },
      Fg39: {
        type: DataTypes.INTEGER
      },
      Fg49: {
        type: DataTypes.INTEGER
      },
      Fg50Plus: {
        type: DataTypes.INTEGER
      },
      XpMade: {
        type: DataTypes.INTEGER
      }
    },
    {
      // disable the modification of tablenames; By default, DataTypes will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );

  return Playerstat;
}


