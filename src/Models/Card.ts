import { Scene } from "phaser";

class Card extends Phaser.GameObjects.Sprite {
    /**
     * @param {Scene} scene  - The scene the card will be in.
     * @param {number} x - The x-coordinate of the card.
     * @param {number} y - The y-coordinate of the card.
     * @param {string} texture - The key of the texture used for the card.
     * @param {string | number} frame - The initial frame or animation key (if applicable).
     */
    hiddenImage: string | number = "symbol_0.png";
    revealedImage: string | number;
    constructor(
      scene: Scene,
      x: number,
      y: number,
      texture: string,
      frame: string | number
    ) {
      super(scene, x, y, texture, frame);
      this.revealedImage = frame; //saves custom image for use later
      this.setFrame(this.hiddenImage); //sets the default hidden img as frame
      this.setInteractive({
        useHandCursor: true, // Show a hand cursor on hover
        pixelPerfect: true, // Enable pixel-perfect hit testing
      });
      this.on("pointerdown", this.clickedCard);
      scene.add.existing(this);
    }
    //UNFINISHED - needs to be added to cardsCheck arr for checkup between 2 cards and removed from cardsCheck arr after checkup.
    public clickedCard(): void {
      this.reveal();
      console.log("Sprite clicked!", this);
    }
    reveal(): void {
      if (this.frame.name == this.hiddenImage) {
        this.setFrame(this.revealedImage);
      } else {
        this.setFrame(this.hiddenImage);
      }
    }
  }

export default Card;