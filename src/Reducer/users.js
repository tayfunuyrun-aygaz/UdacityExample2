import {
  rec_user,
  add_ad_user,
  add_que_user
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case rec_user:
      return {
        ...state,
        ...action.users
      };
    case add_ad_user:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    case add_que_user:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      };
    default:
      return state;
  }
}
