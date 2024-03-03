const openQuizBtn = document.querySelector('.open-quiz');
const quizRules = document.querySelector('.quiz-rules');
const exitQuizBtn = document.querySelector('.exit-quiz');
const startScreen = document.querySelector('.start-screen');
const startQuizBtn = document.querySelector('.start-quiz');
const quizArea = document.querySelector('.quiz-area');
const timeCount = quizArea.querySelector('.time-seconds');

const answer_options = document.querySelector(".answer-options");

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
    queCounter(1);
    timerBegin(10);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeStart = 10;
let userScore = 0;

const next_ques = quizArea.querySelector(".next-ques");
const result_area = document.querySelector(".results");
const exit_quiz = result_area.querySelector(".exit-quiz");

/* Exit button at end of quiz will take user to the main page */
exit_quiz.onclick = () =>{
    window.location.reload();
}


/* When next question button clicked - will move to next question */
next_ques.onclick = ()=> {
    if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    timerBegin(10);
    next_ques.style.display = "none";
    
    }else{
        console.log("Questions Completed")
        showResultBox();
    }
}

/* Function to get questions from array */
function showQuestions(index){
    const que_text = document.querySelector(".questions");
    let que_tag = '<span>'+ questions[index].question;
    let answer_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    answer_options.innerHTML = answer_tag;
    const option = answer_options.querySelectorAll(".option");
    console.log(option);
    for (let i = 0; i < option.length; i++) {
       option[i].setAttribute("onclick", "optionSelected(this)");
       console.log(option[i]);
    }   
}

/* Function to identify if the user selects the correct or incorrect answer */
function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = answer_options.children.length;
    if(userAns ==correctAns){
        userScore += 1;
        console.log(userScore);
        console.log("Correct");
        answer.classList.add("correct");
    }else{
        console.log("Incorrect");
        answer.classList.add("incorrect");
    }

/* If user selects the incorrect answer, will automatically show them the correct answer */
    for (let i = 0; i < allOptions; i++) {
        if(answer_options.children[i].textContent == correctAns){
            answer_options.children[i].setAttribute("class", "option correct");
        }
    }
/* Will disable all options once a user has selcted their choice of answer */
    for (let i = 0; i < allOptions; i++){
        answer_options.children[i].classList.add("disabled");
        next_ques.style.display = "block";
    }
        
}

/* Once all questions are completed will show a result box with the users score */
function showResultBox(){
    quizArea.classList.remove('active');
    quizRules.classList.remove('active');
    result_area.classList.add('active');
    const score = result_area.querySelector('.results-text');

    let scoreTag = '<p>You scored</p>'+ userScore +'<p>Out of 15 Questions</p>';
    score.innerHTML = scoreTag;
}

/* Timer function that will also force the user to skip to the next question if the timer runs out*/
function timerBegin(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time --;
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "0"; 

            let correctAns = questions[que_count].answer;
            let allOptions = answer_options.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(answer_options.children[i].textContent == correctAns){
                    answer_options.children[i].setAttribute("class", "option correct");
                }
            }
            for (let i = 0; i < allOptions; i++){
                answer_options.children[i].classList.add("disabled");
                next_ques.style.display = "block";
            }
        }
    }
}

/* Function to change question counter in footer */
function queCounter(index){
const bottom_ques_counter = quizArea.querySelector(".current-ques");
let totalQuesCountTag = '<p class="current-ques">'+ index +'</p><p>Of 15 Questions</p>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}
