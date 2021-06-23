import { combineReducers } from "redux";

function score(state = 0, action = {}) {
  switch (action.type) {
    case "SUBMIT":
      state=0;
      action.payload.quizzes.map((quiz) => {
        if(quiz.answer === quiz.userAnswer) state++
      })
      return state
    case "RESET":
    case "INIT_QUIZZES":
      return 0;
    case "QUESTION_ANSWER":
    case "CHANGE_QUIZ":
    case "TIMER":
    default:
      return state;
  }
}
function finished(state = false, action = {}) {
  switch (action.type) {
    case "SUBMIT":
      return true;
    case "RESET":
    case "INIT_QUIZZES":
      return false;
    case "QUESTION_ANSWER" :
    case "CHANGE_QUIZ":
    case "TIMER":
    default:
      return state;
  }
}
function currentQuiz(state = 0, action = {}) {
  switch (action.type) {
    case "CHANGE_QUIZ":
      return action.payload.index;
    case "RESET":
    case "INIT_QUIZZES":
      return 0;
    case "QUESTION_ANSWER":
    case "SUBMIT":
    case "TIMER":
    default:
      return state;
  }
}
function quizzes(state = [], action = {}) {
  switch (action.type) {
    case "QUESTION_ANSWER" :
      return state.map((quiz,i) => {
        return {...quiz,
          userAnswer : action.payload.index === i ? action.payload.answer : quiz.userAnswer}
      })
    case "INIT_QUIZZES":
    case "RESET":
      return action.payload.quizzes;
    case "CHANGE_QUIZ":
    case "SUBMIT":
    case "TIMER":
    default:
      return state;
  }
}

function time(state = 0, action = {}) {
  switch (action.type) {
    case "RESET":
    case "INIT_QUIZZES":
      return 300;
    case "TIMER":
      return Math.max(0,state-1);

    case "SUBMIT":
    case "QUESTION_ANSWER":
    case "CHANGE_QUIZ":
    default:
      return state;
  }
}

const GlobalState = combineReducers({
  score,
  finished,
  currentQuiz,
  quizzes,
  time
});

export default GlobalState;
