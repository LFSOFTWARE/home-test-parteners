const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require('cors')
const Connection = require("./config/database");

app.use(cors())
app.use(morgan('dev'))

const routes = require('./src/routes/index');
const models = require('./src/models');

Connection.authenticate()
  .then(() => {
    console.log("Banco is UP!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api', routes);



const PORT = 8080

app.listen( PORT, () => {
  console.log(`Server is listening at ${PORT}`)
})