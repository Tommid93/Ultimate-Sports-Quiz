const openQuizBtn = document.querySelector('.open-quiz');
const quizRules = document.querySelector('.quiz-rules');
const exitQuizBtn = document.querySelector('.exit-quiz');
const startScreen = document.querySelector('.start-screen');
const startQuizBtn = document.querySelector('.start-quiz');
const quizArea = document.querySelector('.quiz-area');
const timeCount = quizArea.querySelector('.time-seconds');

const answerOptions = document.querySelector(".answer-options");

let questionCount = 0;
let questionNumb = 1;
let counter;
let userScore = 0;

const nextQuestion = quizArea.querySelector(".next-ques");
const resultArea = document.querySelector(".results");
const exitQuiz = resultArea.querySelector(".exit-quiz");

/* Exit button at end of quiz will take user to the main page */
exitQuiz.onclick = () => {
   window.location.reload();
}

/* When next question button clicked - will move to next question */
nextQuestion.onclick = () => {
   if (questionCount < questions.length - 1) {
      questionCount++;
      questionNumb++;
      showQuestions(questionCount);
      questionCounter(questionNumb);
      clearInterval(counter);
      timerBegin(10);
      nextQuestion.style.display = "none";

   } else {
      showResultBox();
   }
}

/* Function to get questions from array */
function showQuestions(index) {
   const questionText = document.querySelector(".questions");
   let questionTag = '<span>' + questions[index].question;
   let answerTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>' +
      '<div class="option">' + questions[index].options[1] + '<span></span></div>' +
      '<div class="option">' + questions[index].options[2] + '<span></span></div>' +
      '<div class="option">' + questions[index].options[3] + '<span></span></div>';
   questionText.innerHTML = questionTag;
   answerOptions.innerHTML = answerTag;
   const option = answerOptions.querySelectorAll(".option");
   for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)");
   }
}

/* Function to identify if the user selects the correct or incorrect answer */
function optionSelected(answer) {
   clearInterval(counter);
   let userAns = answer.textContent;
   let correctAns = questions[questionCount].answer;
   let allOptions = answerOptions.children.length;
   if (userAns == correctAns) {
      userScore += 1;
      answer.classList.add("correct");
   } else {
      answer.classList.add("incorrect");
   }

   /* If user selects the incorrect answer, will automatically show them the correct answer */
   for (let i = 0; i < allOptions; i++) {
      if (answerOptions.children[i].textContent == correctAns) {
         answerOptions.children[i].setAttribute("class", "option correct");
      }
   }
   /* Will disable all options once a user has selcted their choice of answer */
   for (let i = 0; i < allOptions; i++) {
      answerOptions.children[i].classList.add("disabled");
      nextQuestion.style.display = "block";
   }
}

/* Once all questions are completed will show a result box with the users score */
function showResultBox() {
   quizArea.classList.remove('active');
   quizRules.classList.remove('active');
   resultArea.classList.add('active');
   const score = resultArea.querySelector('.results-text');

   let scoreTag = '<p>You scored</p>' + userScore + '<p>Out of 15 Questions</p>';
   score.innerHTML = scoreTag;
}

/* Timer function that will also force the user to skip to the next question if the timer runs out*/
function timerBegin(time) {
   counter = setInterval(timer, 1000);

   function timer() {
      timeCount.textContent = time;
      time--;
      if (time < 0) {
         clearInterval(counter);
         timeCount.textContent = "0";

         let correctAns = questions[questionCount].answer;
         let allOptions = answerOptions.children.length;

         for (let i = 0; i < allOptions; i++) {
            if (answerOptions.children[i].textContent == correctAns) {
               answerOptions.children[i].setAttribute("class", "option correct");
            }
         }
         for (let i = 0; i < allOptions; i++) {
            answerOptions.children[i].classList.add("disabled");
            nextQuestion.style.display = "block";
         }
      }
   }
}

/* Function to change question counter in footer */
function questionCounter(index) {
   const bottomQuestionCounter = quizArea.querySelector(".current-ques");
   let totalQuestionCountTag = '<p class="current-ques">' + index + '</p><p>Of 15 Questions</p>';
   bottomQuestionCounter.innerHTML = totalQuestionCountTag;
}

/* Start Quiz button - once clicked will open the quiz rules */
openQuizBtn.onclick = () => {
   quizRules.classList.add('active');
   startScreen.classList.add('active');

}
/* When quiz rules is open - if click exit button will close quiz rules and return to start button */
exitQuizBtn.onclick = () => {
   quizRules.classList.remove('active');
   startScreen.classList.remove('active');
}

/* When quiz rules is open - if click start quiz button, will close quiz rules and open the quiz */
startQuizBtn.onclick = () => {
   quizArea.classList.add('active');
   quizRules.classList.remove('active');
   showQuestions(0);
   questionCounter(1);
   timerBegin(10);
}