import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducers';

export default combineReducers({
  crypto: cryptoReducer
});
