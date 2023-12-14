import { isContext } from "vm";
import MainScene from "../Scenes/MainScene";

/**
 * Use this class for main implementation.
 *
 */
export class GameManager {
  public turns: number = 6;
  public score: number = 0;

  constructor(i_Scene: MainScene) {}

  public getTurns(): number {
    return this.turns;
  }
  public decreaseTurn():void{
    this.turns--;
    this.getTurns();
  }
  public getScore(): number {
    return this.score;
  }

}
