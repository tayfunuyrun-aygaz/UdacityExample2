import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function save(question) {
  return _saveQuestion(question);
}

export function saveAnswer(authUser, qid, answer) {

  return _saveQuestionAnswer({ authUser, qid, answer });
}
