import GameObject from "./gameObject.js";

class Sea extends GameObject {
    constructor(canvas) {
        super(0, canvas.height-60, canvas.width,80);
        this.image = new Image();
        this.image.src = "sea.png";
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    // Handle collision with the sea and the parachutist  
    handleCollision(player) {
        player.loseLife();
    }
}

export default Sea;
