import changeStatus from "./changeStatus";

export default function playGame() {
  let wordRandom;
  let tipRandom = "";
  let inletter = "";

  const viewTip = document.querySelector("#viewTip");
  const outWord = document.querySelector("#outWord");

  function assembleGame() {
    let words = localStorage.getItem("word").split(";");
    let tip = localStorage.getItem("tip").split(";");

    const size = words.length;
    let randomNumber = Math.floor(Math.random() * size);

    wordRandom = words[randomNumber].toUpperCase();
    tipRandom = tip[randomNumber];

    let newWord = "";

    for (let i = 0; i < wordRandom.length; i++) {
      if (wordRandom.charAt(0) == wordRandom.charAt(i)) {
        newWord += wordRandom.charAt(0);
      } else {
        newWord += "_";
      }

      outWord.textContent = newWord;
    }
    //monta o tecladop com as letras
    wordKeys();
    inletter = document.querySelectorAll(".keyChar");
  }

  function verifyEnd() {
    const outChance = document.querySelector("#outChance");
    const finalMessage = document.querySelector("#finalMessage");

    let chance = Number(outChance.textContent);

    if (chance == 0) {
      finalMessage.className = "text-danger";
      finalMessage.textContent = `Ah...é ${wordRandom}. Você perdeu`;
      changeStatus(7);
      endGame();
    } else if (outWord.textContent == wordRandom) {
      finalMessage.className = "text-success";
      finalMessage.textContent = `Parabéns !!  você ganhou`;
      changeStatus(6);
      endGame();
    }
  }

  function endGame() {
    let outTip = document.querySelector("#outTip");
    outTip.textContent = `* Clique no botão 'jogar' que esta no menu para jogar novamente`;
    inletter.forEach((item) => {
      item.style.display = "none";
    });
    viewTip.disabled = true;
  }
  function wordKeys() {
    const place = document.querySelector("#keyboard");
    const char = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "X",
      "Z",
    ];

    char.forEach((item) => {
      let html = document.createElement("p");
      html.classList.add("keyChar");
      html.textContent = item;
      place.appendChild(html);
    });
  }

  function existWord() {
    if (localStorage.getItem("word")) {
      assembleGame();
    } else {
      alert("Cadastre palavras para jogar");
      viewTip.disabled = true;
    }
  }

  existWord();

  function play({ target }) {
    const outWord = document.querySelector("#outWord");
    const outChance = document.querySelector("#outChance");
    const outError = document.querySelector("#outError");

    //pega a letra clicada

    let letter = target.textContent.toUpperCase();

    if (letter == "" || letter.length != 1) {
      alert("Informe uma letra");
      return;
    }

    let error = outError.textContent;
    let wordSingle = outWord.textContent;

    if (error.indexOf(letter) >= 0 || wordSingle.indexOf(letter) >= 0) {
      alert("Você ja apostou  esta letra");
    }
    if (wordRandom.indexOf(letter) >= 0) {
      let newWord = "";

      for (let i = 0; i < wordRandom.length; i++) {
        if (wordRandom.charAt(i) == letter) {
          newWord += letter;
        } else {
          newWord += wordSingle.charAt(i);
        }
      }
      outWord.textContent = newWord;
    } else {
      error += letter;
      outError.textContent = error;
      let chance = Number(outChance.textContent) - 1;
      outChance.textContent = chance;
      changeStatus(chance);
    }

    verifyEnd();
  }

  inletter.forEach((item) => {
    item.addEventListener("click", play);
  });

  function showTip() {
    const outChance = document.querySelector("#outChance");
    const outError = document.querySelector("#outError");
    const outTip = document.querySelector("#outTip");

    let error = outError.textContent;

    if (error.indexOf("*") >= 0) {
      alert("você ja solicitou a dica");
      return;
    }

    outTip.textContent = " * " + tipRandom;
    outError.textContent = error + " * ";
    let chance = Number(outChance.textContent) - 1;
    outChance.textContent = chance;
    changeStatus(8);
    verifyEnd();
  }
  viewTip.addEventListener("click", showTip);
}
