import MovableObject from "./movableObject.js";

class Airplane extends MovableObject {
    constructor(x, y, width, height, speed) {
        super(x, y, width, height, speed);
        this.image = new Image();
        this.image.src = "plane.png";
    }

    move(canvas) {
        this.x += this.speed;

        // Wrap around to the right when the airplane goes off the left side of the canvas
        if (this.x > canvas.width) {
            this.x = -this.width;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export default Airplane;
