const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      id: {
        //type: DataTypes.UUID
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        // defaultValue: DataTypes.UUIDV4,
      },
      driverRef: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      //NOMBRE Y APELLIDO
      name: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      //IMAGEN
      image: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue:
          "https://w0.peakpx.com/wallpaper/356/649/HD-wallpaper-f1-logo-neon-car-championship-formula-formula-1-one-racing.jpg",
      },
      //FECHA DE NACIMIENTO
      dob: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //NACIONALIDAD
      nationality: {
        type: DataTypes.STRING,
      },
      //DESCRIPCION
      description: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
