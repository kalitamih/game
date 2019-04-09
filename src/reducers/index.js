import { combineReducers } from 'redux';
import healthReducer from './health';
import userReducer from './user';
import layoutReducer from './layout';
import figthReducer from './figth';
import killReducer from './kill';
import cureReducer from './cure';
import keyboardReducer from './keyboard';

const rootReducer = combineReducers({
  health: healthReducer,
  user: userReducer,
  layout: layoutReducer,
  figth: figthReducer,
  kill: killReducer,
  cure: cureReducer,
  keyboard: keyboardReducer,
});

export default rootReducer;
