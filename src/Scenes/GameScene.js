"use strict";
// You can write more code here
Object.defineProperty(exports, "__esModule", { value: true });
/* START OF COMPILED CODE */
class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    preload() {
        this.load.pack("game_pack_sd", "Assets/game_pack_sd.json");
    }
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
        const list = [
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
        this.list = list;
        const cardCheck = [];
        this.events.emit("scene-awake");
    }
    /* START-USER-CODE */
    // Write your code here
    create() {
        this.editorCreate();
    }
}
exports.default = GameScene;
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
         * @param {string} defaultImage - The default image for hidden card.
         */
        this.hiddenImage = "symbol_0.png";
        this.revealedImage = frame; //saves custom image for use later
        this.setFrame(this.hiddenImage); //sets the default hidden img as frame
        this.setInteractive({
            useHandCursor: true, // Show a hand cursor on hover
            pixelPerfect: true, // Enable pixel-perfect hit testing
        });
        this.on('pointerdown', this.clickedCard);
        scene.add.existing(this);
    }
    //UNFINISHED - needs to be added to cardsCheck arr for checkup between 2 cards and removed from cardsCheck arr after checkup.
    clickedCard() {
        this.reveal();
        console.log('Sprite clicked!', this);
    }
    reveal() {
        if (this.frame.name == this.hiddenImage) {
            this.setFrame(this.revealedImage);
        }
        else {
            this.setFrame(this.hiddenImage);
        }
    }
}
