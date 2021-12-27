import message from "./message";

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
      message("Preencha uma palavra sem espaços", "warning");
      inWordInput.focus();
      return;
    }
    if (inTip == "") {
      message("Insira uma dica", "warning");
      inWordInputTip.focus();
      return;
    }

    if (localStorage.getItem("word")) {
      let dataWord = localStorage.getItem("word").split(";");

      if (dataWord.includes(inWord)) {
        message("Essa palavra já existe", "error");
        inWordInput.value = "";
        inWordInput.focus();

        return;
      }

      localStorage.setItem("word", localStorage.getItem("word") + ";" + inWord);
      localStorage.setItem("tip", localStorage.getItem("tip") + ";" + inTip);
      let dataInsertWord = localStorage.getItem("word").split(";");

      //valida a gravação e limpa inputs
      if (dataInsertWord.includes(inWord)) {
        message(
          "Palavra " + "'" + inWord + "'" + " cadastrada com sucesso",
          "success"
        );
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
        message(
          "Palavra " + "'" + inWord + "'" + " cadastrada com sucesso",
          "success"
        );
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
