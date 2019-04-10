import { combineReducers } from 'redux';
import healthReducer from './health';
import userReducer from './user';
import layoutReducer from './layout';
import figthReducer from './figth';
import killReducer from './kill';
import cureReducer from './cure';
import keyboardReducer from './keyboard';
import recordsReducer from './records';

const rootReducer = combineReducers({
  health: healthReducer,
  user: userReducer,
  layout: layoutReducer,
  figth: figthReducer,
  kill: killReducer,
  cure: cureReducer,
  keyboard: keyboardReducer,
  records: recordsReducer,
});

export default rootReducer;
