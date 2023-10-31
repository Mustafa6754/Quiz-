const questions = [
  {
      question: "Question 1: What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
  },
  {
      question: "Question 2: What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris"
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuizData = questions[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  
  optionsContainer.innerHTML = "";
  currentQuizData.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option");
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = questions[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
      score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      endQuiz();
  }
}

function endQuiz() {
  alert(`You scored ${score} out of ${questions.length} questions.`);
  // You can add more actions here, like displaying a "Play Again" button.
}

loadQuestion();

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      endQuiz();
  }
});
