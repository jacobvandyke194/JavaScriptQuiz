const beforeGame = document.getElementById("beforeText")
const nameBox = document.getElementById("nameBox")
const resetBtn = document.getElementById("resetBtn")
const userScore = document.getElementById("userScore")
const questions = document.getElementById("questions")
const answerButton = document.getElementById("answerBtn")
const continueBtn = document.getElementById("continueBtn")
const questionBox = document.getElementById("questionBox")
const btn = document.getElementsByClassName("btn")

var questionsRandom , questionLibrary

//timer:

var remainingTime = 60;
var score = 0;
