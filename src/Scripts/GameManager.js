"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
/**
 * Use this class for main implementation.
 *
 */
class GameManager {
    constructor(i_Scene) {
        this.turns = 6;
        this.score = 0;
    }
    getTurns() {
        return this.turns;
    }
    decreaseTurn() {
        this.turns--;
        this.getTurns();
    }
    getScore() {
        return this.score;
    }
}
exports.GameManager = GameManager;
