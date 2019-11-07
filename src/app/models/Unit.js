import Sequelize, { Model } from "sequelize";

class Unit extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default Unit;
