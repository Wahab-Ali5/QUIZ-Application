// ============ Firebase Setup =============
var firebaseConfig = {
  apiKey: "AIzaSyDzJjdQflAnZhiGcSz-DBSQkVmhh1eFd3M",
  authDomain: "quiz-application-3fe3a.firebaseapp.com",
  databaseURL: "https://quiz-application-3fe3a-default-rtdb.firebaseio.com",
  projectId: "quiz-application-3fe3a",
  storageBucket: "quiz-application-3fe3a.firebasestorage.app",
  messagingSenderId: "894995626347",
  appId: "1:894995626347:web:ac80e2ef8492a9c3fff42e"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// ============ Questions =============
var questions = [
  {
    question: "Q1: HTML Stands for?",
    option1: "Hyper Text Markup Language",
    option2: "Hyper Tech Markup Language",
    option3: "Hyper Touch Markup Language",
    corrAnswer: "Hyper Text Markup Language",
  },
  {
    question: "CSS Stands for",
    option1: "Cascoding Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascating Style Sheets",
    corrAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used for most large heading",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    corrAnswer: "<h1>",
  },
  {
    question: "Which tag is used to make element unique ",
    option1: "id",
    option2: "class",
    option3: "label",
    corrAnswer: "id",
  },
  {
    question: "Any element assigned with id, can be get in css ",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",
  },
  {
    question: "CSS can be used with ______ methods ",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",
  },
  {
    question: "In JS variable types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
  },
  {
    question: "In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
  {
    question: "toFixed() is used to define length of decimal ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",
  },
  {
    question: "push() method is used to add element in the start of array ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
];

// ============ Elements ============
var quesElement = document.getElementById("ques");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var nextBtn = document.getElementById("btn");
var progressBar = document.getElementById("progressBar");

var index = 0;
var score = 0;

// ============ Functions ============
function next() {
  var allInputs = document.getElementsByName("options");
  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].checked) {
      var userSelectedValue = allInputs[i].value;
      var selectedOption = questions[index - 1]["option" + userSelectedValue];
      var correctOption = questions[index - 1]["corrAnswer"];
      if (selectedOption === correctOption) {
        score++;
      }
      allInputs[i].checked = false;
    }
  }

  nextBtn.disabled = true;

  if (index >= questions.length) {
    saveAndRestart();
  } else {
    quesElement.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    progressBar.style.width = ((index / questions.length) * 100) + "%";
  }
}

function tigger() {
  nextBtn.disabled = false;
}

function saveAndRestart() {
  var percentage = (score / questions.length) * 100;
  var userId = "user_" + Date.now();

  database.ref("quizResults/" + userId).set({
    score: score,
    total: questions.length,
    percentage: percentage.toFixed(2) + "%",
    date: new Date().toLocaleString(),
  });

  Swal.fire({
    title: "Quiz Completed!",
    html: `<b>Score:</b> ${score}/${questions.length}<br>
           <b>Percentage:</b> ${percentage.toFixed(2)}%`,
    icon: "success",
    confirmButtonText: "Restart Quiz"
  }).then(() => {
    restartQuiz();
  });
}

function restartQuiz() {
  index = 0;
  score = 0;
  progressBar.style.width = "0%";
  next();
}

// ============ Start ============
function next() {
  if (index === 0) {
    quesElement.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    progressBar.style.width = ((index / questions.length) * 100) + "%";
    return;
  }

  var allInputs = document.getElementsByName("options");
  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].checked) {
      var userSelectedValue = allInputs[i].value;
      var selectedOption = questions[index - 1]["option" + userSelectedValue];
      var correctOption = questions[index - 1]["corrAnswer"];
      if (selectedOption === correctOption) {
        score++;
      }
      allInputs[i].checked = false;
    }
  }

  nextBtn.disabled = true;

  if (index >= questions.length) {
    saveAndRestart();
  } else {
    quesElement.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    progressBar.style.width = ((index / questions.length) * 100) + "%";
  }
}
