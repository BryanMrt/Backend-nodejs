 const { Sequelize, DataTypes } = require('sequelize');
 
 const CategorieModel = require('../models/prodCategory');
 const ProductModel = require('../models/product');

 const sequelize = new Sequelize('smile', 'root', '', 
 {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })

  const Categorie = CategorieModel(sequelize, DataTypes);
  const Product = ProductModel(sequelize, DataTypes);

  sequelize
  .authenticate()
  .then(_ => console.log('conexion OK'))

  const initDb = () => {
    return sequelize.sync()
    .then(_ => console.log(" La BDD smile est OK"))
  }

  module.exports = { 
    initDb, Categorie, Product
  }