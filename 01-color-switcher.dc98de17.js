const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(t){n=setInterval(o,1e3),a(!0)})),e.addEventListener("click",(function(t){clearInterval(n),a(!1)})),a(!1);let n=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function a(n){t.disabled=n,e.disabled=!n}
//# sourceMappingURL=01-color-switcher.dc98de17.js.map
