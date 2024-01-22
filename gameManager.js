/*
   GameManager is responsible for managing the game's logic and controls the generation
   and movement of Parachutists. It interacts with the boardManager.
*/

import Parachutist from "./parachutist.js";

class GameManager {

    constructor(airplane, boardManager) {
        this.airplane = airplane;
        this.boardManager = boardManager;
        this.parachutists = [];
        this.initParachutistGeneration();
    }

    // Generate a new parachutist every 4 seconds
    initParachutistGeneration() {
        setInterval(() => {
            // Generate a new Parachutist and add it to the game
            const newParachutist = new Parachutist(this.airplane, 60, 60, 2);
            this.parachutists.push(newParachutist);
            this.boardManager.addObjectToCollisionManager(newParachutist);
        }, 4000); 
    }

    // Update the movement and drawing of Parachutists
    updateParachutists(ctx) {
        this.parachutists.forEach((parachutist) => {
            parachutist.move();
            parachutist.draw(ctx);

            // Remove Parachutist if flaged as removed
            if (parachutist.getIsRemoved()) {
                this.removeParachutist(parachutist);
            }
        });
    }

    // Remove a Parachutist from the list
    removeParachutist(parachutist) {
        const index = this.parachutists.indexOf(parachutist);
        if (index !== -1) {
            this.parachutists.splice(index, 1);
        }
    }
}

export default GameManager;
