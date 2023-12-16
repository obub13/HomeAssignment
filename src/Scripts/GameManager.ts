// import { isContext } from "vm";
// import MainScene from "../Scenes/MainScene";




/**
 * Use this class for main implementation.
*
*/

console.log('Game Manager Loaded');

import * as Phaser from "phaser";
import GameScene from "../Scenes/GameScene";
// import GameScene, { Card } from "../Scenes/GameScene";


export class GameManager {
  // public turns: number = 0;
  // public score: number = 0;
  // public cardsCheck: Card[] = [];
  // public cards: Card[] = [];
  // gameScene: typeof GameScene;
  // gameWindow: GameScene;
  constructor(i_Scene: GameScene) {
    console.log("Bublil");
    //   this.gameWindow = new GameScene();
    // this.gameScene = GameScene;
    // this.cards = GameScene.create();
  }


  //initializing cards in gameScene
  // public initCards(scene: Phaser.Scene, cardsArr: Card[]): void {
  //   cardsArr.forEach(card => {
  //     card.setInteractive(true)
  //     card.on("pointerdown", () =>{
  //       this.cardsCheck.push(card)
  //       if(this.cardsCheck.length == 2){
  //         this.turns--;
  //         if(this.turns ==0){
  //           this.EndGame();
  //         }
  //         if(this.cardsCheck[0].frame.name == this.cardsCheck[1].frame.name){
  //           this.score++;
  //           this.cardsCheck[0].setInteractive(false);
  //           this.cardsCheck[1].setInteractive(false);
  //           this.cardsCheck.slice(0,2);
  //         } else{
  //           this.cardsCheck[0].reveal();
  //           this.cardsCheck[1].reveal();
  //           this.cardsCheck.slice(0,2);
  //         }
  //       }
  //     });
  //   })
  // }

  // //adds current card to checkArray for further use
  // public addCardToCheckArray(card: Card): void {
  //   this.cardsCheck.push();
  // }

  // public getTurns(): number {
  //   return this.turns;
  // }
  // public decreaseTurn():void{
  //   this.turns--;
  //   this.getTurns();
  // }
  // public getScore(): number {
  //   return this.score;
  // }

  // public StartGame(): void{
  //   this.turns==6;
  //   this.score==0;
    // this.initCards(this.gameWindow, this.gameWindow.getCardsArray());
    // this.blah();
  // }

  // EndGame(): void{

  // }

}
export default GameManager;
// console.log('game manager check');