"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("sensors", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      label: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sensorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sensors",
          key: "id"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("sensors");
  }
};
