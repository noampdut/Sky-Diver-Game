// This class, defines an object in the game 
class GameObject {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx, color) {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // Called in collision manager for checking collisions with boat and sea 
    collidesWith(otherObject) {
        return (
            this.x < otherObject.x + otherObject.width &&
            this.x + this.width > otherObject.x &&
            this.y < otherObject.y + otherObject.height &&
            this.y + this.height > otherObject.y
        );
    }

    handleCollision() {
        // abstarct method to be implemanted in subclasses
    }

   
}

export default GameObject;
