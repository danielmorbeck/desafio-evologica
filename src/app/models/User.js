import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    User.associate = function(models) {
      User.hasMany(models.Sensor, { as: "sensor" });
    };
  }
}

export default User;
