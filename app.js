const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');

const app = express()
const port = 3000

app
  .use(morgan('dev'))
  .use(bodyParser.json())

const indexRouter = require("./src/routes/index");
app.use("/", indexRouter); 

sequelize.initDb();

// Gestion des routes 404.
app.use(({res}) => {
  const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
	res.status(404).json({message});
});

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));