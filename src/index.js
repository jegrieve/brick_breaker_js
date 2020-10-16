import Game from "/src/game.js";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let lastTime = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameLoop(timestamp) { //runs every frame
    let deltaTime = timestamp - lastTime;//calculate how much time has passed
    lastTime = timestamp;


    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);//clears screen

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);//calls gameloop again with next frames timestamp.
}

requestAnimationFrame(gameLoop);