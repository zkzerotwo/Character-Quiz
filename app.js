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
  score: 0
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
