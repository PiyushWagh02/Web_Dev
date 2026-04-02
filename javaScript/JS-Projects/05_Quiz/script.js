// challenges
//  1.feel like selected
//  2.try mmoving to next ques with out next btn
// 3.diff individual marks and calculate total marks



document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn")
  const restartBtn = document.getElementById("restart-btn")
  const questionContainer = document.getElementById("question-container")
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list")
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score")



  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      mark: 5
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      mark: 7
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      mark: 8
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0,
    score = 0,
    resultContainer.classList.add('hiddden'),
    startQuiz()
  }

  )



  startBtn.addEventListener('click', startQuiz);

  function nextquestion() {
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion()
    } else {
      showResult()
    }
    
  }
  
  
  
  nextBtn.addEventListener('click', nextquestion)
  
  function startQuiz() {
    startBtn.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion()
    
  }
  
  function showQuestion() {
    nextBtn.classList.add('hidden')
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""//clear previous choices
    questions[currentQuestionIndex].choices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice
      li.addEventListener('click', () =>
        { li.classList.add('onclick'),
          selectAnswer(choice);
          nextquestion()
        })
          
          choicesList.appendChild(li);
        })
        
      }
      
      function selectAnswer(choice) {
    // setTimeout(nextquestion,7000 );
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score += questions[currentQuestionIndex].mark;
    }
    nextBtn.classList.remove("hidden");

  }


  function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    let totalscore = 0;
    questions.forEach((e) => {
      totalscore += e.mark;
    })
    scoreDisplay.textContent = `${score} out of ${totalscore}`
  }



});

// done with the challenges

