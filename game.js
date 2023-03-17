const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75
    } else {
        canvasSize = window.innerHeight * 0.75
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = ( canvasSize / 10) - 2;

    game.font = (elementsSize + 'px Verdana');
    game.textAlign = '';

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }

    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,100,50);
}