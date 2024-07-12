const quizData = [
  {
    question: "O que é um marco de projeto?",
    options: [
      "Um evento importante no cronograma",
      "Um documento formal de requisitos",
      "Um teste de validação de software",
      "Uma técnica de estimativa de custos",
    ],
    answer: "Um evento importante no cronograma",
  },
  {
    question: "O que é o diagrama de Gantt?",
    options: [
      "Um método para diagramar redes de atividades",
      "Uma técnica para priorização de requisitos",
      "Uma representação gráfica de tempo e atividades",
      "Uma ferramenta de gerenciamento de riscos",
    ],
    answer: "Uma representação gráfica de tempo e atividades",
  },
  // Adicione mais perguntas conforme necessário
];

const startButton = document.getElementById("start-button");
const questionSection = document.getElementById("question-section");
const questionElement = document.getElementById("question");
const option1Label = document.getElementById("option1-label");
const option2Label = document.getElementById("option2-label");
const option3Label = document.getElementById("option3-label");
const option4Label = document.getElementById("option4-label");
const quizForm = document.getElementById("quiz-form");
const feedbackElement = document.getElementById("feedback");
const resultSection = document.getElementById("result-section");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  startButton.addEventListener("click", () => {
    startButton.parentElement.classList.add("hidden");
    questionSection.classList.remove("hidden");
    showQuestion();
  });
}

function showQuestion() {
  const questionData = quizData[currentQuestionIndex];
  questionElement.textContent = questionData.question;
  option1Label.textContent = questionData.options[0];
  option2Label.textContent = questionData.options[1];
  option3Label.textContent = questionData.options[2];
  option4Label.textContent = questionData.options[3];
}

function checkAnswer() {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );
    if (!selectedOption) {
      feedbackElement.textContent = "Por favor, selecione uma opção.";
      return;
    }

    const answer = selectedOption.value;
    const questionData = quizData[currentQuestionIndex];
    if (answer === questionData.answer) {
      score++;
      feedbackElement.textContent = "Resposta correta!";
    } else {
      feedbackElement.textContent = `Resposta incorreta. A resposta correta é: ${questionData.answer}`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
}

function showResult() {
  questionSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  scoreElement.textContent = score;
}

function restartGame() {
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    showQuestion();
  });
}

startGame();
checkAnswer();
restartGame();
