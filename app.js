// Supplied three-question practice array.
const questions = [
  { text: 'Which tag is a heading?', choices: ['h1', 'p', 'div'], answer: 0 },
  { text: 'Which language styles a page?', choices: ['CSS', 'SQL', 'C++'], answer: 0 },
  { text: 'How many days in a week?', choices: ['5', '7', '9'], answer: 1 }
];

let index = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next');
const progressLabel = document.getElementById('progress-label');
const progressCount = document.getElementById('progress-count');
const progressFill = document.getElementById('progress-fill');
const resultEl = document.getElementById('result');

function renderQuestion() {
  const current = questions[index];
  answered = false;
  questionEl.textContent = current.text;
  answersEl.replaceChildren();
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  nextButton.disabled = true;
  nextButton.textContent = index === questions.length - 1 ? 'See my score' : 'Next question';
  progressLabel.textContent = `Question ${index + 1} of ${questions.length}`;
  progressCount.textContent = `${index + 1} / ${questions.length}`;
  progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;

  current.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-button';
    button.textContent = choice;
    button.addEventListener('click', () => selectAnswer(choiceIndex));
    answersEl.append(button);
  });
}

function selectAnswer(choiceIndex) {
  // Ignore repeat clicks so a question can only be counted once.
  if (answered) return;
  answered = true;
  const correctIndex = questions[index].answer;
  const buttons = answersEl.querySelectorAll('button');
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === correctIndex) button.classList.add('correct');
    if (i === choiceIndex && choiceIndex !== correctIndex) button.classList.add('incorrect');
  });

  if (choiceIndex === correctIndex) {
    score += 1;
    feedbackEl.textContent = 'Correct! Great job.';
    feedbackEl.classList.add('good');
  } else {
    feedbackEl.textContent = `Incorrect. Correct answer: ${questions[index].choices[correctIndex]}.`;
    feedbackEl.classList.add('bad');
  }
  nextButton.disabled = false;
}

function showResult() {
  questionEl.hidden = true;
  answersEl.hidden = true;
  feedbackEl.hidden = true;
  nextButton.hidden = true;
  document.querySelector('.progress-row').hidden = true;
  document.querySelector('.progress-track').hidden = true;
  resultEl.hidden = false;
  document.getElementById('final-score').textContent = `Your score: ${score} / ${questions.length}`;
  document.getElementById('result-message').textContent = score === questions.length
    ? 'Perfect score! You got every question right.'
    : 'Nice effort! Review the answers and give it another try.';
}

nextButton.addEventListener('click', () => {
  if (!answered) return;
  if (index < questions.length - 1) {
    index += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

document.getElementById('restart').addEventListener('click', () => {
  index = 0;
  score = 0;
  questionEl.hidden = false;
  answersEl.hidden = false;
  feedbackEl.hidden = false;
  nextButton.hidden = false;
  document.querySelector('.progress-row').hidden = false;
  document.querySelector('.progress-track').hidden = false;
  resultEl.hidden = true;
  renderQuestion();
});

renderQuestion();
