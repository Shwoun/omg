let config = {
    type: Phaser.AUTO,
    parent: 'game-container',
   
    scale: {
    mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
       
         width : 1860,
         height :860,
         fullscreenTarget: 'game-container',
         
    },
    backgroundColor: '#ABB2B8',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200 },
            debug: false
        }
    }
};

let game = new Phaser.Game(config);

function preload() {
    this.load.image("ground", "asste/soli.png");
    this.load.spritesheet("hero", "asste/hero.png", {
        frameHeight: 400,
        frameWidth: 400
    });
}

let control, player;

function create() {
    this.physics.world.createDebugGraphic();

    let scaleFactor = Math.min(
    this.scale.width/1860 ,
    this.scale.height/860
);




    const test = this.physics.add.staticGroup();
    const ground = test.create(70*scaleFactor, 900*scaleFactor, 'ground');
    ground.setDisplaySize(1500 * scaleFactor,350* scaleFactor);
    ground.refreshBody();
    ground.setSize (955*scaleFactor,65*scaleFactor);
    ground.setOffset(315*scaleFactor,145*scaleFactor);
    

    const ground2 = test.create(1300*scaleFactor, 900*scaleFactor, 'ground');
    ground2.setDisplaySize(1500 * scaleFactor,350* scaleFactor);
    ground2.refreshBody();
    ground2.setSize (955*scaleFactor,65*scaleFactor);
    ground2.setOffset(315*scaleFactor,145*scaleFactor);


    ground3 = test.create(2500*scaleFactor, 900*scaleFactor, 'ground');
    ground3.setDisplaySize(1500 * scaleFactor,350* scaleFactor);
    ground3.refreshBody();
    ground3.setSize (955*scaleFactor,65*scaleFactor);
    ground3.setOffset(315*scaleFactor,145*scaleFactor);


    player = this.physics.add.sprite(70*scaleFactor, 600*scaleFactor, 'hero');
    player.setDisplaySize(300* scaleFactor,300* scaleFactor);
    player.setSize(100* scaleFactor, 100* scaleFactor);
    player.setOffset(170* scaleFactor, 150* scaleFactor);
    
 
    this.physics.add.collider(player, test);

 this.input.on("pointerdown", () => {
        if (player.body.touching.down) {
            player.setVelocityY(-800);
        }
    });


    this.cameras.main.startFollow(player, true, 1, 0);
    control = this.input.keyboard.createCursorKeys();
}

function update() {
    

    if (control.left.isDown) {
        player.setVelocityX(-360);
    } else if (control.right.isDown) {
        player.setVelocityX(300);
    } else {
        player.setVelocityX(300);
    }

    if (control.up.isDown && player.body.touching.down) {
        player.setVelocityY(-800);
    }
}
