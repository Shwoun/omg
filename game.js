let config = {
    type: Phaser.AUTO,
    parent: 'game-container',
   
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
       
         width : 720,
 height :1280,
        
       
        
        fullscreenTarget: 'game-container'
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

    let scaleFactor = Math.min(
    this.scale.width/700 ,
    this.scale.height/600
);
screen.orientation.lock('landscape').catch(()=>{});

    const test = this.physics.add.staticGroup();
    const ground = test.create(200, 600, 'ground');
    ground.setDisplaySize(500 * scaleFactor,150* scaleFactor);
    ground.refreshBody();
    
    ground.setSize (300*scaleFactor,30*scaleFactor);
    
    player = this.physics.add.sprite(200, 300, 'hero');
    player.setDisplaySize(300* scaleFactor,300* scaleFactor);
    player.setSize(500* scaleFactor, 100* scaleFactor);
    
this.physics.add.collider(player, ground);
this.cameras.main.startFollow(player);
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
