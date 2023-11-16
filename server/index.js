// const axios = require("axios");
// const jsonData = require("./api/db.json");
// const server = require("./src/server");
// const { conn, Driver } = require("./src/db.js");
// const PORT = 3001;

// conn
//   .sync({ force: true })
//   .then(() => {
//     Driver.bulkCreate(jsonData.drivers.map((driver) => driver.filter()));
//     server.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.error(error));

const axios = require("axios");
const jsonData = require("./api/db.json");
const server = require("./src/server");
const { conn, Driver } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    // Mapear jsonData.drivers y quitar el atributo 'teams'
    const driversWithoutTeams = jsonData.drivers.map((driver) => {
      const { teams, ...driverWithoutTeams } = driver;
      if (driverWithoutTeams.number == "\\N") {
        driverWithoutTeams.number = null;
      }
      if (driverWithoutTeams.code == "\\N") {
        driverWithoutTeams.code = null;
      }
      return driverWithoutTeams;
    });

    // Crear instancias de Driver en la base de datos
    return Driver.bulkCreate(driversWithoutTeams);
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
