const user = 'jhersy'
const password = 'postgres'
const host = 'localhost'
const database = 'nextbnb'

const Sequelize = require('sequelize')

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'postgres',
  logging: false
})

module.exports = sequelize
