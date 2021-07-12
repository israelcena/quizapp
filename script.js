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

/* Options El */
const questionEl = document.getElementById('question');
const commentEl = document.getElementById('comment');
const aOptionEl = document.getElementById('a-option'); 
const bOptionEl = document.getElementById('b-option'); 
const cOptionEl = document.getElementById('c-option'); 
const dOptionEl = document.getElementById('d-option'); 

let currentQuestion = 0; 

loadQuiz();

function loadQuiz() {
  currentQuestion ++
}