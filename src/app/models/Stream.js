import Sequelize, { Model } from "sequelize";

import bcrypt from "bcryptjs";

class Stream extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
        enabled: Sequelize.BOOLEAN,
        key: Sequelize.STRING,
        sensorId: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async stream => {
      if (stream.key) {
        stream.key = await bcrypt.hash(stream.key, 6);
      }
    });

    Stream.associate = function(models) {
      Stream.belongsTo(models.Sensor, { foreignKey: "sensorId", as: "sensor" });
      Stream.hasOne(models.Unit);
    };
  }
}

export default Stream;
