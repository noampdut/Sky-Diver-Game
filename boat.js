import MovableObject from "./movableObject.js";

class Boat extends MovableObject {
    constructor(canvas,speed) {
        const boatWidth = 200;
        const boatHeight = 100;

        // Initialize the boat at the center of the canvas
        const initialX = (canvas.width - boatWidth) / 2;
        const initialY = canvas.height - boatHeight - 40;

        super(initialX, initialY, boatWidth, boatHeight,speed);
        this.image = new Image();
        this.image.src = "boat.png";
        
    }

     // Move the boat to the left
    moveLeft() {
        this.x -= this.speed;
        
        // Ensure the boat stays within the canvas boundaries
        if (this.x < 0) {
            this.x = 0;
        }
    }

    // Move the boat to the right
    moveRight() {
        this.x += this.speed;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    // Handle collision of the boat with parachutist
    handleCollision(player) {
        const points = 10;
        player.gainScore(points)
    }
}

export default Boat;