
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let isAnswerChecked = false;

// DOM elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const checkButton = document.getElementById('check-btn');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('progress');
const scoreElement = document.getElementById('score');
const resultElement = document.getElementById('result');

function initQuiz() {
    questions = [...allQuestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);
    
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    scoreElement.textContent = `Score: ${score}`;
    
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    
    optionsElement.innerHTML = '';
    Object.entries(question.answers).forEach(([key, value]) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = value;
        button.dataset.key = key;
        button.addEventListener('click', () => selectAnswer(key, button));
        optionsElement.appendChild(button);
    });

    selectedAnswer = null;
    isAnswerChecked = false;
    checkButton.style.display = 'block';
    nextButton.style.display = 'none';
    checkButton.disabled = true;
}

function selectAnswer(answer, buttonElement) {
    if (isAnswerChecked) return;

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    selectedAnswer = answer;
    buttonElement.classList.add('selected');
    checkButton.disabled = false;
}

function checkAnswer() {
    if (!selectedAnswer || isAnswerChecked) return;

    isAnswerChecked = true;
    const question = questions[currentQuestionIndex];

    document.querySelectorAll('.option-btn').forEach(button => {
        const isCorrect = button.dataset.key === question.correctAnswer;
        if (isCorrect) {
            button.classList.add('correct');
        } else if (button.dataset.key === selectedAnswer) {
            button.classList.add('wrong');
        }
    });

    if (selectedAnswer === question.correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    checkButton.style.display = 'none';
    nextButton.style.display = 'block';
}

function nextQuestion() {
    if (currentQuestionIndex === questions.length - 1) {
        showResult();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
}

function showResult() {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    questionElement.innerHTML = '';
    optionsElement.innerHTML = '';
    checkButton.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${score} out of ${questions.length} (${percentage}%)</p>
    `;
}

checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);

// Start the quiz when the page loads
initQuiz();