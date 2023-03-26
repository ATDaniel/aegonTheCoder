import { combineReducers } from 'redux';
import { gear } from './gear';
import { auth } from './auth';

export default combineReducers({ gear, auth });