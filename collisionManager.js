/*
   CollisionManager is responsible for managing collisions between game objects.
   It keeps track of Parachutists in the game and checks for collisions with the Boat and Sea.
*/

class CollisionManager {
    // Constructor for CollisionManager, initializing the list of Parachutists
    constructor() {
        this.objects = [];
    }

    // Add a Parachutist to the list
    addObject(object) {
        this.objects.push(object);
    }

    // Remove a Parachutist from the list
    removeObject(object) {
        const index = this.objects.indexOf(object);
        if (index !== -1) {
            this.objects.splice(index, 1);
        }
    }

    // Check for collisions with the Boat and Sea
    checkCollisions(boat, sea, boardManager) {
        const player = boardManager.player;
        for (let i = 0; i < this.objects.length; i++) {
            // Handle collision with the boat
            if (this.objects[i].collidesWith(boat)) {
                boat.handleCollision(player);
                this.objects[i].handleCollision();
                this.removeObject(this.objects[i]);
                continue;
            }

            // Handle collision with the sea
            if (this.objects[i].collidesWith(sea)) {
                sea.handleCollision(player);
                this.objects[i].handleCollision();
                this.removeObject(this.objects[i]);
            }
        }
    }
}

export default CollisionManager;
