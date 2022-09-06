import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic
function getSearch(keyword) {
  let requestSearch = new XMLHttpRequest();
  console.log(keyword);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=yxz9s2clvyAa3M7ajxUmlHiWe6A8p4US&q=${keyword}&limit=20&offset=0&rating=r&lang=en`;

  requestSearch.addEventListener("loadend", function() {
    const responseSearch = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(responseSearch, keyword);
    }
  });
  requestSearch.open("GET", url, true);
  requestSearch.send();
}

// UI Logic

function printElements(apiResponse, keyword) {
  document.getElementById("gifResult").setAttribute("src", apiResponse.data[Math.floor(Math.random() * 20)].images.original.url);
  document.getElementById("keywordOutput").innerText = `Keyword: ${keyword}`;
}

function handleSubmission(event) {
  event.preventDefault();
  const keyword = document.getElementById("keyword").value;
  console.log(keyword);
  document.getElementById('keyword').value = null;
  console.log(keyword);
  getSearch(keyword);
}

window.addEventListener("load", function() {
  document.querySelector('form#search').addEventListener("submit", handleSubmission);
});