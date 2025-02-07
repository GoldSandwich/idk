document.getElementById('start-game-btn').addEventListener('click', startGame);
document.getElementById('join-game-btn').addEventListener('click', joinGame);

const gameArea = document.getElementById('game-area');
const nextQuestionBtn = document.getElementById('next-question-btn');
const quizArea = document.getElementById('quiz-area');
let currentQuestionIndex = 0;

const quizQuestions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
];

function startGame() {
    document.querySelector('.game-lobby').style.display = 'none';
    gameArea.style.display = 'block';
    loadQuestion();
}

function joinGame() {
    // Logic for joining an existing game would go here.
    alert("Joining an existing game...");
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    quizArea.innerHTML = `
        <p>${question.question}</p>
        <div>
            ${question.options.map(option => `<button class="option-btn">${option}</button>`).join('')}
        </div>
    `;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', checkAnswer);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong answer!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        alert('Game Over!');
    }
}

nextQuestionBtn.addEventListener('click', loadQuestion);
