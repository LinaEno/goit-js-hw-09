!function(){var t=null,n={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};n.btnStart.addEventListener("click",(function(){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3),n.btnStart.disabled=!0})),n.btnStop.addEventListener("click",(function(){clearInterval(t),n.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d6965422.js.map