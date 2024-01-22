/*
   The main runs the game loop.
   It sets up game objects, handles user keyboard input, and manages the overall game flow.
*/

import Sea from "./sea.js";
import Boat from "./boat.js";
import Airplane from "./airplane.js";
import BoardManager from "./boardManager.js";
import GameManager from "./gameManager.js";

let NUMBER_OF_LIVES = 3;
let AIRPLANE_SPEED = 2;
let BOAT_SPEED = 8;

// Execute when the window has loaded
window.onload = function () {
    // Get the canvas and its context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Initialize the canvas size
    initializeCanvas(canvas);

    // Create game managers and objects
    const boardManager = new BoardManager(NUMBER_OF_LIVES);
    const airplane = new Airplane((canvas.width - 60) / 2, canvas.height / 12, 150, 100, AIRPLANE_SPEED);
    const gameManager = new GameManager(airplane, boardManager);

    // Create game objects
    const sea = new Sea(canvas);
    const boat = new Boat(canvas, BOAT_SPEED);

    // Initialize game objects
    drawGameObject(sea, ctx);
    drawGameObject(boat, ctx);
    drawGameObject(airplane, ctx);

    // Handle keyboard input for boat movement
    window.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            boat.moveLeft();
        } else if (event.key === "ArrowRight") {
            boat.moveRight();
        }
    });

    // Main game loop
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Redraw game objects
        drawGameObject(sea, ctx);
        drawGameObject(boat, ctx);
        drawGameObject(airplane, ctx);
        airplane.move(canvas);

        // Move and draw parachutists
        gameManager.updateParachutists(ctx);

        // Check for collisions
        boardManager.update(boat, sea);

        // Check for game over
        if (boardManager.getPlayer().getLives() === 0) {
            boardManager.displayGameOver();
            return; // Stop the game loop
        }

        // Request the next animation frame
        requestAnimationFrame(gameLoop);
    }

    // Start the game loop
    gameLoop();
};

// Image for the background
const backgroundImage = new Image();
backgroundImage.src = 'background.png';

// Function to initialize the canvas size
function initializeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Function to draw a game object
function drawGameObject(gameObj, ctx) {
    gameObj.draw(ctx);
}
