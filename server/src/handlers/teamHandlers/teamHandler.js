const {getTeams} = require('../../controllers/teamController/teamController')

const teamsHandler = {};

teamsHandler.getTeamsHandler = async (req, res) => {
  try {
    const response = await getTeams()
    res.status(200).send("Todo bueno");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = teamsHandler;
