const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Connection = require('./config/database');

const app = express();
const PORT = 8080;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Database connection
Connection.authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
const routes = require('./src/routes/index');
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
