export default function initList() {
  const table = document.querySelector("#list-word");
  if (table) {
    let WordGet, TipGet;
    if (localStorage.getItem("word")) {
      WordGet = localStorage.getItem("word").split(";");
      TipGet = localStorage.getItem("tip").split(";");
      }

    let row, col1, col2, col3;

    for (let i = 0; i < WordGet.length; i++) {
      row = table.insertRow(-1);

      col1 = row.insertCell(0);
      col2 = row.insertCell(1);
      col3 = row.insertCell(2);

      col1.textContent = WordGet[i];
      col2.textContent = TipGet[i];
      col3.innerHTML = `<input type="checkbox" value="${WordGet[i]}">`;
    }
  }
}
