import { combineReducers } from 'redux';
import authUser from './AuthorizeUser';
import questions from './questions';
import users from './users';

export default combineReducers({
  authUser,
  questions,
  users
});
