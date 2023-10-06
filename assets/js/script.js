let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

function buildQuiz() { };

function showResults() { };

buildQuiz();

submitButton.addEventListener('click', showResults);

let quizQuestions = [
    {
        question: "What is the name of Mario's brother?"

        answers {
        a: "Luigi",

        b: "Daisy",

        c: "Wario"
    },

    correctAnswer: "a"
    }

    {
        question: "What colour is Sonic the Hedgehog's trainers?"

        answers {
        a: "Green",

        b: "Orange",

        c: "Red";
    },

    correctAnswer: "c";
}

{
    question: "What is the name of the Kingdom where Princess Zelda and Link live?"

        answers {
        a: "Spira",

        b: "Hoenn",

        c: "Hyrule";
    },

    correctAnswer: "c";
}

{
    question: "In which Pokemon game is Pikachu the starter pokemon?"

        answers {
        a: "Silver",

            b: "Yellow",

                c: "Red";
    },

    correctAnswer: "b";
}
]