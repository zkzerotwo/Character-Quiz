/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Shoots lightning and stays with his trainer?',
      answers: [
        'Chocobo',
        'Minotaur',
        'Pikachu',
        'Ravio'
      ],
      correctAnswer: 'Pikachu'
    },
    {
      question: 'Who is always trying to strike it big?',
      answers: [
        'Gene Starwind',
        'Wario',
        'Spike Spiegel',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    }
    {
      question: 'Who needs to find the treasure at the Grand Line?',
      answers: [
        'The Straw Hat Crew',
        'The Akatsuki',
        'The Soul Society',
        'Organization XIII'
      ],
      correctAnswer: 'The Straw Hat Crew'
    },
    {
      question: 'Who is the legendary hero clad in green?',
      answers: [
        'Luigi',
        'Link',
        'Lance',
        'Lorelei'
      ],
      correctAnswer: 'Link'
    },
    {
      question: 'Who bends all the elements to their will?',
      answers: [
        'The Sannin',
        'The Z Fighters',
        'The Voltron Paladins',
        'The Avatars'
      ],
      correctAnswer: 'The Aavtars'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  currentQuestionState: {
    answerArray: [];
  }
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/*Creates html for the welcome screen to start the quiz*/

function generateWelcomeString() {
  return `
  <div class="welcome">
    <form>
      <p>
        Welcome User. Begin the quiz by pressing the button.
      </p>

      <button type="submit"id="beginQuiz" autofocus>Begin Quiz</button>
    </form>
  </div>
    `;
}
function generateQuizInterfaceString(questionObject) {
  // console.log(questionObject);
  // console.log(questionObject.question.answers);
  return `
    <div class='quiz-interface'>
      <p>Question ${questionObject.index} out of ${store.questions.length}</p>
      <p>
       ${questionObject.question.question}
      </p>

      <form>
      <ol type="A">
        ${generateQuizAnswers(questionObject.question.answers)}
      </ol>
      <button type="submit" class="submit-answer">Submit Answer</button>
      </form>
      <p>Score: ${store.score}</p>
    </div>
    `;
}


function generateAnswerResults(){
  let answerArray = store.currentQuestionState.answerArray;

  const buttons = {
    next: ' <button type="submit" class="next-question" autofocus>Next Question</button>',
    results: '<button type="submit" class="see-results" autofocus>See Results</button>'
  };

  let correctResponse = `"${answerArray[1]}" is correct`;
  let incorrectResponse = `${answerArray[2]} is not correct. The correct answer is<br><br>
  "${answerArray[1]}"`;

  let isLastQuestion = (store.questionNumber + 1) === (store.questions.length);

  return `
    <div class="answer-response">
    <form>
    <p>${answerArray[0] === true ? correctResponse : incorrectResponse}</p>
    <p> Score: ${store.score}</p>
   ${isLastQuestion ? buttons.results : buttons.next}
    </form>
    </div>
  `;
}


function generateQuizAnswers(answers){
  let answerArray = [];
  let indexArray = [];
  answers.forEach(answer => {
    answerArray.push(answer);
    indexArray.push(answers.indexOf(answer));
  });
  console.log(indexArray);
  return answerArray.map(answer => stringifyAnswerArray(answer)).join('');
}

function stringifyAnswerArray(answer){
  let questionNumber = store.questionNumber;
  let name = store.questions[questionNumber].answers.indexOf(answer);
  console.log(name);

  return `
    <li>
      <div class="answer-container">
      <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}">
      <label for="answer-${name}"> ${answer}</label>

      </div>
    </li>
  `;
}

function generateQuizResultsString(){
  return `
    <div class='quiz-results'>
      <p>
       The Quiz is over.
         </p>
          <p>You scored ${store.score} out of ${store.questions.length * 10}</p>
        <button class="restart-quiz">Restart Quiz</button>
    </div>
   ${generateImage()}
`;
        }

function generateImage(quizResults) {
   return
   console.log("I'm popping up after the quiz")
      $('main').empty().append('<img src="https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" height="64px" width="64px" alt="River Image">')

 }

/********** RENDER FUNCTION(S) **********/

function renderQuiz () {

  if(store.quizStarted === false) {
    if(store.questionNumber === store.questions.length){
      const quizResultsString = generateQuizResultsString();
      const finalImage = generateImage();
      $('main').html(quizResultsString);
    } else {
      const quizWelcomeInterfaceString = generateWelcomeString();
      $('main').html(quizWelcomeInterfaceString);
    }
  } else if (store.quizStarted === true) {
    if(store.submittingAnswer === false) {
      const quizInterfaceString = generateQuizInterfaceString(currentQuestion());
      $('main').html(quizInterfaceString);
    } else if (store.submittingAnswer === true) {
      const quizAnswerResponseString = generateAnswerResults();
      $('main').html(quizAnswerResponseString);
    }
  }
}


// Changes the state of the application to a quizStarted = true
function startQuiz() {
  console.log('quiz has begun');
  store.quizStarted = true;
}

// currentQuestion
function currentQuestion(){
  let index = store.questionNumber;
  let questionObject = store.questions[index];
  return {
    index: index +1,
    question: questionObject
  };
}

// Go to the next question of the quiz
// Model function changes state
function nextQuestion(){
  if (store.questionNumber < store.questions.length){
    store.questionNumber++;
    store.submittingAnswer =false;
    console.log(store.questionNumber);
  } else if(store.questionNumber === store.questions.length) {
    store.quizStarted = false;
  }
}


function validateCorrectAnswer() {
  let radios = $('input:radio[name=answer]');
  let selectedAnswer = $('input[name="answer"]:checked').data('answer');
  let questionNumber = store.questionNumber;
  let correctAnswer = store.questions[questionNumber].correctAnswer;

  if (radios.filter(':checked').length === 0) {
    alert('Please select an answer.');
    return;
  } else {
    store.submittingAnswer = true;
    if(selectedAnswer === correctAnswer){
      store.score += 10;
      store.currentQuestionState.answerArray = [true, correctAnswer, selectedAnswer];
    } else {
      store.currentQuestionState.answerArray = [false, correctAnswer, selectedAnswer];
    }
  }
}

function seeResults() {
  store.quizStarted = false;
  store.questionNumber ++;
}

function restartQuiz() {
  store.quizStarted = false;
  store.questionNumber = 0;
  store.submittingAnswer = false;
  store.currentQuestionState.answerArray = [];
}

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)
// Controller layer

function handleBeginQuizSubmit(){

  $('main').on('click', '#beginQuiz', (event) =>{
    event.preventDefault();
    startQuiz();
    renderQuiz();
  });
}

function handleSubmitAnswer() {
  $('main').on('click' , '.submit-answer', (event)=>{
    event.preventDefault();
    console.log('submitting answer');
    validateCorrectAnswer();
    renderQuiz();
  });
}

function handleNextQuestionSubmit(){
  $('main').on('click', '.next-question', (event) => {
    event.preventDefault();
    nextQuestion();
    renderQuiz();
  });
}

function handleSeeResultsSubmit(){
  $('main').on('click', '.see-results', (event) => {
    event.preventDefault();
    seeResults();
    renderQuiz();
  });
}

function handleRestartQuizSubmit(){
  $('main').on('click', '.restart-quiz', (event) => {
    event.preventDefault();
    restartQuiz();
    renderQuiz();
  });
}


// This function will launch all other functions after the page is loaded
function handleQuiz (){
  renderQuiz();
  handleBeginQuizSubmit();
  handleSubmitAnswer();
  handleNextQuestionSubmit();
  handleRestartQuizSubmit();
  handleSeeResultsSubmit();

}

$(handleQuiz);
