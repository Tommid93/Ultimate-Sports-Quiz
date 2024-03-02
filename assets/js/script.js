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
    showQuestions(0);
}

let que_count = 0;

const next_ques = quizArea.querySelector(".next-ques");

/* When next question button clicked - will move to next question */
next_ques.onclick = ()=> {
    que_count++;
    showQuestions(que_count);
}

/* Function to get questions from array */
function showQuestions(index){
    const que_text = document.querySelector(".questions");
    const answer_options = document.querySelector(".answer-options");
    let que_tag = '<span>'+ questions[index].question;
    let answer_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    answer_options.innerHTML = answer_tag;
}
