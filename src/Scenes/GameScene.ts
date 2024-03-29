// You can write more code here
console.log("Game Scene Loaded");
import { Scene } from "phaser";

/* START OF COMPILED CODE */

/**
 * 
 */
export class GameScene extends Phaser.Scene {
  public cardsArray: Card[] = [];
  public cardsToCheck: Card[] = [];
  public matchedCards: Card[] = [];
  public cardsImages: string[] = []; 
  public canClick: boolean = true;
  public numberOfTurns: number = 6; 
  public timerDuration: number = 30; 
  public numberOfTurnsText: Phaser.GameObjects.Text | undefined;
  public timerDurationText: Phaser.GameObjects.Text | undefined;
  public timerEvent: Phaser.Time.TimerEvent | undefined;
  public textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
    fontFamily: "desyrel", //custom font added to game_pack_sd
    fontSize: "20px",
    color: "#ffcc00",
    stroke: "#000000",
    strokeThickness: 4,
    shadow: {
      offsetX: 1,
      offsetY: 1,
      color: "#000000",
      blur: 4,
      stroke: true,
      fill: true,
    },
  };
  constructor() {
    super("GameScene");
    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  //function for uploading assets file to scene.
  preload(): void {
    this.load.pack("game_pack_sd", "Assets/game_pack_sd.json");
  }

  //creating objects for scene
  editorCreate(): void {
    // bg
    const bg = this.add.image(408, 368, "bg");
    bg.scaleX = 0.6;
    bg.scaleY = 0.6;

    // layer_1
    this.add.layer();

    // sprite_1
    const sprite_1 = new Card(this, 215, 133, "symbols", "symbol_6.png");
    sprite_1.scaleX = 0.5;
    sprite_1.scaleY = 0.5;

    // sprite
    const sprite = new Card(this, 215, 393, "symbols", "symbol_6.png");
    sprite.scaleX = 0.5;
    sprite.scaleY = 0.5;

    // sprite_2
    const sprite_2 = new Card(this, 215, 523, "symbols", "symbol_5.png");
    sprite_2.scaleX = 0.5;
    sprite_2.scaleY = 0.5;

    // sprite_3
    const sprite_3 = new Card(this, 215, 263, "symbols", "symbol_5.png");
    sprite_3.scaleX = 0.5;
    sprite_3.scaleY = 0.5;

    // sprite_4
    const sprite_4 = new Card(this, 595, 393, "symbols", "symbol_4.png");
    sprite_4.scaleX = 0.5;
    sprite_4.scaleY = 0.5;

    // sprite_5
    const sprite_5 = new Card(this, 405, 133, "symbols", "symbol_4.png");
    sprite_5.scaleX = 0.5;
    sprite_5.scaleY = 0.5;

    // sprite_6
    const sprite_6 = new Card(this, 405, 393, "symbols", "symbol_3.png");
    sprite_6.scaleX = 0.5;
    sprite_6.scaleY = 0.5;

    // sprite_7
    const sprite_7 = new Card(this, 405, 523, "symbols", "symbol_3.png");
    sprite_7.scaleX = 0.5;
    sprite_7.scaleY = 0.5;

    // sprite_8
    const sprite_8 = new Card(this, 405, 263, "symbols", "symbol_2.png");
    sprite_8.scaleX = 0.5;
    sprite_8.scaleY = 0.5;

    // sprite_9
    const sprite_9 = new Card(this, 595, 133, "symbols", "symbol_2.png");
    sprite_9.scaleX = 0.5;
    sprite_9.scaleY = 0.5;

    // sprite_10
    const sprite_10 = new Card(this, 595, 263, "symbols", "symbol_1.png");
    sprite_10.scaleX = 0.5;
    sprite_10.scaleY = 0.5;

    // sprite_11
    const sprite_11 = new Card(this, 595, 523, "symbols", "symbol_1.png");
    sprite_11.scaleX = 0.5;
    sprite_11.scaleY = 0.5;

    // lists
    const cardList: Card[] = [
      sprite_11,
      sprite_10,
      sprite_9,
      sprite_8,
      sprite_7,
      sprite_6,
      sprite_5,
      sprite_4,
      sprite_3,
      sprite_2,
      sprite,
      sprite_1,
    ];

    this.cardsArray = cardList;

    //after creating the array of cards, activating randomizer.
    this.randomizeCardImages(this.cardsArray);
    this.cardsArray.forEach((card) => {
      card.on("pointerdown", () => {
        if (this.canClick && card.isClickable()) {
          card.reveal();
          this.cardsToCheck.push(card);
          if (this.cardsToCheck.length === 2) {
            this.canClick = false; // limits the user from clicking on multiple cards(2+)
            this.checkCardsMatch();
          }
        }
      });
    });

    this.events.emit("scene-awake");
  }

  public list!: Phaser.GameObjects.Sprite[];

  /* START-USER-CODE */
  // Write your code here
  randomizeCardImages(cardsArray: Card[]): void {
    const symbols = [
      "symbol_1.png",
      "symbol_2.png",
      "symbol_3.png",
      "symbol_4.png",
      "symbol_5.png",
      "symbol_6.png",
    ];

    // duplicates symbols in order to create 2 cards of each
    const allSymbols = [...symbols, ...symbols];

    // Shuffle the symbols
    for (let i = allSymbols.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap allSymbols[i] and allSymbols[j]
      [allSymbols[i], allSymbols[j]] = [allSymbols[j], allSymbols[i]];
    }

    // Assign the shuffled symbols to the cards
    cardsArray.forEach((card, index) => {
      card.setRevealedImage(allSymbols[index]);
    });
  }

  //checks cards to see if match + timed popup messages regarding status of matched cards
  checkCardsMatch(): void {
    const [card1, card2] = this.cardsToCheck;
    if (card1.getRevealedImage() === card2.getRevealedImage()) {
      this.addToMatchedCards(card1, card2);
      if (this.matchedCards.length === 12) {
        this.showPopup(["You Win!"]);
      } else {
        this.showPopup(["Well done!", "Great!", "Good job!"]);
        this.cardsToCheck = [];
        this.canClick = true;
      }
    } else {
      this.numberOfTurns--;
      if (this.numberOfTurns == 0) {
        this.showPopup(["Game Over!"]);
      } else {
        this.showPopup([
          "Unlucky..",
          "Almost, try again!",
          "Better luck next time..",
        ]);
        this.time.delayedCall(2000, () => {
          card1.reveal();
          card2.reveal();
          this.cardsToCheck = [];
          this.canClick = true;
        });
      }
    }
  }

  addToMatchedCards(card1: Card, card2: Card): void {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
  }

  //pausing cards clickable state when showing popup message
  pauseCards(): void {
    this.cardsArray.forEach((card) => {
      card.setClickable(false);
    });
  }

  //setting cards back to clickable state expect cards that have been matched
  resumeCards(): void {
    this.cardsArray.forEach((card) => {
      card.setClickable(true);
    });
    this.matchedCards.forEach((card) => {
      card.setClickable(false);
    });
  }

  //displays popup message + handler of game clickable/timer state(pausecard/resumecards)
  /**
   * @param stringArr - array of releveant messages(["Good job","Well Done","..."]/["Wrong try again","..."])
   */
  showPopup(stringArr: string[]) {
    this.pauseCards();
    if (this.timerEvent) {
      this.timerEvent.paused = true;
    }
    let text: string = stringArr[Math.floor(Math.random() * stringArr.length)];
    // Background rectangle
    const rect = this.add
      .rectangle(400, 300, 400, 200, 0x000000, 0.8)
      .setOrigin(0.5, 0.5)
      .setInteractive();

    // Pop-up text
    const message = this.add.text(400, 300, text, this.textStyle)
      .setOrigin(0.5, 0.5)
      .setInteractive();
    if (text === "Game Over!" || text === "You Win!") {
      const resetButton = this.add.text(400, 450, "Reset Game", this.textStyle)
        .setOrigin(0.5)
        .setPadding(10)
        .setStyle({ backgroundColor: "#111" })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          this.resetGame();
          rect.destroy();
          message.destroy();
          resetButton.destroy();
        })
        .on("pointerover", () => resetButton.setStyle({ fill: "#f39c12" }))
        .on("pointerout", () => resetButton.setStyle({ fill: "#FFF" }));
    } else {
      this.time.delayedCall(2000, () => {
        rect.destroy();
        message.destroy();
        // Continue your game logic here if needed
        this.resumeCards();
        if (this.timerEvent) {
          this.timerEvent.paused = false;
        }
      });
    }
  }

  //restart game variables(this.scene.restart() causes issues)
  resetGame(): void {
    this.cardsArray.forEach((card) => {
      card.setFrame("symbol_0.png");
    });
    this.matchedCards = [];
    this.cardsToCheck = [];
    this.numberOfTurns = 6;
    this.timerDuration = 30;
    this.randomizeCardImages(this.cardsArray);
    this.resumeCards();
    this.canClick = true;
    if (this.timerEvent) {
      this.timerEvent.remove();
      this.timerDurationText?.destroy();
    }
    this.displayTimer();
  }

  displaynumberOfTurns(): void {
    this.numberOfTurnsText = this.add.text(
      10,
      10,
      `Turns left: ${this.numberOfTurns}`,
      this.textStyle
    );
  }

  //displaying timer timerDuration on screen + updating every second
  displayTimer(): void {
    this.timerDurationText = this.add.text(
      680,
      10,
      `Time left: ${this.timerDuration}`,
      this.textStyle
    );
    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: () => {
        if (this.timerDuration > 0) {
          this.timerDuration--;
          if (this.timerDurationText) {
            this.timerDurationText.setText(`Time left: ${this.timerDuration}`);
          }
        } else {
          this.timerEvent?.remove();
          this.showPopup(["Game Over!"]);
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  //creates the whole scene with objects
  create(): void {
    this.editorCreate();
    if (this.timerDuration > -1) {
      this.displayTimer();
    }
    this.game.events.emit("GameCreated");
  }

  //update funciton to rerender
  update(): void {
    this.numberOfTurnsText?.destroy();
    this.displaynumberOfTurns();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export class Card extends Phaser.GameObjects.Sprite {
  /**
   * @param {Scene} scene  - The scene the card will be in.
   * @param {number} x - The x-coordinate of the card.
   * @param {number} y - The y-coordinate of the card.
   * @param {string} texture - The key of the texture used for the card.
   * @param {string | number} frame - The initial frame.
   * @param {string} type - Type of card to be checked.
   */
  static id: number = 0; //static ID number for class
  private cardID: number; //personal ID number for each card object
  private hiddenImage: string | number = "symbol_0.png"; //default hidden image
  private revealedImage: string | number;
  private interactive: boolean = true; //flag for interactions such as click events
  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string,
    frame: string | number
  ) {
    super(scene, x, y, texture, frame);
    this.cardID = Card.id++;
    this.revealedImage = frame; //saves custom image for use later
    this.setFrame(this.hiddenImage); //sets the default hidden img as frame
    this.setInteractive({
      useHandCursor: true, // Show a hand cursor on hover
      pixelPerfect: true, // Enable pixel-perfect hit testing
    });

    scene.add.existing(this);
  }

  //reveals image of card + limiting card object with user interaction()
  reveal(): void {
    if (this.frame.name == this.hiddenImage) {
      this.setFrame(this.revealedImage);
      this.setClickable(false);
    } else {
      this.setFrame(this.hiddenImage);
      this.setClickable(true);
    }
  }
  getID(): number {
    return this.cardID;
  }
  setRevealedImage(image: string | number): void {
    this.revealedImage = image;
  }

  setClickable(value: boolean): void {
    this.interactive = value;
  }

  isClickable(): boolean {
    return this.interactive;
  }

  getRevealedImage(): string | number {
    return this.revealedImage;
  }
}

export default GameScene;
