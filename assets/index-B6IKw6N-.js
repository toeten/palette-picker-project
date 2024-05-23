(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(o){if(o.ep)return;o.ep=!0;const e=c(o);fetch(o.href,e)}})();const s=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy",colors:["#c92929","#2f5a8b","#327a5f"],temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern",colors:["#3A5199","#2F2E33","#D5D6D2"],temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds",colors:["#A10115","#C0B2B5","#600A0A"],temperature:"warm"}],i=(r,t)=>{localStorage.setItem(r,JSON.stringify(t))},u=r=>{try{return JSON.parse(localStorage.getItem(r))}catch(t){return console.error(t),null}};u("palettes")||i("palettes");console.log("hello from main.js");const a=r=>{const t=document.querySelector("#saved-palettes"),c=document.createElement("li");c.innerHTML=`
    <h3>${r.title}</h3>
    <div class="color-boxes">
      ${r.colors.map(e=>`
        <div class="color-box" style="background-color: ${e};">
          <p class="text-color" data-text="Example Text">Example Text</p>
        </div>
        <div class="copy-container">
            <button class="copy-button" data-color="${e}">Copy ${e}</button>
          </div>
      `).join("")}
    </div>
    <button class="delete-button">Delete Palette</button>
    <footer class="temperature ${r.temperature}">${r.temperature}</footer>
  `,t.appendChild(c),c.querySelectorAll(".copy-button").forEach(e=>{e.addEventListener("click",()=>{const l=e.getAttribute("data-color");navigator.clipboard.writeText(l).then(()=>{e.textContent="Copied hex!",setTimeout(()=>{e.textContent=`Copy ${l}`},1e3)})})}),c.querySelector(".delete-button").addEventListener("click",()=>{c.remove()})},d=()=>{s.forEach(a)},p=r=>{r.preventDefault();const t=r.target,c={title:t.paletteName.value,colors:[t.colorInput1.value,t.colorInput2.value,t.colorInput3.value],temperature:t.querySelector('input[name="paletteTemp"]:checked').value};a(c),t.reset()},f=()=>{d(),document.querySelector("form").addEventListener("submit",p)};f();
