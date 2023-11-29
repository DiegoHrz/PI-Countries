const { getTeams } = require("../../controllers/teamController/teamController");
const { Team } = require("../../models/Team");
const jsonTeams = require("../../../api/db.json");

const teamsHandler = {};

teamsHandler.getTeamsHandler = async (req, res) => {
  try {
    // Intenta obtener todos los equipos de la base de datos
    const teamsFromDB = await Team.findAll();

    // Si la base de datos está vacía, obtén los equipos del archivo JSON y guárdalos en la base de datos
    if (teamsFromDB.length === 0) {
      const drivers = jsonTeams.drivers || [];

      // Extrae los equipos únicos de los conductores
      const uniqueTeams = Array.from(
        new Set(drivers.flatMap((driver) => driver.teams))
      );

      // Crea objetos de equipo y guárdalos en la base de datos
      const teamsToSave = uniqueTeams.map((team, index) => ({
        id: index + 1,
        name: team,
        // Otros campos que puedas tener en tus equipos
      }));
      await Team.bulkCreate(teamsToSave);

      // Devuelve los equipos obtenidos del archivo JSON
      return res.status(200).json(teamsToSave);
    }

    // Si la base de datos no está vacía, devuelve los equipos almacenados en ella
    return res.status(200).json(teamsFromDB);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = teamsHandler;
