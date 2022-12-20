
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
}

refs.btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        let randomHexColor = getRandomHexColor();
        document.body.style.backgroundColor = randomHexColor;
    }, 1000);
    refs.btnStart.disabled = true;
});


refs.btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    refs.btnStart.disabled = false;

})