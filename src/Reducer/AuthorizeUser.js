import { SET_AUTH_USER } from '../actions/AuthorizeUser';

export default function authUser(state = null, action) {
  if (action.type === SET_AUTH_USER) {
    return action.id;
  }
  return state;
}
