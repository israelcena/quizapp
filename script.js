const quizData = [
  {
    question: 'Quem descobriu o Brasil ?',
    a: 'Cristóvão Colombo',
    b: 'Dom Pedro I',
    c: 'Dom João IV',
    d: 'Pedro Álvares Cabral',
    correct: 'd'
  },
  {
    question: 'Quem Libertou os Escravos ?',
    a: 'Getúlio Vargas',
    b: 'Jair M. Bolsonaro',
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
  {
    question: 'Em que ano foi assinada a Lei Áurea ?',
    a: '1822',
    b: '1888',
    c: '1808',
    d: '1912',
    correct: 'b'
  },
  {
    question: 'Quem foi o primeiro Rei Brasil ?',
    a: 'Dom Pedro I',
    b: 'Pedro Álvares Cabral',
    c: 'Dom João IV',
    d: 'Dom João III',
    correct: 'a'
  },
  {
    question: 'Em que ano o Brasil foi pentacampeão mundial de futebol?',
    a: '1994',
    b: '1998',
    c: '2002',
    d: '2012',
    correct: 'c'
  },
  {
    question: 'Quem foi o primeiro presidente do Brasil eleito pelo voto popular ?',
    a: 'Floriano Peixoto',
    b: 'Prudente de Morais',
    c: 'Marechal Deodoro da Fonseca',
    d: 'Getúlio Vargas',
    correct: 'b'
  },
  {
    question: 'Em que ano o Brasil foi descoberto ?',
    a: '1822',
    b: '1515',
    c: '1495',
    d: '1500',
    correct: 'd'
  },
  {
    question: 'Qual Presidente Criou a Petrobrás ?',
    a: 'Eurico Gaspar Dutra',
    b: 'Prudente de Morais',
    c: 'Juscelino Kubitschek de Oliveira',
    d: 'Getúlio Vargas',
    correct: 'd'
  },
  {
    question: 'Em que ano o Brasil se tornou uma República ?',
    a: '1889',
    b: '1898',
    c: '1822',
    d: '1888',
    correct: 'a'
  },
];
let currentQuiz = undefined;
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
  questionEl.innerHTML = 'Bem Vindo Ao Quiz App!';
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
  submitBtnEl.innerHTML = 'Próxima Pergunta';
}

function getSelect() {
  radiusEl.forEach((item) => {
    if(item.checked) {
      answer = item.id;
    }
  })
  return answer
};

submitBtnEl.addEventListener('click', () => {
  radiusEl.forEach(radius => {
    radius.style.display = 'inline'
  })
  currentQuiz === undefined ? currentQuiz = 0 : currentQuiz++;
  currentQuiz < quizData.length ? loadQuiz() : endQuiz()
})

