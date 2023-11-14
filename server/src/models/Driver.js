const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.OBJECT(DataTypes.STRING),
        allowNull: false,
        requires: true,
      },
      image:{},
      dob:{},
      nationality:{},
      description:{},
    },
    { timestamps: false }
  );
};
