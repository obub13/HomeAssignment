"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.GameScene = void 0;
// You can write more code here
console.log("Game Scene Loaded");
/* START OF COMPILED CODE */
class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
        this.cardsArray = []; //array of cards object
        this.cardsCheck = []; //array of selected cards on click
        this.cardsImages = []; //array of card images to randomize 
        this.canClick = true;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    //function for uploading assets file to scene.
    preload() {
        this.load.pack("game_pack_sd", "Assets/game_pack_sd.json");
    }
    //creating objects for scene
    editorCreate() {
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
        const cardList = [
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
        // Call this function passing your cardsArray
        this.randomizeCardImages(this.cardsArray);
        this.cardsArray.forEach((card) => {
            card.on("pointerdown", () => {
                if (this.canClick && card.isClickable()) {
                    console.log(card);
                    card.reveal();
                    this.cardsCheck.push(card);
                    if (this.cardsCheck.length === 2) {
                        this.canClick = false; // limits the user from clicking on multiple cards(2+)
                        this.checkCardsMatch();
                    }
                }
            });
        });
        this.events.emit("scene-awake");
    }
    /* START-USER-CODE */
    // Write your code here
    randomizeCardImages(cardsArray) {
        const symbols = [
            "symbol_1.png",
            "symbol_2.png",
            "symbol_3.png",
            "symbol_4.png",
            "symbol_5.png",
            "symbol_6.png",
        ];
        // Duplicate symbols to form pairs
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
    //checks both cards to see if matched
    checkCardsMatch() {
        const [card1, card2] = this.cardsCheck;
        if (card1.getRevealedImage() === card2.getRevealedImage()) {
            console.log("CARDS MATCHED");
            card1.setInteractive(false);
            card2.setInteractive(false);
            this.cardsCheck = [];
            this.canClick = true;
        }
        else {
            // If the cards don't match, delay for a short time before hiding them
            this.time.delayedCall(1000, () => {
                card1.reveal();
                card2.reveal();
                this.cardsCheck = [];
                this.canClick = true;
            });
        }
    }
    getCardsArray() {
        return this.cardsArray;
    }
    create() {
        this.editorCreate();
        this.game.events.emit("GameCreated");
    }
    update() { }
}
exports.GameScene = GameScene;
/* END OF COMPILED CODE */
// You can write more code here
class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        /**
         * @param {Scene} scene  - The scene the card will be in.
         * @param {number} x - The x-coordinate of the card.
         * @param {number} y - The y-coordinate of the card.
         * @param {string} texture - The key of the texture used for the card.
         * @param {string | number} frame - The initial frame or animation key (if applicable).
         * @param {string} type - Type of card to be checked.
         */
        this.hiddenImage = "symbol_0.png"; //default hidden image
        this.interactive = true; //flag for interactions such as click events
        this.revealedImage = frame; //saves custom image for use later
        // this.type = type;
        this.setFrame(this.hiddenImage); //sets the default hidden img as frame
        this.setInteractive({
            useHandCursor: true, // Show a hand cursor on hover
            pixelPerfect: true, // Enable pixel-perfect hit testing
        });
        scene.add.existing(this);
    }
    //reveals image of card + limiting card object with user interaction()
    reveal() {
        if (this.frame.name == this.hiddenImage) {
            this.setFrame(this.revealedImage);
            this.setClickable(false); // Disable interactivity when revealed
        }
        else {
            this.setFrame(this.hiddenImage);
            this.setClickable(true); // Enable interactivity when hidden
        }
    }
    // setType(type:string):void{
    //   this.type = type;
    // }
    setRevealedImage(image) {
        this.revealedImage = image;
    }
    setClickable(value) {
        this.interactive = value;
    }
    isClickable() {
        return this.interactive;
    }
    getRevealedImage() {
        return this.revealedImage;
    }
}
exports.Card = Card;
exports.default = GameScene;
