/*function getApi(){
    const request = new XMLHttpRequest();
    const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

    request.onload = () =>{
        const elementText = document.querySelector(" .gameMonkey p");
        const response = JSON.parse(request.responseText);
        elementText.innerHTML = response.quotes[0].text;
    }
    request.open('get',url);
    request.send();
}

getApi();

USANDO API DE FRASES ALEATÓRIAS*/

//
//Separando palavras e letras do Array
//
const gameMonkey = document.querySelector(" .gameMonkey p");
const bReset = document.getElementById("buttonReset");

let arrayPhrases = [
  "my",
  "mind",
  "of",
  "the",
  "medium",
  "apple",
  "somebody",
  "prototype",
  "haircut",
  "very",
  "felings",
  "world",
  "by",
  "have",
  "drive",
  "wanted",
  "motorcycle",
  "health",
  "birthday",
  "last",
  "from",
  "save",
  "baggage",
  "location",
  "application",
  "story",
  "then",
  "interface",
  "will",
  "Willie Wonka",
  "length",
  "she",
  "good",
  "work",
  "twister",
];

let phrase = "";
function randomArrayPhrase() {
  phrase = "";
  for (let i = 0; i < arrayPhrases.length - 10; i++) {
    let randomWords =
      arrayPhrases[Math.floor(Math.random() * arrayPhrases.length)];

    if (phrase == "") {
      phrase += randomWords;
    } else {
      phrase += " " + randomWords;
    }
  }
  gameMonkey.innerHTML = phrase;
}

gameMonkey.innerHTML = phrase;
bReset.addEventListener("click", randomArrayPhrase);
randomArrayPhrase();

//
//Separando os caracteres no html
//

function newSpanWordsAndLetters() {
  let words = phrase.split(" ");
  gameMonkey.innerHTML = "";

  words.forEach((elementWords, positionWords) => {
    let letters = words[positionWords].split("");
    letters.forEach((elementLetters, positionLetters) => {
      gameMonkey.innerHTML +=
        "<span class='letters'>" + letters[positionLetters] + "</span>";
    });
    gameMonkey.innerHTML += "<span class='words'>" + " </span>";
  });
}
newSpanWordsAndLetters();

//
//Pegando tecla digitada
//
function getKeypress(caracter) {
  console.log(caracter.key);
}

addEventListener("keypress", getKeypress);

//
//Sistema de cores
//
let contColors = true;
bPalleteColors = document.getElementById("palleteColors");
textColors = document.querySelector(".palleteColors p");
let newColor = document.querySelector(":root");
function setNewColor() {
  newColor.setAttribute(
    "style",
    "--color1: #876571; --color2: #48373d; --color3: #b8a7aa; --color4: #eae5e9; --color5: #48373d"
  );
}
function setOriginalColor() {
  newColor.setAttribute(
    "style",
    " --color1: #deb415; --color2: #646669;--color3: #323437;--color4: #bebebe;--color5: #5f605f; "
  );
}

function booleanColors() {
  if (contColors) {
    textColors.innerHTML = "Light Them";
    setNewColor();
    contColors = false;
  } else {
    textColors.innerHTML = "Dark Them";
    setOriginalColor();
    contColors = true;
  }
}

bPalleteColors.addEventListener("click", booleanColors);

/*
logo monkey type: #876571
cor icones: #48373d
cor hover: #eae5e9
logo monkey see: #6d5b60 
cor tab esc: #48373d
cor de fundo: #b8a7aa

*/
