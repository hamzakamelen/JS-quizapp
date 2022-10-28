var questions = [
  {
    question: "HTML Stands For _________",
    options: [
      "Anchor Text Language",
      "HTML",
      "Case Cading Style Sheet",
      "HyperText markup language",
    ],
    correctAns: "HyperText markup language",
  },
  {
    question: "CSS Stands For _________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "JS Stands For _________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "DOM Stands For _________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "RAM Stands For _________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "ROM Stands For _________",
    options: [
      "Hyper Text Markup Language",
      "html",
      "HTml",
      "Read Only Memory",
    ],
    correctAns: "Read Only Memory",
  },
]
var currentQuestion = document.getElementById("currentQuestion")
var totalQuestion = document.getElementById("totalQuestion")
var displayQuestion = document.getElementById("displayQuestion")
var option = document.getElementById("options")
var maind = document.getElementById("maind")
// Show Result 
var showResult = document.getElementById("showResult")
var displayMarks = document.getElementById("displayMarks")
var displayGrade = document.getElementById("displayGrade")
var displayPercentage = document.getElementById("displayPercentage")
var displayStatus = document.getElementById("displayStatus")
var marks = 0;
var currentIndex = 0;

// function putOptionClass(option){
//   removeOptionClass()
//   option.classList.add("active")
// }

// function removeOptionClass(){
//   for(var i=0; i<active.length;i++){
//     active[i].classList.remove("active")
//   }
// }
function initRender() {
  totalQuestion.innerHTML = questions.length
  currentQuestion.innerHTML = currentIndex + 1;
  displayQuestion.innerHTML = questions[currentIndex].question
  option.innerHTML = ''
  for (var i = 0; i < questions[currentIndex].options.length; i++) {
    option.innerHTML += `
        <div class="col-6 text-center">
                <button class="rounded-pill btn-outline-warning opt"
                 onclick ="checkAns('${questions[currentIndex].options[i]}','${questions[currentIndex].correctAns}')">
         ${questions[currentIndex].options[i]}</button>
            </div>
        `
  }
}
initRender()
function next() {
  if (currentIndex + 1 == questions.length) {
    showResult.style.display = "flex"
    maind.style.display = "none"
    var totalmarks = questions.length

    var percentage = (marks / totalmarks) * 100
    //   displayGrade.innerHTML = 
      displayMarks.innerHTML = marks
    displayPercentage.innerHTML = percentage.toFixed()
    if(percentage > 79){
      displayGrade.innerHTML = "A+"
    }
    if(percentage >= 60 ){
      displayGrade.innerHTML = "B"
    } 
    if(percentage <= 59 ){
      displayGrade.innerHTML ="C"
    }
    if (percentage <= 50) {
      displayStatus.innerHTML = "Fail"
      displayGrade.innerHTML = "F"
    }
    else {
      displayStatus.innerHTML = "Pass"
    }
  }
  else {
    currentIndex++
    initRender()
  }
}

function checkAns(a,b){
  next()
  if(a==b){
    marks++
  }
}
