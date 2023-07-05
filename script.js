var attempt = getPageNumber();

function getPageNumber() {
  var currentPageUrl = window.location.href;
  var pageName = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
  var pageNumber = pageName.replace("try", "").replace(".html", "");
  return parseInt(pageNumber);
}

function checkAnswer() {
  var userInput = document.getElementById("userInput").value;
  
  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    var nextPage = "try" + (attempt + 1) + ".html";
    window.location.href = nextPage;
  }
}

function checkTryAnswer() {
  var tryInput = document.getElementById("tryInput").value;

  if (tryInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    attempt++;
    var nextPage = "try" + (attempt + 1) + ".html";
    window.location.href = nextPage;
  }
}
