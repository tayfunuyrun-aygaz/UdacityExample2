import { addAnswerQuestion } from '../actions/questions';
import { saveAnswer } from '../utils/api';


export function receiveUsers(users) {
  return {
    type: rec_user,
    users
  };
}
export const rec_user = 'rec_user';
export const add_ad_user = 'add_ad_user';
export const add_que_user = 'add_que_user';
function addAnswerToUser(authUser, qid, answer) {
  return {
    type: add_ad_user,
    authUser,
    qid,
    answer
  };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerQuestion(authUser, qid, answer));

    return saveAnswer(authUser, qid, answer).catch(e => {
      console.warn('işlem hatası:', e);
    });
  };
}

export function addUserQuestion({ id, author }) {
  return {
    type: add_que_user,
    id,
    author
  };
}
