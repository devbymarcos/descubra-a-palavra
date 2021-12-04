import changeStatus from "./changeStatus";

export default function playGame() {
  let wordRandom;
  let tipRandom;

  const inletter = document.querySelector("#inLetter");
  const btnThrow = document.querySelector("#btnThrow");
  const viewTip = document.querySelector("#viewTip");
  const outWord = document.querySelector("#outWord");

  function existWord() {
    if (localStorage.getItem("word")) {
      assembleGame();
    } else {
      alert("Cadastre palavras para jogar");
      inletter.disabled = true;
      btnThrow.disabled = true;
      viewTip.disabled = true;
    }
  }

  existWord();

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
  }
  // Montar jogo se existir palavra  cadastrada

  function play() {
    const outWord = document.querySelector("#outWord");
    const outChance = document.querySelector("#outChance");
    const outError = document.querySelector("#outError");

    let letter = inletter.value.toUpperCase();

    if (letter == "" || letter.length != 1) {
      alert("Informe uma letra");
      inletter.focus();
      return;
    }

    let error = outError.textContent;
    let wordSingle = outWord.textContent;

    if (error.indexOf(letter) >= 0 || wordSingle.indexOf(letter) >= 0) {
      alert("Você ja apostou  esta letra");
      inletter.focus();
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
    inletter.value = "";
    inletter.focus();
  }

  function verifyEnd() {
    const outChance = document.querySelector("#outChance");
    const finalMessage = document.querySelector("#finalMessage");

    let chance = Number(outChance.textContent);

    if (chance == 0) {
      finalMessage.className = "text-danger";
      finalMessage.textContent = `Ah...é ${wordRandom}. Você perdeu`;
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
    inletter.disabled = true;
    btnThrow.disabled = true;
    viewTip.disabled = true;
  }

  if (btnThrow) {
    btnThrow.addEventListener("click", play);
  }
}
