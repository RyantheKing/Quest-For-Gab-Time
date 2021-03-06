export class init extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('init');
    }
    

     preload ()
    {
        this.load.spritesheet('player', 'assets/Entities/player.png', { frameWidth: 32, frameHeight: 32 });
    }
    
    init ()
    {
        'use strict';

            this.PASSING_OBJ = {
                fps : 60,
                playerData : {
                    health	: 300,
                    maxHealth : 300,
                    healthPacks : 5,
                    velocity : 100
                }
                
                
            };
        
    }

     create ()
    {
        

        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        
        // Global vars as properties of my object that
        // gets passed between all scenes
        

        // Pass it to every scene
      
        'use strict';

        this.scene.start('Health', this.PASSING_OBJ);
        this.scene.start('Scene1', this.PASSING_OBJ);
        

        
    }  
    
}