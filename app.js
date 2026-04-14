require('dotenv').config();
const express = require('express');
const app = express();

const userRoutes = require('./src/modules/users/user.routes');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());

app.use((req, res, next) => {
	console.log('Incoming Request:', req.method, req.url);
	next();
});

app.use('/api/users', userRoutes);

app.get('/check', (req, res) => {
	res.send('OK');
});

// error handler (must be last)
app.use(errorMiddleware);

module.exports = app;
