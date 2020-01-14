
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const missionRouter = require('../server/routes/mission.router');
const launchRouter = require('../server/routes/launch.router');
const crewRouter = require('../server/routes/crew.router');
const orbitRouter = require('../server/routes/orbit.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/mission', missionRouter);
app.use('/api/launch_info', launchRouter);
app.use('/api/crew_info', crewRouter);
app.use('/api/orbit_info', orbitRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
