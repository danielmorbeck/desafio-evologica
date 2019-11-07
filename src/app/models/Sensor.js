import Sequelize, { Model } from "sequelize";

import bcrypt from "bcryptjs";

class Sensor extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
        description: Sequelize.STRING,
        key: Sequelize.STRING,
        userId: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async sensor => {
      if (sensor.key) {
        sensor.key = await bcrypt.hash(sensor.key, 6);
      }
    });

    Sensor.associate = function(models) {
      Sensor.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    };

    Sensor.associate = function(models) {
      Sensor.hasMany(models.Stream, { as: "stream" });
    };
  }
}

export default Sensor;
