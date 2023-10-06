function buildQuiz() {
    let output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            let answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    let answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    quizQuestions.forEach( (currentQuestion, questionNumber) => {
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;

            answerContainers[questionNumber].style.color = 'green';
            }
                else{
                answerContainers[questionNumber].style.color = 'red';
                }
        }
    );

    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
 }


let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let quizQuestions = [
    {
        question: "What is the name of Mario's brother?",

        answers: {
            a: "Luigi",

            b: "Daisy",

            c: "Wario"
        },

        correctAnswer: "a",
    },

    {
        question: "What colour is Sonic the Hedgehog's trainers?",

        answers: {
            a: "Green",

            b: "Orange",

            c: "Red",
        },

        correctAnswer: "c",
    },

{
        question: "What is the name of the Kingdom where Princess Zelda and Link live?",

        answers: {
            a: "Spira",

            b: "Hoenn",

            c: "Hyrule",
        },

        correctAnswer: "c",
    },

{
        question: "In which Pokemon game is Pikachu the starter pokemon?",

        answers: {
            a: "Silver",

            b: "Yellow",

            c: "Red",
        },

        correctAnswer: "b",
    },
];

buildQuiz();

submitButton.addEventListener('click', showResults);


