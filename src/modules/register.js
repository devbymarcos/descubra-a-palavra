export default function initRegister() {
  const inWordInput = document.querySelector("#inword");
  const inWordInputTip = document.querySelector("#inword-dica");
  const btnRegister = document.querySelector("#btn-register");

  function register(e) {
    e.preventDefault();
    const inWord = inWordInput.value;
    const inTip = inWordInputTip.value;

    console.log(inWord.indexOf(" "));
    if (inWord == "" || inWord.indexOf(" ") >= 0) {
      alert("Preencha uma palavra sem espaços");
      inWordInput.focus();
      return;
    }
    if (inTip == "") {
      alert("Insira uma dica");
      inWordInputTip.focus();
      return;
    }

    if (localStorage.getItem("word")) {
      let dataWord = localStorage.getItem("word").split(";");

      if (dataWord.includes(inWord)) {
        alert("Essa palavra já existe");
        inWordInput.value = "";
        inWordInput.focus();

        return;
      }

      localStorage.setItem("word", localStorage.getItem("word") + ";" + inWord);
      localStorage.setItem("tip", localStorage.getItem("tip") + ";" + inTip);
      let dataInsertWord = localStorage.getItem("word").split(";");

      //valida a gravação e limpa inputs
      if (dataInsertWord.includes(inWord)) {
        alert("Palavra " + inWord + " cadastrada com sucesso");
        inWordInput.value = "";
        inWordInputTip.value = "";
        inWordInput.focus();
      }
    } else {
      localStorage.setItem("word", inWord);
      localStorage.setItem("tip", inTip);
      let insertWord = localStorage.getItem("word").split(";");

      //valida a gravação e limpa inputs
      if (insertWord.includes(inWord)) {
        alert("Palavra " + inWord + " cadastrada com sucesso");
        inWordInput.value = "";
        inWordInputTip.value = "";
        inWordInput.focus();
      }
    }
  }
  if (btnRegister) {
    btnRegister.addEventListener("click", register);
  }
}
