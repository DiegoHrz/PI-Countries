const axios = require("axios");
const api = require("./api/db.json");
const server = require("./src/server");
const { conn, Driver } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    // Mapear los conductores (drivers) de la api y quitar el atributo 'teams'
    // const driversWithoutTeams = api.drivers.map((driver) => {
    //   // Utilizar la desestructuración para extraer 'teams' y el resto en 'driverWithoutTeams' ... (spread operator lo q hace que se guarde el restante)
    //   const { teams, ...driverWithoutTeams } = driver;

    //   // Verificar si 'number' es "\\N" y, en ese caso, establecerlo como null
    //   if (driverWithoutTeams.number == "\\N") {
    //     driverWithoutTeams.number = null;
    //   }

    //   // Verificar si 'code' es "\\N" y, en ese caso, establecerlo como null
    //   if (driverWithoutTeams.code == "\\N") {
    //     driverWithoutTeams.code = null;
    //   }

    //   if (driverWithoutTeams.id != null) {
    //     driverWithoutTeams.id -= 1;
    //   }
    //   // Devolver el objeto resultante sin el atributo 'teams'
    //   return driverWithoutTeams;
    // });

    // // Crear instancias de Driver en la base de datos utilizando los datos modificados
    // return Driver.bulkCreate(driversWithoutTeams);
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
