(()=>{"use strict";var e={174:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"body{\r\n    font-family: 'Raleway', sans-serif;\r\n    background: linear-gradient(39.97deg, #E8AEFF .29%, #A79CFF 40.29%);\r\n    color: white;\r\n    width: 100vw ;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n.form_container {\r\n    max-width: 440px;\r\n    padding: 40px 20px;\r\n    margin: 70px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.5)\r\n}\r\n\r\n.form_container input {\r\n    margin: 0 0 0 40px;\r\n    padding: 10px;\r\n    border-color: seashell;\r\n}\r\n\r\n.form_container p {\r\n    font-size: 12px;\r\n    padding: 10px 0 20px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.fields{\r\n    width: 340px;\r\n    padding: 14px 5px;\r\n    text-align: center;\r\n    border: 1px solid darkslategray;\r\n}\r\n\r\n\r\n\r\n.correct {\r\n    box-shadow: 0 0 16px rgba(18, 125, 12, 1);\r\n}\r\n\r\n.incorrect{\r\n    box-shadow: 0 0 16px rgba(223, 6, 6, 0.8);\r\n}\r\n\r\n\r\n\r\nh2 {\r\n    margin: 0;\r\n    font-size: 32px;\r\n    padding: 20px 0 0 144px;\r\n}\r\n\r\np{\r\n    margin: 0;\r\n    padding: 20px 0 20px 70px;\r\n}\r\n\r\n\r\n.main_content{\r\n    max-width: 800px;\r\n    margin: 60px auto;\r\n    padding: 40px 0 60px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n}\r\n\r\n.divContainer{\r\n    margin: 0 0 0 40px;\r\n}\r\n\r\n.label{\r\n    display: flex;\r\n    padding: 0 0 12px;\r\n}\r\n\r\n.label input{\r\n    margin: 3px 10px 0 0;\r\n}\r\n\r\n\r\n.inputCheck{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.divRadioContainer{\r\n    margin: 0 0 0 40px;\r\n}\r\n\r\n\r\n\r\n.radioCheck{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n.inputItem{\r\n    margin: 0 0 0 40px;\r\n    padding: 8px;\r\n    box-shadow: 0 0 10px rgba(142, 84, 183, 0.5);\r\n    border-color: seashell;\r\n}\r\n\r\n\r\n.divOptions{\r\n    margin: 0 0 0 40px;\r\n    padding: 8px;\r\n    box-shadow: 0 0 10px rgba(142, 84, 183, 0.5);\r\n    border-color: seashell;\r\n}\r\n\r\n\r\n.button{\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 8px 40px;\r\n    box-shadow: 0 0 10px rgba(142, 84, 183, 0.5);\r\n    border-radius: 5px;\r\n    background-color: linen;\r\n    margin: 50px 0 0 144px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal {\r\n    background: linear-gradient(39.97deg, #E8AEFF .29%, #A79CFF 40.29%);\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100vw ;\r\n    height: 100vh;\r\n    overflow: auto; \r\n    \r\n}\r\n\r\n\r\n.modalContainer {\r\n    margin: 10% auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 45%; \r\n    box-shadow: 0 0 10px rgba(44, 26, 57, 0.9);\r\n\r\n}\r\n\r\n\r\n\r\n.allResult{\r\n    margin: 44px 0 0 0;\r\n    font-size: 32px;\r\n    padding: 20px 0 20px 144px;\r\n    color: rgb(39, 13, 91);\r\n    box-shadow: 0 0 10px rgba(44, 26, 57, 0.9);\r\n}\r\n\r\n",""]);const d=o},759:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"",""]);const d=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],d=0;d<e.length;d++){var s=e[d],l=r.base?s[0]+r.base:s[0],p=i[l]||0,c="".concat(l," ").concat(p);i[l]=p+1;var u=t(c),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:c,updater:h,references:1})}o.push(c)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=t(i[o]);n[d].references--}for(var s=r(e,a),l=0;l<i.length;l++){var p=t(i[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),i=t(569),o=t.n(i),d=t(565),s=t.n(d),l=t(216),p=t.n(l),c=t(589),u=t.n(c),m=t(174),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(759),x={};x.styleTagTransform=u(),x.setAttributes=s(),x.insert=o().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=p(),n()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;const v=document.createElement("div");function g(e){const n=document.createElement("div");return n.classList=e,n}v.style.display="none",v.classList="main_content",document.body.prepend(v);let y=v.appendChild(g("input")),C=v.appendChild(g("inputRadio")),b=v.appendChild(g("divInputType")),L=v.appendChild(g("inputSelect"));function E(e){const n=document.createElement("h2");return n.innerHTML=e,n}function w(e){const n=document.createElement("p");return n.innerHTML=e,n}function T(e,n,t){const r=document.createElement("form");return r.classList=e,r.id=n,r.name=t,r}y.appendChild(E("First question")),C.appendChild(E("Second question")),b.appendChild(E("Third question")),L.appendChild(E("Fourth question")),y.appendChild(w("Выберите наиболее подходящий ответ! “What does your husband do?")),C.appendChild(w("Yesterday I ................. a bird.")),b.appendChild(w("Переведите слово `близнецы` на английский")),L.appendChild(w("................ that weird man sitting over there?"));let I=y.appendChild(T("divContainer","divContainer","divContainer")),M=C.appendChild(T("divRadioContainer","radioCont","radioCont")),H=b.appendChild(T("divInputTypeContainer","divInputTypeContainer","divInputTypeCont")),S=document.createElement("select");function k(e){const n=document.createElement("input");return n.type="checkbox",n.classList="inputCheck",n.name="checkbox",n.id=e,n}function F(e){const n=document.createElement("label");return n.classList="label",n.textContent=e,n}S.classList="divOptions",S.id="select",L.appendChild(S);let N=I.appendChild(F("He is feeding the dog.")),_=I.appendChild(F("He is a doctor.")),A=I.appendChild(F("Yes, he does.")),R=I.appendChild(F("Yes, he is."));function Y(e){const n=document.createElement("input");return n.type="radio",n.classList="radioCheck",n.id=e,n}N.prepend(k("input1")),_.prepend(k("input2")),A.prepend(k("input3")),R.prepend(k("input4"));let Z=M.appendChild(F("saw")),q=M.appendChild(F("sawed")),Q=M.appendChild(F("see")),O=M.appendChild(F("seed"));Z.prepend(Y("radio1")),q.prepend(Y("radio2")),Q.prepend(Y("radio3")),O.prepend(Y("radio4"));const U=document.createElement("input");function W(e,n){const t=document.createElement("option");return t.classList="option",t.value=e,t.innerHTML=n,t}U.classList="inputItem",U.name="inputItem",U.id="inputItem",U.placeholder="translate word",H.appendChild(U),S.appendChild(W("option1","Which")),S.appendChild(W("option2","Whose")),S.appendChild(W("option3","Who's")),S.appendChild(W("option4","Who"));const P=document.createElement("button");P.innerHTML="THE END",P.classList="button",v.append(P);const j=document.createElement("div");j.classList="modal",v.after(j);const z=document.createElement("div");z.classList="modalContainer",j.appendChild(z);const B=document.createElement("h2");B.innerHTML="RESULTS",B.classList="textRes",z.appendChild(B);let D=z.appendChild(w(""));D.id="result",D.appendChild(w("")).id="result1",D.appendChild(w("")).id="result1",D.appendChild(w("")).id="result1",D.appendChild(w("")).id="result1",P.addEventListener("click",(e=>{e.preventDefault(),v.style.display="none",j.style.display="block";let n,t,r,a,i,o=document.getElementById("input2").checked,d=document.getElementById("radioCont").value,s=document.forms.divInputTypeCont.inputItem.value,l=document.getElementById("select").value;if(o){n=2;let e=document.createElement("p");e.id="result1",e.innerHTML="First Question : Your answer to question 2 is correct.",z.append(e)}else{n=0;let e=document.createElement("p");e.id="result1",e.innerHTML="First Question : The correct answer to question 2",z.append(e)}if("radio1"==d){t=0;let e=document.createElement("p");e.id="result2",e.innerHTML="Second Question : Your answer to question 1 is correct.",z.append(e)}else{t=0;let e=document.createElement("p");e.id="result2",e.innerHTML="Second Question : The correct answer to question 1",z.append(e)}if("twins"==s){r=3;let e=document.createElement("p");e.id="result3",e.innerHTML="Third Question : Your answer is correct.",z.append(e)}else{r=0;let e=document.createElement("p");e.id="result3",e.innerHTML="Third Question : Your answer is incorrect. Right answer is twins",z.append(e)}if("option3"==l){a=3;let e=document.createElement("p");e.id="result3",e.innerHTML="Fourth Question : Your answer is correct. ",z.append(e)}else{a=0;let e=document.createElement("p");e.id="result3",e.innerHTML="Fourth Question : Your answer is incorrect. Right answer is WHO'S",z.append(e)}i=n+t+r+a;let p=document.getElementById("result");p.innerHTML="Your result is "+i+" out of 10",p.classList="allResult",z.appendChild(p)}));const $=document.createElement("form");$.classList.add("form_container"),$.setAttribute("active","#"),$.style.display="block",$.name="formName",$.id="form";const J=document.createElement("h1");J.classList.add("form__title"),J.innerHTML="Авторизация пользователя";const G=document.createElement("input");G.classList.add("input__nameUser"),G.classList.add("fields"),G.type="text",G.placeholder="имя",G.name="firstUserName",G.pattern="^[А-Яа-яЁёs]+$",G.id="first";const K=document.createElement("p");K.classList.add("textName"),K.innerHTML="Вам необходимо ввести Ваше имя на русском языке",K.style.display="block";const V=document.createElement("input");V.classList.add("input_surnameUser"),V.classList.add("fields"),V.type="text",V.placeholder="фамилия",V.name="surnameName",V.pattern="^[А-Яа-яЁёs]+$",V.id="second";const X=document.createElement("p");X.classList.add("textSurname"),X.innerHTML="Вам необходимо ввести Вашe фамилию на русском языке",X.style.display="block";const ee=document.createElement("input");ee.classList.add("input__age"),ee.classList.add("fields"),ee.type="text",ee.placeholder="возраст",ee.name="ageName",ee.pattern="^[ 0-9]+$",ee.id="third";const ne=document.createElement("p");ne.classList.add("textAge"),ne.innerHTML="Вам необходимо ввести Ваш возраст в числовом формате",ne.style.display="block";const te=document.createElement("button");te.classList.add("button"),te.innerHTML="продолжить",te.type="submit",document.body.prepend($),$.appendChild(J),$.appendChild(G),$.appendChild(K),$.appendChild(V),$.appendChild(X),$.appendChild(ee),$.appendChild(ne),$.appendChild(te),$.addEventListener("submit",(e=>{e.preventDefault();let n=!0,t=document.forms.formName.firstUserName.value;""==t||null==t?(G.classList.add("incorrect"),n=!1):G.classList.add("correct");let r=document.forms.formName.surnameName.value;""==r||null==r?(V.classList.add("incorrect"),n=!1):V.classList.add("correct");let a=document.forms.formName.ageName.value;""==a||null==a?(ee.classList.add("incorrect"),n=!1):ee.classList.add("correct"),!0===n&&($.style.display="none",v.style.display="block")})),window.onload=()=>{G.value=localStorage.getItem("first"),V.value=localStorage.getItem("second"),ee.value=localStorage.getItem("third")},te.addEventListener("click",(()=>{localStorage.setItem("first",G.value),localStorage.setItem("second",V.value),localStorage.setItem("third",ee.value)}))})()})();