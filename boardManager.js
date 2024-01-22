/*
   BoardManager class is responsible for managing collisions and the player's status.
   It also handles the initialization and updates of player information on the UI.
*/

import CollisionManager from "./collisionManager.js";
import Player from "./player.js";

class BoardManager {

    constructor(numberOfLives) {
        // Create a new Player instance 
        this.player = new Player(numberOfLives);

        // Create a new CollisionManager instance to handle collisions
        this.collisionManager = new CollisionManager();

        // Initialize player information 
        this.updatePlayerInfo();
    }

    // Add an object to the CollisionManager 
    addObjectToCollisionManager(object) {
        this.collisionManager.addObject(object);
    }

    
    // Update player information 
    updatePlayerInfo() {
        // Get the score and lives elements from the HTML
        const scoreElement = document.getElementById("score");
        const livesElement = document.getElementById("lives");

        // Update the current player's score and lives
        scoreElement.textContent = this.player.getScore();
        livesElement.textContent = this.player.getLives();
    }

    // Main update method, checking for collisions and updating player information - called in Main.js 
    update(boat, sea) {
        this.collisionManager.checkCollisions(boat, sea, this);

        // Update player information 
        this.updatePlayerInfo();
    }

    // Getter method 
    getPlayer() {
        return this.player;
    }

    // Display "Game Over" message
    displayGameOver() {
        // Get the "Game Over" element from the HTML
        const gameOverElement = document.getElementById("gameOver");

        // Set the display style to "block" to make it visible
        gameOverElement.style.display = "block";
    }
}

export default BoardManager;
