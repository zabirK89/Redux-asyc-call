import { combineReducers } from 'redux';
import userReducer from './Reducer';
export const rootReducer = (history) =>
  combineReducers({
 user: userReducer,
  });
