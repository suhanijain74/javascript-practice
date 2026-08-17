// ====================
// GET HTML ELEMENTS
// ====================

const startscreen = document.getElementById("startscreen");
const quizscreen = document.getElementById("quizscreen");
const resultscreen = document.getElementById("resultscreen");

const startbtn = document.getElementById("startbtn");
const restartbtn = document.getElementById("restartbtn");

const questext = document.getElementById("questext");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const score = document.getElementById("score");
const questionumber = document.getElementById("questionumber");

const progressbar = document.getElementById("progressbar");

const finalscore = document.getElementById("finalscore");

const optionButtons = document.querySelectorAll(".optionbtn");


// ====================
// QUESTIONS
// ====================

const questions = [

    {
        question: "What is the capital of India?",
        options: ["Jaipur", "Mumbai", "New Delhi", "Panaji"],
        answer: "New Delhi"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },

    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },

    {
        question: "Which organ pumps blood throughout the human body?",
        options: ["Brain", "Lungs", "Heart", "Liver"],
        answer: "Heart"
    },

    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Dollar"],
        answer: "Yen"
    }

];


// ====================
// VARIABLES
// ====================

let currentQuestion = 0;
let Score = 0;


// ====================
// LOAD QUESTION
// ====================

function loadQuestion() {

    let question = questions[currentQuestion];

    questext.textContent = question.question;

    option1.textContent = question.options[0];
    option2.textContent = question.options[1];
    option3.textContent = question.options[2];
    option4.textContent = question.options[3];

    // Question number
    questionumber.textContent = currentQuestion + 1;

    // Progress bar
    let progressPercent =
        ((currentQuestion + 1) / questions.length) * 100;

    progressbar.style.width = progressPercent + "%";

    // Reset buttons
    optionButtons.forEach(button => {
        button.style.backgroundColor = "";
        button.disabled = false;
    });
}


// ====================
// START QUIZ
// ====================

startbtn.onclick = function () {

    startscreen.classList.remove("active");
    quizscreen.classList.add("active");

    currentQuestion = 0;
    Score = 0;

    score.textContent = Score;

    loadQuestion();
};


// ====================
// ANSWER BUTTONS
// ====================

optionButtons.forEach(button => {

    button.addEventListener("click", function () {

        let selectedAnswer = button.textContent;
        let correctAnswer = questions[currentQuestion].answer;


        // Disable all buttons
        optionButtons.forEach(btn => {
            btn.disabled = true;
        });


        // Check answer
        if (selectedAnswer === correctAnswer) {

            button.style.backgroundColor = "green";

            Score++;

            score.textContent = Score;

        }
        else {

            button.style.backgroundColor = "red";

        }


        // Move to next question
        currentQuestion++;


        setTimeout(function () {

            if (currentQuestion < questions.length) {

                loadQuestion();

            }
            else {

                // Quiz finished

                quizscreen.classList.remove("active");

                resultscreen.classList.add("active");

                finalscore.textContent = Score;

            }

        }, 700);

    });

});


// ====================
// RESTART QUIZ
// ====================

restartbtn.onclick = function () {

    resultscreen.classList.remove("active");

    startscreen.classList.add("active");

    currentQuestion = 0;

    Score = 0;

    score.textContent = 0;

    questionumber.textContent = 1;

    progressbar.style.width = "0%";

};