const quizData = [
  {
    question: 'Quem descobriu o Brasil ?',
    a: 'Cristovão Colombo',
    b: 'Dom Pedro I',
    c: 'Dom João IV',
    d: 'Pedro Alves Cabral',
    correct: 'd'
  },
  {
    question: 'Quem Libertou os Escravos ?',
    a: 'Getulho Vargas',
    b: 'Bolsonaro',
    c: 'Princesa Isabel',
    d: 'Joaquim José da Silva Xavier',
    correct: 'c'
  },
  {
    question: 'Em que Continente Fica Portugal ?',
    a: 'Europa',
    b: 'America',
    c: 'África',
    d: 'Japão',
    correct: 'a'
  },
  {
    question: 'Em que ano o Brasil teve sua Independência ?',
    a: '1808',
    b: '1888',
    c: '1822',
    d: '1500',
    correct: 'c'
  },

];
let currentQuiz = 0;
/* Options El */
const questionEl = document.getElementById('question');
const commentEl = document.getElementById('comment');
commentEl.style.display = 'none'
const aOptionEl = document.getElementById('a-option');
const bOptionEl = document.getElementById('b-option');
const cOptionEl = document.getElementById('c-option');
const dOptionEl = document.getElementById('d-option');
const submitBtnEl = document.getElementById('button');
const radiusEl = document.querySelectorAll('input')

function initialQuiz() {
  questionEl.innerHTML = 'Bem Vindo Ao Gerador de Quiz !';
  aOptionEl.innerHTML = '';
  bOptionEl.innerHTML = 'Clique em iniciar para começar';
  cOptionEl.innerHTML = '';
  dOptionEl.innerHTML = '';
  submitBtnEl.innerHTML = 'Iniciar';
  radiusEl.forEach(radius => {
    radius.style.display = 'none'
  })
};
initialQuiz();

function endQuiz() {
  questionEl.innerHTML = 'Você Terminou';
  aOptionEl.innerHTML = '';
  bOptionEl.innerHTML = 'Em breve entraremos em contato para';
  cOptionEl.innerHTML = 'disponibilizar seu resultado';
  dOptionEl.innerHTML = '';
  submitBtnEl.style.display = 'none';
  radiusEl.forEach(radius => {
    radius.style.display = 'none'
  })
};

function loadQuiz() {
  
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  aOptionEl.innerHTML = currentQuizData.a;
  bOptionEl.innerHTML = currentQuizData.b;
  cOptionEl.innerHTML = currentQuizData.c;
  dOptionEl.innerHTML = currentQuizData.d;
  submitBtnEl.innerHTML = 'Proxima Pergunta';
}

submitBtnEl.addEventListener('click', () => {
  radiusEl.forEach(radius => {
    radius.style.display = 'inline'
  })
  currentQuiz++;
  currentQuiz < quizData.length ? loadQuiz() : endQuiz()
})

