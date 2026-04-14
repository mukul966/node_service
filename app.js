require('dotenv').config();
const express = require('express');
const app = express();

const userRoutes = require('./src/modules/users/user.routes');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());

app.use('/api/users', userRoutes);

// error handler (must be last)
app.use(errorMiddleware);

module.exports = app;
