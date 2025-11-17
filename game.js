let config = {
    type: Phaser.AUTO,
    width: 800,        // virtual width
    height: 600,
    scale :{
        mode: Phaser.Scale.FIT,     // screen এ fit হবে
        autoCenter: Phaser.Scale.CENTER_BOTH, // মাঝখানে থাকবে
        parent: "game-container",   // div ID (চাইলে বাদও দিতে পারো)
        width: 800,
        height: 600
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
            gravity: { y: 1200 }
        }
    }
};
function preload(){
    this.load.image("ground","asste/soli.png");
     this.load.spritesheet("hero", "asste/hero.png",
        {frameHeight:400, frameWidth:400}
    );
}

let contol,player;
let cursors;
function create(){
  //  this.physics.world.createDebugGraphic();

    let ground = this.physics.add.staticGroup();
   const fastg = ground.create(400,280,"ground");
   fastg.setOffset(-14,0);
   fastg.refreshBody();
   fastg.setSize(320,20);
   
   fastg.setDisplaySize(500,100);

     player = this.physics.add.sprite(500,100,"hero",0);
     player.refreshBody();
    player.setDisplaySize(100,100);
    player.setSize(100,100);
    player.setOffset(170,150);
   

    this.physics.add.collider(player, ground);

    contol = this.input.keyboard.createCursorKeys();
   
}

function update(){

     if(contol.left.isDown){
        player.setVelocityX(-260);
    }else if( contol.right.isDown){
        player.setVelocityX(260)
    }else{
        player.setVelocityX(0);
    }

    if(contol.up.isDown && player.body.touching.down){
        player.setVelocityY(-400);
    }
}
let game = new Phaser.Game(config);
