(()=>{"use strict";function e(e){var t=document.querySelector(".status");switch(e){case 3:case 2:case 1:t.innerHTML='<i class="fas fa-sad-tear"></i>',setTimeout((function(){t.innerHTML='<i class="fas fa-smile-beam"></i>'}),2e3);break;case 0:t.innerHTML='<i class="fas fa-sad-cry"></i>';break;case 6:t.innerHTML='<i class="fas fa-laugh-beam"></i>'}}var t,a,o,r,n=window.location.pathname.split(".");"/cadastro"===n[0]?(a=document.querySelector("#inword"),o=document.querySelector("#inword-dica"),(r=document.querySelector("#btn-register"))&&r.addEventListener("click",(function(e){e.preventDefault();var t=a.value,r=o.value;if(console.log(t.indexOf(" ")),""==t||t.indexOf(" ")>=0)return alert("Preencha uma palavra sem espaços"),void a.focus();if(""==r)return alert("Insira uma dica"),void o.focus();if(localStorage.getItem("word")){if(localStorage.getItem("word").split(";").includes(t))return alert("Essa palavra já existe"),a.value="",void a.focus();localStorage.setItem("word",localStorage.getItem("word")+";"+t),localStorage.setItem("tip",localStorage.getItem("tip")+";"+r),localStorage.getItem("word").split(";").includes(t)&&(alert("Palavra "+t+" cadastrada com sucesso"),a.value="",o.value="",a.focus())}else localStorage.setItem("word",t),localStorage.setItem("tip",r),localStorage.getItem("word").split(";").includes(t)&&(alert("Palavra "+t+" cadastrada com sucesso"),a.value="",o.value="",a.focus())}))):"/listagem"===n[0]?(function(){var e=document.querySelector("#list-word");if(document.querySelector("input[type=checkbox]"),e&&""!=localStorage.getItem("word")){var t,a,o,r,n,l;localStorage.getItem("word")&&(t=localStorage.getItem("word").split(";"),a=localStorage.getItem("tip").split(";"));for(var c=0;c<t.length;c++)r=(o=e.insertRow(-1)).insertCell(0),n=o.insertCell(1),l=o.insertCell(2),r.textContent=t[c],n.textContent=a[c],l.innerHTML='<input type="checkbox" value="'.concat(t[c],'">')}}(),(t=document.querySelector("#btn-remove"))&&t.addEventListener("click",(function(){var e,t=document.querySelectorAll("input:checked"),a=localStorage.getItem("word").split(";"),o=localStorage.getItem("tip").split(";");confirm("deseja excluir os item(s)")&&t.forEach((function(t){e=a.indexOf(t.value),a.splice(e,1),o.splice(e,1),console.log(e)}));var r=a.join(";"),n=o.join(";");localStorage.setItem("word",r),localStorage.setItem("tip",n),window.location.reload()}))):"/game"===n[0]&&function(){var t,a="",o=document.querySelector("#viewTip"),r=document.querySelector("#outWord");function n(){var a=document.querySelector("#outChance"),o=document.querySelector("#finalMessage");0==Number(a.textContent)?(o.className="text-danger",o.textContent="Ah...é ".concat(t,". Você perdeu"),l()):r.textContent==t&&(o.className="text-success",o.textContent="Parabéns !!  você ganhou",e(6),l())}function l(){document.querySelector("#outTip").textContent="* Clique no botão 'jogar' que esta no menu para jogar novamente",a.forEach((function(e){e.style.display="none"})),o.disabled=!0}function c(a){var o=a.target,r=document.querySelector("#outWord"),l=document.querySelector("#outChance"),c=document.querySelector("#outError"),i=o.textContent.toUpperCase();if(""!=i&&1==i.length){var s=c.textContent,u=r.textContent;if((s.indexOf(i)>=0||u.indexOf(i)>=0)&&alert("Você ja apostou  esta letra"),t.indexOf(i)>=0){for(var d="",m=0;m<t.length;m++)t.charAt(m)==i?d+=i:d+=u.charAt(m);r.textContent=d}else{s+=i,c.textContent=s;var g=Number(l.textContent)-1;l.textContent=g,e(g)}n()}else alert("Informe uma letra")}localStorage.getItem("word")?function(){var e=localStorage.getItem("word").split(";"),o=localStorage.getItem("tip").split(";"),n=e.length,l=Math.floor(Math.random()*n);t=e[l].toUpperCase(),o[l];for(var c,i="",s=0;s<t.length;s++)t.charAt(0)==t.charAt(s)?i+=t.charAt(0):i+="_",r.textContent=i;c=document.querySelector("#keyboard"),["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","X","Z"].forEach((function(e){var t=document.createElement("p");t.classList.add("keyChar"),t.textContent=e,c.appendChild(t)})),a=document.querySelectorAll(".keyChar")}():(alert("Cadastre palavras para jogar"),o.disabled=!0),a.forEach((function(e){e.addEventListener("click",c)}))}()})();