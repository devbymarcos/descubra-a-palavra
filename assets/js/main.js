/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/register.js */ \"./src/modules/register.js\");\n/* harmony import */ var _modules_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list.js */ \"./src/modules/list.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/remove.js */ \"./src/modules/remove.js\");\n/* harmony import */ var _modules_playGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/playGame.js */ \"./src/modules/playGame.js\");\n\n\n\n\nvar url = window.location.pathname;\nvar urlArray = url.split(\".\");\n\nif (urlArray[0] === \"/cadastro\") {\n  (0,_modules_register_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n} else if (urlArray[0] === \"/listagem\") {\n  (0,_modules_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n} else if (urlArray[0] === \"/game\") {\n  (0,_modules_playGame_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/index.js?");

/***/ }),

/***/ "./src/modules/changeStatus.js":
/*!*************************************!*\
  !*** ./src/modules/changeStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeStatus)\n/* harmony export */ });\nfunction changeStatus(number) {\n  var status = document.querySelector(\".status\");\n\n  switch (number) {\n    case 3:\n      status.innerHTML = \"<i class=\\\"fas fa-sad-tear\\\"></i>\";\n      setTimeout(function () {\n        status.innerHTML = \"<i class=\\\"fas fa-smile-beam\\\"></i>\";\n      }, 2000);\n      break;\n\n    case 2:\n      status.innerHTML = \"<i class=\\\"fas fa-sad-tear\\\"></i>\";\n      setTimeout(function () {\n        status.innerHTML = \"<i class=\\\"fas fa-smile-beam\\\"></i>\";\n      }, 2000);\n      break;\n\n    case 1:\n      status.innerHTML = \"<i class=\\\"fas fa-sad-tear\\\"></i>\";\n      setTimeout(function () {\n        status.innerHTML = \"<i class=\\\"fas fa-smile-beam\\\"></i>\";\n      }, 2000);\n      break;\n\n    case 0:\n      status.innerHTML = \"<i class=\\\"fas fa-sad-cry\\\"></i>\";\n      break;\n\n    case 6:\n      status.innerHTML = \"<i class=\\\"fas fa-laugh-beam\\\"></i>\";\n      break;\n\n    case 7:\n      status.innerHTML = \"<i class=\\\"fas fa-sad-cry\\\"></i>\";\n      break;\n\n    case 8:\n      status.innerHTML = \"<i class=\\\"fas fa-grin-tongue-wink\\\"></i>\";\n      setTimeout(function () {\n        status.innerHTML = \"<i class=\\\"fas fa-smile-beam\\\"></i>\";\n      }, 3000);\n      break;\n  }\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/modules/changeStatus.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initList)\n/* harmony export */ });\nfunction initList() {\n  var table = document.querySelector(\"#list-word\");\n  var inputCheckbox = document.querySelector(\"input[type=checkbox]\");\n\n  if (table && localStorage.getItem(\"word\") != \"\") {\n    var WordGet, TipGet;\n\n    if (localStorage.getItem(\"word\")) {\n      WordGet = localStorage.getItem(\"word\").split(\";\");\n      TipGet = localStorage.getItem(\"tip\").split(\";\");\n    }\n\n    var row, col1, col2, col3;\n\n    for (var i = 0; i < WordGet.length; i++) {\n      row = table.insertRow(-1);\n      col1 = row.insertCell(0);\n      col2 = row.insertCell(1);\n      col3 = row.insertCell(2);\n      col1.textContent = WordGet[i];\n      col2.textContent = TipGet[i];\n      col3.innerHTML = \"<input type=\\\"checkbox\\\" value=\\\"\".concat(WordGet[i], \"\\\">\");\n    }\n  }\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/message.js":
/*!********************************!*\
  !*** ./src/modules/message.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ message)\n/* harmony export */ });\nfunction message(msg, type) {\n  var divMessage = document.querySelector(\".alert\");\n  var message = document.createElement(\"div\");\n  message.classList.add(\"messageView\", type);\n  message.innerText = msg;\n  divMessage.appendChild(message);\n  setTimeout(function () {\n    message.style.display = \"none\";\n  }, 3000);\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/modules/message.js?");

/***/ }),

/***/ "./src/modules/playGame.js":
/*!*********************************!*\
  !*** ./src/modules/playGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playGame)\n/* harmony export */ });\n/* harmony import */ var _changeStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeStatus */ \"./src/modules/changeStatus.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ \"./src/modules/message.js\");\n\n\nfunction playGame() {\n  var wordRandom;\n  var tipRandom = \"\";\n  var inletter = \"\";\n  var viewTip = document.querySelector(\"#viewTip\");\n  var outWord = document.querySelector(\"#outWord\");\n\n  function assembleGame() {\n    var words = localStorage.getItem(\"word\").split(\";\");\n    var tip = localStorage.getItem(\"tip\").split(\";\");\n    var size = words.length;\n    var randomNumber = Math.floor(Math.random() * size);\n    wordRandom = words[randomNumber].toUpperCase();\n    tipRandom = tip[randomNumber];\n    var newWord = \"\";\n\n    for (var i = 0; i < wordRandom.length; i++) {\n      if (wordRandom.charAt(0) == wordRandom.charAt(i)) {\n        newWord += wordRandom.charAt(0);\n      } else {\n        newWord += \"_\";\n      }\n\n      outWord.textContent = newWord;\n    } //monta o tecladop com as letras\n\n\n    wordKeys();\n    inletter = document.querySelectorAll(\".keyChar\");\n  }\n\n  function verifyEnd() {\n    var outChance = document.querySelector(\"#outChance\");\n    var finalMessage = document.querySelector(\"#finalMessage\");\n    var chance = Number(outChance.textContent);\n\n    if (chance == 0) {\n      finalMessage.className = \"text-danger\";\n      finalMessage.textContent = \"Ah...\\xE9 \".concat(wordRandom, \". Voc\\xEA perdeu\");\n      (0,_changeStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(7);\n      endGame();\n    } else if (outWord.textContent == wordRandom) {\n      finalMessage.className = \"text-success\";\n      finalMessage.textContent = \"Parab\\xE9ns !!  voc\\xEA ganhou\";\n      (0,_changeStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(6);\n      endGame();\n    }\n  }\n\n  function endGame() {\n    var outTip = document.querySelector(\"#outTip\");\n    outTip.textContent = \"* Clique no bot\\xE3o 'jogar' que esta no menu para jogar novamente\";\n    inletter.forEach(function (item) {\n      item.style.display = \"none\";\n    });\n    viewTip.disabled = true;\n  }\n\n  function wordKeys() {\n    var place = document.querySelector(\"#keyboard\");\n    var _char = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\", \"V\", \"X\", \"Z\"];\n\n    _char.forEach(function (item) {\n      var html = document.createElement(\"p\");\n      html.classList.add(\"keyChar\");\n      html.textContent = item;\n      place.appendChild(html);\n    });\n  }\n\n  function existWord() {\n    if (localStorage.getItem(\"word\")) {\n      assembleGame();\n    } else {\n      (0,_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Cadastre palavras para jogar\", \"error\");\n      viewTip.disabled = true;\n    }\n  }\n\n  existWord();\n\n  function play(_ref) {\n    var target = _ref.target;\n    var outWord = document.querySelector(\"#outWord\");\n    var outChance = document.querySelector(\"#outChance\");\n    var outError = document.querySelector(\"#outError\"); //pega a letra clicada\n\n    var letter = target.textContent.toUpperCase();\n\n    if (letter == \"\" || letter.length != 1) {\n      (0,_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Informe uma letra\", \"warning\");\n      return;\n    }\n\n    var error = outError.textContent;\n    var wordSingle = outWord.textContent;\n\n    if (error.indexOf(letter) >= 0 || wordSingle.indexOf(letter) >= 0) {\n      (0,_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Você ja apostou  esta letra\", \"error\");\n    }\n\n    if (wordRandom.indexOf(letter) >= 0) {\n      var newWord = \"\";\n\n      for (var i = 0; i < wordRandom.length; i++) {\n        if (wordRandom.charAt(i) == letter) {\n          newWord += letter;\n        } else {\n          newWord += wordSingle.charAt(i);\n        }\n      }\n\n      outWord.textContent = newWord;\n    } else {\n      error += letter;\n      outError.textContent = error;\n      var chance = Number(outChance.textContent) - 1;\n      outChance.textContent = chance;\n      (0,_changeStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(chance);\n    }\n\n    verifyEnd();\n  }\n\n  inletter.forEach(function (item) {\n    item.addEventListener(\"click\", play);\n  });\n\n  function showTip() {\n    var outChance = document.querySelector(\"#outChance\");\n    var outError = document.querySelector(\"#outError\");\n    var outTip = document.querySelector(\"#outTip\");\n    var error = outError.textContent;\n\n    if (error.indexOf(\"*\") >= 0) {\n      (0,_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"você ja solicitou a dica\", \"error\");\n      return;\n    }\n\n    outTip.textContent = \" * \" + tipRandom;\n    outError.textContent = error + \" * \";\n    var chance = Number(outChance.textContent) - 1;\n    outChance.textContent = chance;\n    (0,_changeStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(8);\n    verifyEnd();\n  }\n\n  viewTip.addEventListener(\"click\", showTip);\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/modules/playGame.js?");

/***/ }),

/***/ "./src/modules/register.js":
/*!*********************************!*\
  !*** ./src/modules/register.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initRegister)\n/* harmony export */ });\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ \"./src/modules/message.js\");\n\nfunction initRegister() {\n  var inWordInput = document.querySelector(\"#inword\");\n  var inWordInputTip = document.querySelector(\"#inword-dica\");\n  var btnRegister = document.querySelector(\"#btn-register\");\n\n  function register(e) {\n    e.preventDefault();\n    var inWord = inWordInput.value;\n    var inTip = inWordInputTip.value;\n    console.log(inWord.indexOf(\" \"));\n\n    if (inWord == \"\" || inWord.indexOf(\" \") >= 0) {\n      (0,_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Preencha uma palavra sem espaços\", \"warning\");\n      inWordInput.focus();\n      return;\n    }\n\n    if (inTip == \"\") {\n      (0,_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Insira uma dica\", \"warning\");\n      inWordInputTip.focus();\n      return;\n    }\n\n    if (localStorage.getItem(\"word\")) {\n      var dataWord = localStorage.getItem(\"word\").split(\";\");\n\n      if (dataWord.includes(inWord)) {\n        (0,_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Essa palavra já existe\", \"error\");\n        inWordInput.value = \"\";\n        inWordInput.focus();\n        return;\n      }\n\n      localStorage.setItem(\"word\", localStorage.getItem(\"word\") + \";\" + inWord);\n      localStorage.setItem(\"tip\", localStorage.getItem(\"tip\") + \";\" + inTip);\n      var dataInsertWord = localStorage.getItem(\"word\").split(\";\"); //valida a gravação e limpa inputs\n\n      if (dataInsertWord.includes(inWord)) {\n        (0,_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Palavra \" + \"'\" + inWord + \"'\" + \" cadastrada com sucesso\", \"success\");\n        inWordInput.value = \"\";\n        inWordInputTip.value = \"\";\n        inWordInput.focus();\n      }\n    } else {\n      localStorage.setItem(\"word\", inWord);\n      localStorage.setItem(\"tip\", inTip);\n      var insertWord = localStorage.getItem(\"word\").split(\";\"); //valida a gravação e limpa inputs\n\n      if (insertWord.includes(inWord)) {\n        (0,_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Palavra \" + \"'\" + inWord + \"'\" + \" cadastrada com sucesso\", \"success\");\n        inWordInput.value = \"\";\n        inWordInputTip.value = \"\";\n        inWordInput.focus();\n      }\n    }\n  }\n\n  if (btnRegister) {\n    btnRegister.addEventListener(\"click\", register);\n  }\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/modules/register.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Remove)\n/* harmony export */ });\nfunction Remove() {\n  var btnRemove = document.querySelector(\"#btn-remove\");\n\n  function remove() {\n    var dataSel = document.querySelectorAll(\"input:checked\");\n    var wordGet = localStorage.getItem(\"word\").split(\";\");\n    var tipGet = localStorage.getItem(\"tip\").split(\";\");\n    var indice;\n\n    if (confirm(\"deseja excluir os item(s)\")) {\n      dataSel.forEach(function (item) {\n        indice = wordGet.indexOf(item.value);\n        wordGet.splice(indice, 1);\n        tipGet.splice(indice, 1);\n        console.log(indice);\n      });\n    }\n\n    var inWord = wordGet.join(\";\");\n    var inTip = tipGet.join(\";\");\n    localStorage.setItem(\"word\", inWord);\n    localStorage.setItem(\"tip\", inTip);\n    window.location.reload();\n  }\n\n  if (btnRemove) {\n    btnRemove.addEventListener(\"click\", remove);\n  }\n}\n\n//# sourceURL=webpack://adivinha-palavra/./src/modules/remove.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;