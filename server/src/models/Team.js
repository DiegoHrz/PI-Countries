const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Team",
    {
      id: {
        //UNIQUE UNIFIED IDENTIFIER
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        //UNIQUE UNIFIED IDENTIFIER VERSION 4 VALUE
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 16],
            msg: "El nombre de estar entre 3 y 15 caracteres",
          },
        },
      },
    },
    {
      timestamps: false,
      frezeTableName: true,
    }
  );
};
