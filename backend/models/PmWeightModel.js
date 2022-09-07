const Sequelize = require('sequelize')
const db_pm = require('../config/database')

const { DataTypes } = Sequelize

const PmWeightModel = db_pm.define('weights', {
    
},{
    freezeTableName: true
})

module.exports = PmWeightModel