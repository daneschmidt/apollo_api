import { combineReducers } from 'redux';
import errors from './errors.reducer';
import loginMode from './loginMode.reducer';
import user from './user.reducer';
import missionReducer from './mission.reducer';
import specMissionReducer from '../reducers/specMission.reducer';

const rootReducer = combineReducers({
  errors, 
  loginMode, 
  user, 
  missionReducer,
  specMissionReducer
});

export default rootReducer;
