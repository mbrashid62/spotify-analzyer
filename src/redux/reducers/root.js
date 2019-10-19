import { combineReducers } from 'redux';
import { auth } from './auth';
import { spotify } from './spotify';

export default combineReducers({
  spotify,
  auth,
});
