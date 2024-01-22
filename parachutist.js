// This class, extending MovableObject, which represents a parachutist object in the game.

import MovableObject from "./movableObject.js";

class Parachutist extends MovableObject {
    // Constructor for Parachutist, taking initial position, dimensions, and speed
    constructor(airplane, width, height, speed) {
        // Calculate initial position based on the airplane's location
        const initialX = airplane.x + ((airplane.width - width) / 2);
        const initialY = airplane.y + airplane.height;

        // Call the constructor of the parent class (MovableObject) with the calculated position
        super(initialX, initialY, width, height, speed);

        // Flag to track if the parachutist is removed
        this.removed = false;

        // Image object to represent the parachutist
        this.image = new Image();
        this.image.src = "parachutist.png"; 
    }

    // Move method for the parachutist
    move() {
        if (!this.removed) {
            this.y += this.speed;
        }
    }

    // Draw method to render the parachutist on the canvas
    draw(ctx) {
        if (!this.removed) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    // Handle collision method, called when a collision occurs
    handleCollision() {
        this.removed = true;
    }

    // Getter method to check if the parachutist is removed
    getIsRemoved() {
        return this.removed;
    }
}

export default Parachutist;
