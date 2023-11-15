const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Team",{
        id:{},
        nombre:{}
    },{ timestamps: false })
}