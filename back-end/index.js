const express = require('express');
const app = express();


const routes = require('./src/routes/index');

app.use('/api', routes);



const PORT = 8080

app.listen( PORT, () => {
  console.log(`Server is listening at ${PORT}`)
})