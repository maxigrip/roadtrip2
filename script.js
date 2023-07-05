var attempt = 1;

function checkAnswer() {
  var userInput = document.getElementById("userInput").value;
  
  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    var nextPage = "try" + attempt + ".html";
    window.location.href = nextPage;
  }
}

function checkTryAnswer() {
  var tryInput = document.getElementById("tryInput").value;

  if (tryInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    attempt++;
    var nextPage = "try" + attempt + ".html";
    window.location.href = nextPage;
  }
}
