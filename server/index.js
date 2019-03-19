const express = require('express');
const { mongoose } = require('./database');
const cors = require('cors');

const app = express();



//Settings
const port = process.env.PORT || 3000;
const bonusRoutes = require('./routes/bonus.routes');
const userRoutes = require('./routes/user.routes');

//Middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/spaceship', bonusRoutes);
app.use('/api/user', userRoutes);

//Starting the server
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})