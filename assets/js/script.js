const openQuizBtn = document.querySelector('.open-quiz');
const quizRules = document.querySelector('.quiz-rules');
const exitQuizBtn = document.querySelector('.exit-quiz');
const startScreen = document.querySelector('.start-screen');
const startQuizBtn = document.querySelector('.start-quiz');
const quizArea = document.querySelector('.quiz-area');

/* Start Quiz button - once clicked will open the quiz rules */
openQuizBtn.onclick = ()=> {
    quizRules.classList.add('active');
    startScreen.classList.add('active');

}

/* When quiz rules is open - if click exit button will close quiz rules and return to start button */
exitQuizBtn.onclick = ()=> {
    quizRules.classList.remove('active');
    startScreen.classList.remove('active');
}

/* When quiz rules is open - if click start quiz button, will close quiz rules and open the quiz */
startQuizBtn.onclick = ()=> {
    quizArea.classList.add('active');
    quizRules.classList.remove('active');
}
