const Sequelize = require('sequelize')
const db_ma = require('../config/database')

const { DataTypes } = Sequelize

const MaWeightModel = db_ma.define('weights', {
    
},{
    freezeTableName: true
})

module.exports = MaWeightModel