const openQuizBtn = document.querySelector('.open-quiz');
const quizRules = document.querySelector('.quiz-rules');
const exitQuizBtn = document.querySelector('.exit-quiz');
const startScreen = document.querySelector('.start-screen');
const startQuizBtn = document.querySelector('.start-quiz');
const quizArea = document.querySelector('.quiz-area');

openQuizBtn.onclick = ()=> {
    quizRules.classList.add('active');
    startScreen.classList.add('active');

}

exitQuizBtn.onclick = ()=> {
    quizRules.classList.remove('active');
    startScreen.classList.remove('active');
}

startQuizBtn.onclick = ()=> {
    quizArea.classList.add('active');
    quizRules.classList.remove('active');
}
