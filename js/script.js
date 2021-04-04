window.onload = () => {
  let buttonsArea = document.getElementById("buttons-area");
  let resultAreaText = document.getElementsByTagName("span");

  for (let i = 0; i < 10; i++) {
    buttonsArea.innerHTML += `<button id='button-${i}' onclick='show(this)'>${i}</button>`;
  }

  if (localStorage.hasOwnProperty("voteBlue")) {
    resultAreaText[0].innerHTML = parseInt(localStorage.getItem("voteBlue"));
  }

  if (localStorage.hasOwnProperty("voteWhite")) {
    resultAreaText[1].innerHTML = parseInt(localStorage.getItem("voteWhite"));
  }

  if (localStorage.hasOwnProperty("voteOrange")) {
    resultAreaText[2].innerHTML = parseInt(localStorage.getItem("voteOrange"));
  }

  if (localStorage.hasOwnProperty("voteRed")) {
    resultAreaText[3].innerHTML = parseInt(localStorage.getItem("voteRed"));
  }
};

const show = (e) => {
  let displayA = document.getElementById("display");

  displayA.innerHTML = displayA.innerHTML + e.innerHTML;
  if (displayA.innerHTML.length > 2)
    displayA.innerHTML = displayA.innerHTML.substring(0, 3);
};

const deleteA = () => {
  let displayA = document.getElementById("display");
  displayA.innerHTML = "";
};

const backOne = () => {
  let displayA = document.getElementById("display");
  displayA.innerHTML = displayA.innerHTML.slice(0, -1);
};

let resultAreaText = document.getElementsByTagName("span");
let voteBlue = localStorage.hasOwnProperty("voteBlue")
  ? parseInt(localStorage.getItem("voteBlue"))
  : 0;

let voteWhite = localStorage.hasOwnProperty("voteWhite")
  ? parseInt(localStorage.getItem("voteWhite"))
  : 0;

let voteOrange = localStorage.hasOwnProperty("voteOrange")
  ? parseInt(localStorage.getItem("voteOrange"))
  : 0;

let voteRed = localStorage.hasOwnProperty("voteRed")
  ? parseInt(localStorage.getItem("voteRed"))
  : 0;
const sendVote = () => {
  let displayA = document.getElementById("display");

  if (displayA.innerHTML == 333) {
    displayA.innerHTML = `<div id='blue' class='square'></div>`;
    displayA.innerHTML += `<h1>Your vote went to blue</h1>`;
    displayA.innerHTML += `<h1>Number:333</h1>`;

    voteBlue++;
    resultAreaText[0].innerHTML = voteBlue;

    localStorage.setItem("voteBlue", voteBlue);
    // localStorage.setItem("resultAreaText0", resultAreaText[0].innerHTML);
  }

  if (displayA.innerHTML == 444) {
    displayA.innerHTML = `<div id='white' class='square'></div>`;
    displayA.innerHTML += `<h1>Your vote went to white</h1>`;
    displayA.innerHTML += `<h1>Number:444</h1>`;

    voteWhite++;
    resultAreaText[1].innerHTML = voteWhite;

    localStorage.setItem("voteWhite", voteWhite);
    // localStorage.setItem("resultAreaText1", resultAreaText[1].innerHTML);
  }

  if (displayA.innerHTML == 555) {
    displayA.innerHTML = `<div id='orange' class='square'></div>`;
    displayA.innerHTML += `<h1>Your vote went to orange</h1>`;
    displayA.innerHTML += `<h1>Number:555</h1>`;

    voteOrange++;
    resultAreaText[2].innerHTML = voteOrange;

    localStorage.setItem("voteOrange", voteOrange);
    // localStorage.setItem("resultAreaText2", resultAreaText[2].innerHTML);
  }

  if (displayA.innerHTML == 666) {
    displayA.innerHTML = `<div id='red' class='square'></div>`;
    displayA.innerHTML += `<h1>Your vote went to red</h1>`;
    displayA.innerHTML += `<h1>Number:666</h1>`;

    voteRed++;
    resultAreaText[3].innerHTML = voteRed;

    localStorage.setItem("voteRed", voteRed);
    // localStorage.setItem("resultAreaText3", resultAreaText[3].innerHTML);
  }

  let square = document.getElementsByClassName("square")[0];
  square.style.backgroundColor = square.id;
};

const clearVotes = () => {
  localStorage.clear();
  location.reload();
};
let resultAreaContainer = document.getElementById("result-area-container");

const showResults = () => {
  let resultArea = document.getElementById("result-area");

  resultAreaContainer.classList.add("active");

  setTimeout(() => {
    resultAreaContainer.style.opacity = 1;
    resultArea.style.margin = 0;
  }, 100);
};

resultAreaContainer.onclick = (e) => {
  let resultArea = document.getElementById("result-area");

  if (e.target === e.currentTarget) {
    resultAreaContainer.style.opacity = 0;
    resultArea.style.marginTop = -250 + "%";

    setTimeout(() => {
      resultAreaContainer.classList.remove("active");
    }, 300);
  }
};
