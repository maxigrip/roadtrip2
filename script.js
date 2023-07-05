function checkAnswer() {
  var userInput = document.getElementById("userInput").value;
  
  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "incorrect.html";
  }
}
function checkNewAnswer() {
  var newAnswer = document.getElementById("newAnswerInput").value;

  if (newAnswer === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "tryagain.html";
  }
}
