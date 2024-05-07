var questions = [
  {
    question: "What is the capital city of Australia?",
    option1: "Sydney",
    option2: "Melbourne",
    option3: "Canberra",
    corrAnswer: "Canberra",
  },
  {
    question: "What is the chemical symbol for Gold?",
    option1: "Au",
    option2: "Go",
    option3: "Gd",
    corrAnswer: "Au",
  },
  {
    question: "In what year was the first iPhone released?",
    option1: "2005",
    option2: "2007",
    option3: "2008",
    corrAnswer: "2007",
  },
  {
    question: "What is the tallest mountain in the world?",
    option1: "K2",
    option2: "Mount Everest",
    option3: "Mount Kilimanjaro",
    corrAnswer: "Mount Everest",
  },
  {
    question: "Which planet is known as the Red Planet?",
    option1: "Mars",
    option2: "Jupiter",
    option3: "Saturn",
    corrAnswer: "Mars",
  },
  {
    question: "Who discovered electricity?",
    option1: "Isaac Newton",
    option2: "Michael Faraday",
    option3: "Benjamin Franklin",
    corrAnswer: "Benjamin Franklin",
  },
  {
    question: "Who is the author of the Harry Potter series?",
    option1: "J.K. Rowling",
    option2: "J.D. Salinger",
    option3: "Suzanne Collins",
    corrAnswer: "J.K. Rowling",
  },
  {
    question: "Who directed the 2019 film Parasite? ",
    option1: "Quentin Tarantino",
    option2: "Bong Joon-ho",
    option3: "Christopher Nolan",
    corrAnswer: "Bong Joon-ho",
  },
  {
    question: "What language is spoken in Argentina?",
    option1: "English",
    option2: "Portuguese",
    option3: "Spanish",
    corrAnswer: "Spanish",
  },
  {
    question: "Who directed the movie Titanic?",
    option1: "James Cameron",
    option2: "Steven Spielberg",
    option3: "Alfred Hitchcock",
    corrAnswer: "James Cameron",
  },
];
var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;
setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      min = 1;
      sec = 59;
      nextQuestion();
    }
  }
}, 1000);
function nextQuestion() {
  var getOptions = document.getElementsByName("options");
  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedQues = questions[index - 1].question;
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAnswer = questions[index - 1]["corrAnswer"];
      if (selectedAns == correctAnswer) {
        score++;
      }
    }
    getOptions[i].checked = false;
  }
  btn.disabled = true;
  if (index > questions.length - 1) {
    var percentage = ((score / questions.length) * 100).toFixed(2);
    if (percentage >= 90 && percentage <= 100) {
      Swal.fire({
        title: "Excellent!",
        text: "Your percentage is: " + percentage,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.history.back();
          r;
        }
      });
    } else if (percentage >= 80 && percentage <= 89) {
      Swal.fire({
        title: "Very Good!",
        text: "Your percentage is: " + percentage,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.history.back();
        }
      });
    } else if (percentage >= 70 && percentage <= 79) {
      Swal.fire({
        title: "Good!",
        text: "Your percentage is: " + percentage,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.history.back();
        }
      });
    } else if (percentage >= 60 && percentage <= 69) {
      Swal.fire({
        title: "Work Hard!",
        text: "Your percentage is: " + percentage,
        icon: "info",
      }).then((result) => {
        if (result.isConfirmed) {
          window.history.back();
        }
      });
    } else {
      Swal.fire({
        title: "Fail, Try Again!",
        text: "Your percentage is: " + percentage,
        icon: "error",
      }).then((result) => {
        if (result.isConfirmed) {
          window.history.back();
        }
      });
    }
  } else {
    ques.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    min = 1;
    sec = 59;
  }
}

function target() {
  var btn = document.getElementById("btn");
  btn.disabled = false;
}
