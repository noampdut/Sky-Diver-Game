// This class, representing the player's status including lives and score.

class Player {

    constructor(lives) {
        // Initialize the player's lives 
        this.lives = lives;

        // Initialize the player's score to 0
        this.score = 0;
    }

    // Method for reducing a life 
    loseLife() {
        this.lives--;
    }

    // Method for increasing the score 
    gainScore(points) {
        this.score += points;
    }

    // Getter method to retrieve the current number of lives
    getLives() {
        return this.lives;
    }

    // Getter method to retrieve the current score
    getScore() {
        return this.score;
    }
}

export default Player;
