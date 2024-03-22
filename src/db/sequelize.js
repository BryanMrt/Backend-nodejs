 const { Sequelize, Database } = require('sequelize');

 const sequelize = new Sequelize('smile', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })

  const initDb = () => {
    return sequelize.sync().then(_ => console.log(" La BDD smile est OK"))
  }

  module.exports = { 
    initDb
  }