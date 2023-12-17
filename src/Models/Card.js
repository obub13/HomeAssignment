"use strict";
// import { Scene } from "phaser";
// class Card extends Phaser.GameObjects.Sprite {
//   /**
//    * @param {Scene} scene  - The scene the card will be in.
//    * @param {number} x - The x-coordinate of the card.
//    * @param {number} y - The y-coordinate of the card.
//    * @param {string} texture - The key of the texture used for the card.
//    * @param {string | number} frame - The initial frame or animation key (if applicable).
//    * @param {string} type - Type of card to be checked.
//    */
//   hiddenImage: string | number = "symbol_0.png"; //default hidden image
//   revealedImage: string | number;
//   private interactive: boolean = true; //flag for interactions such as click events
//   constructor(
//     scene: Scene,
//     x: number,
//     y: number,
//     texture: string,
//     frame: string | number
//     // type: string
//   ) {
//     super(scene, x, y, texture, frame);
//     this.revealedImage = frame; //saves custom image for use later
//     // this.type = type;
//     this.setFrame(this.hiddenImage); //sets the default hidden img as frame
//     this.setInteractive({
//       useHandCursor: true, // Show a hand cursor on hover
//       pixelPerfect: true, // Enable pixel-perfect hit testing
//     });
//     scene.add.existing(this);
//   }
//   //reveals image of card + limiting card object with user interaction()
//   reveal(): void {
//     if (this.frame.name == this.hiddenImage) {
//       this.setFrame(this.revealedImage);
//       this.setClickable(false); // Disable interactivity when revealed
//     } else {
//       this.setFrame(this.hiddenImage);
//       this.setClickable(true); // Enable interactivity when hidden
//     }
//   }
//   // setType(type:string):void{
//   //   this.type = type;
//   // }
//   setRevealedImage(image: string | number): void {
//     this.revealedImage = image;
//   }
//   setClickable(value: boolean): void {
//     this.interactive = value;
//   }
//   isClickable(): boolean {
//     return this.interactive;
//   }
//   getRevealedImage(): string | number {
//     return this.revealedImage;
//   }
//   // getType(): string {
//   //   return this.type;
//   // }
// }
// export = Card;
