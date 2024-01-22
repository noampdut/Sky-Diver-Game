
// This  class, extending GameObject, which represents a movable object in the game.

import GameObject from "./gameObject.js";

class MovableObject extends GameObject {
    // Constructor for MovableObject, taking initial position, dimensions, and speed
    constructor(x, y, width, height, speed) {
        // Call the constructor of the parent class (GameObject) with the provided parameters
        super(x, y, width, height);

        // Set the speed of the movable object
        this.speed = speed;
    }

    // Abstract method (to be implemented by subclasses)
    moveLeft() { }

    // Abstract method (to be implemented by subclasses)
    moveRight() {}
    

    // Abstract method (to be implemented by subclasses)
    move() {}
}

export default MovableObject;
