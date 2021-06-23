
export function questionAnswer ( index , answer ) {
    return { type : "QUESTION_ANSWER" , payload : { index , answer } };
}
export function changeQuiz (index, next) {
    return { type : "CHANGE_QUIZ" , payload : {index, next} };
}
export function submit ( quizzes) {
    return { type : "SUBMIT" , payload : {quizzes} };
}
export function initQuizzes ( quizzes ) {
    return { type : "INIT_QUIZZES" , payload : {quizzes} };
}
export function resetQuizzes (quizzes) {
    return { type : "RESET" , payload : {quizzes} };
}
export function timer () {
    return { type : "TIMER" , payload : {} };
}