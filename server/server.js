
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
const lunarRouter = require('../server/routes/lunar.router');
const landingRouter = require('../server/routes/landing.router');
const crewPicRouter = require('../server/routes/crewPic.router');
const missionPatchRouter = require('../server/routes/missionPatch.router');
const highlightsRouter = require('../server/routes/highlights.router');
const specMissionRouter = require('../server/routes/specMission.router');
const specCrewRouter = require('../server/routes/specCrew.router');
const specHighlightsRouter = require('../server/routes/spechHighlights.router');
const specLandingRouter = require('../server/routes/specLanding.router');
const specOrbitRouter = require('../server/routes/specOrbit.router');
const specLunarRouter = require('../server/routes/specLunar.router');


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
app.use('/api/landing_info', landingRouter);
app.use('/api/crew_info', crewRouter);
app.use('/api/orbit_info', orbitRouter);
app.use('/api/lunar_info', lunarRouter);
app.use('/api/crew_pic', crewPicRouter);
app.use('/api/mission_patch', missionPatchRouter);
app.use('/api/mission_highlights', highlightsRouter);
app.use('/api/data/', specMissionRouter);
app.use('/api/crew/', specCrewRouter);
app.use('/api/mission_highlights/', specHighlightsRouter);
app.use('/api/landing_info/', specLandingRouter);
app.use('/api/orbit_info/', specOrbitRouter);
app.use('/api/lunar_info/', specLunarRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
