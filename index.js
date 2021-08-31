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
  "willie wonka",
  "length",
  "she",
  "good",
  "work",
  "twister",
];

let phrase = "";
let currentPhrase = "";
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
  currentPhrase = "";
}

gameMonkey.innerHTML = phrase;
bReset.addEventListener("click", randomArrayPhrase);
bReset.addEventListener("click", newSpanWordsAndLetters);
randomArrayPhrase();

//
//Separando os caracteres no html
//

function newSpanWordsAndLetters(event) {
  let words = phrase.split(" ");
  gameMonkey.innerHTML = "";
  let idCont = 0;

  words.forEach((elementWords, positionWords) => {
    let letters = words[positionWords].split("");
    let getLetters = "";
    letters.forEach((elementLetters, positionLetters) => {
      getLetters +=
        "<span class='letters' id='" +
        idCont +
        "'>" +
        letters[positionLetters] +
        "</span>";
      idCont++;
    });
    gameMonkey.innerHTML +=
      "<span class='words'>" +
      getLetters +
      " </span> <span = class'space' id='" +
      idCont +
      "'> </span>";
    idCont++;
  });
}
newSpanWordsAndLetters();

//
//Pegando tecla digitada e verificando se está correta
//

function getKeydown(event) {
  let lettersAndSpace =
    (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 32;
  let pressedKeyboard = event.key.toLowerCase();
  const textElement = document.getElementById(currentPhrase.length);
  const previousTextElement = document.getElementById(currentPhrase.length - 1);

  if (event.keyCode == 8) {
    currentPhrase = currentPhrase.substring(0, currentPhrase.length - 1);
    textElement.classList.remove("correct", "incorrect");

    barAnimation();
  } else if (
    lettersAndSpace == textElement.innerHTML ||
    pressedKeyboard == textElement.innerHTML
  ) {
    textElement.classList.add("correct");
    currentPhrase += pressedKeyboard;
  } else if (lettersAndSpace) {
    textElement.classList.add("incorrect");
    currentPhrase += pressedKeyboard;
  }
  console.log(
    currentPhrase,
    currentPhrase.length,
    pressedKeyboard,
    lettersAndSpace
  );
}
addEventListener("keydown", getKeydown);

//
//Efeito de digitação
//
function barAnimation() {
  const textElement = document.getElementById(currentPhrase.length);
  const previousTextElement = document.getElementById(currentPhrase.length - 1);
  const proximTextElement = document.getElementById(currentPhrase.length + 1);

  if (currentPhrase.length == 0) {
    textElement.classList.add("active");
  } else if (currentPhrase.length >= 1) {
    previousTextElement.classList.remove("active");
    textElement.classList.add("active");
  }
}
barAnimation();

addEventListener("keydown", barAnimation);
//
//Sistema de cores
//

let newVariable = document.querySelector(":root");

let contColors = true;
bPalleteColors = document.getElementById("palleteColors");
textColors = document.querySelector(".palleteColors p");
function setnewVariable() {
  newVariable.setAttribute(
    "style",
    "--color1: #876571; --color2: #48373d; --color3: #b8a7aa; --color4: #eae5e9; --color5: #48373d"
  );
}
function setOriginalColor() {
  newVariable.setAttribute(
    "style",
    " --color1: #deb415; --color2: #646669;--color3: #323437;--color4: #bebebe;--color5: #5f605f; "
  );
}

function booleanColors() {
  if (contColors) {
    textColors.innerHTML = "Light Them";
    setnewVariable();
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
