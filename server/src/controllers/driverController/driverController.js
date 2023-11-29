const { Driver } = require("../../db");
const { drivers } = require("../../../api/db.json");

const getDrivers = async () => {
    return drivers.map(driver => ({
        ...driver,
        image: driver.image || "default-image-url", // Reemplaza con la URL real de tu imagen por defecto
      }));
};

const getDriversById = async (id) => {
    const driver = drivers.find(driver => driver.id === id);
    if (driver) {
      const driverWithDefaultImage = {
        ...driver,
        image: driver.image || "default-image-url",
      };
      return driverWithDefaultImage;
    } else {
      throw new Error("Conductor no encontrado");
    }
};

const getDriversName = async (name) => {
    const filteredDrivers = drivers.filter(driver =>
        `${driver.name.forename} ${driver.name.surname}`.toLowerCase().includes(name.toLowerCase())
      ).slice(0, 15);
    
      return filteredDrivers;
};

const postDrivers = async (driverData) => {
    const createdDriver = {
        id: drivers.length + 1,
        ...driverData,
      };
    
      drivers.push(createdDriver);
    
      return createdDriver;
};

module.exports = { getDrivers, getDriversById, getDriversName, postDrivers };
