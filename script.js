function funcA() {
  var userInput = document.getElementById("A").value;

  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "incorrect1.html";
  }
}

function checkNewAnswer() {
  var userInput = document.getElementById("newAnswerInput").value;

  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "incorrect1.html";
  }
}

function checkNewNewAnswer() {
  var userInput = document.getElementById("checkNewNewAnswer").value;

  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "incorrect2.html";
  }
}