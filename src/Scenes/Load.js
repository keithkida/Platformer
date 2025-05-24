class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "tilemap_packed.png");                         // Packed tilemap
        this.load.tilemapTiledJSON("Level 1", "Level 1.tmj");   // Tilemap in JSON
        this.load.spritesheet("tilemap_sheet", "tilemap_packed.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create() {
    this.anims.create({
        key: 'walk',
        defaultTextureKey: 'platformer_characters',
        frames: [
            { frame: 'tile_0018.png' },
            { frame: 'tile_0020.png' }
        ],
        frameRate: 10, // you can tweak this to make it faster/slower
        repeat: -1
    });

    // Idle animation using tile_0020 (or any one frame you want to represent idle)
    this.anims.create({
        key: 'idle',
        defaultTextureKey: 'platformer_characters',
        frames: [
            { frame: 'tile_0020.png' }
        ],
        repeat: -1
    });

    // Jump animation using tile_0018 (or you can swap with another if needed)
    this.anims.create({
        key: 'jump',
        defaultTextureKey: 'platformer_characters',
        frames: [
            { frame: 'tile_0018.png' }
        ]
    });
         // ...and pass to the next Scene
         this.scene.start("platformerScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}