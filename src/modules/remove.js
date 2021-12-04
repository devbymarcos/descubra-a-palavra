export default function Remove() {
  const btnRemove = document.querySelector("#btn-remove");

  function remove() {
    const dataSel = document.querySelectorAll("input:checked");
    let wordGet = localStorage.getItem("word").split(";");
    let tipGet = localStorage.getItem("tip").split(";");
    let indice;
    if (confirm("deseja excluir os item(s)")) {
      dataSel.forEach((item) => {
        indice = wordGet.indexOf(item.value);
        wordGet.splice(indice, 1);
        tipGet.splice(indice, 1);
        console.log(indice);
      });
    }
    let inWord = wordGet.join(";");
    let inTip = tipGet.join(";");

    localStorage.setItem("word", inWord);
    localStorage.setItem("tip", inTip);
    window.location.reload();
  }

  if (btnRemove) {
    btnRemove.addEventListener("click", remove);
  }
}
