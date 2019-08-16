module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
          type: DataTypes.STRING,
          allowNull: false
      }, 
      email: {
          type: DataTypes.STRING,
          allowNull: false
      }, 
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      picture: {
          //Change datatype after researching how to store images in MYSQL
          type: DataTypes.STRING,
          allowNull: true
      }
    });
  
    return User;
  };