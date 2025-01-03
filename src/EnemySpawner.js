import { Enemy } from "./enemy.js";

export class enemySpawner {
    constructor(app, player) {
        this.maxEnemy = 4;
        this.enemyCounter = 0;
        this.myPlayer = player;
        this.myApp = app;
        this.target = player.gPlayer;
        this.ticker = app.ticker;
        this.ticker.add(this.updateEvent);
        this.enemys = []; 
        this.x = 0
        this.spawnGegner(); 
    }

    spawnGegner() {
        for (this.x =  0; this.x < this.maxEnemy; this.x++) 
        {
            console.log("spawne gegner...");
            this.enemys[this.x]= new Enemy(this.myApp, this.myPlayer, this);
        }
        this.enemyCounter=4;
    }

    decreaseEnemyCount()
    {
        
        this.enemyCounter = this.enemyCounter-1; 
        if(this.enemyCounter <=0)
        {
        this.spawnGegner(); 
        }
        return; 
    }
}
