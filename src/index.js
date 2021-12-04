import initRegister from "./modules/register.js";
import initList from "./modules/list.js";
import initRemove from "./modules/remove.js";
import initPlayGame from "./modules/playGame.js";

let url = window.location.pathname;
let urlArray = url.split(".");

if (urlArray[0] === "/cadastro") {
  initRegister();
} else if (urlArray[0] === "/listagem") {
  initList();
  initRemove();
} else if (urlArray[0] === "/game") {
  initPlayGame();
}
