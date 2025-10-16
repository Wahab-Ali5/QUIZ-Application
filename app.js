var questions = [
  {
    question: "1. Which HTML tag is used to create a hyperlink?",
    option1: "<link>",
    option2: "<a>",
    option3: "<href>",
    corrAnswer: "<a>",
  },
  {
    question: "2. What does the <title> tag define in HTML?",
    option1: "The heading of a page",
    option2: "The page title shown in the browser tab",
    option3: "The footer of a document",
    corrAnswer: "The page title shown in the browser tab",
  },
  {
    question: "3. Which attribute is used to display an image in HTML?",
    option1: "href",
    option2: "src",
    option3: "link",
    corrAnswer: "src",
  },
  {
    question: "4. Which property is used to change text color in CSS? ",
    option1: "font-color",
    option2: "text-color  ",
    option3: "color",
    corrAnswer: "color",
  },
  {
    question: "5. Any element assigned with id, can be get in css ",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",
  },
  {
    question: "6. CSS can be used with ______ methods ",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",
  },
  {
    question: "7. In JS variable types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
  },
  {
    question: "8. In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
  {
    question: "9. toFixed() is used to define length of decimal ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",
  },
  {
    question: "10. push() method is used to add element in the start of array ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
];

var quesElement = document.getElementById("ques");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var index = 0;
var nextBtn = document.getElementById("btn");
var score = 0;
var min = 1;
var sec = 59;

function next() {
  var allInputs = document.getElementsByTagName("input");

  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].checked) {
      allInputs[i].checked = false;
      var userSelectedValue = allInputs[i].value;

      var selectedOption = questions[index - 1]["option" + userSelectedValue];
      var correctOption = questions[index - 1]["corrAnswer"];
     
      if (selectedOption === correctOption) {
        score++;
      }
    }
  }

  nextBtn.disabled = true;

  if (index > questions.length - 1) {
    Swal.fire({
      title: "Good job!",
      text: (score / questions.length) * 100,
      icon: "success",
    });
    if ((score / questions.length) * 100 <=50) {
    Swal.fire({
      title: "Work Hard!",
      text: (score / questions.length) * 100,
      icon: "success",
    });
  }
   if ((score / questions.length) * 100 <=30) {
    Swal.fire({
      title: "Try next time!",
      text: (score / questions.length) * 100,
      icon: "error",
    });
  }
  } else {
    quesElement.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
  }
}

function tigger() {
  nextBtn.disabled = false;
}