export class Bullet {
    constructor(app, player, speed, enemySpawner) {
this.spawner = enemySpawner; 
console.log(enemySpawner); 
this.app = app; 
        this.bulletSpeed = speed;
        this.ticker = app.ticker;  // Setze this.ticker auf das Ticker-Objekt von PIXI
        this.updateEvent = this.update.bind(this);
        this.ticker.add(this.updateEvent);
        this.gBullet = new PIXI.Sprite(PIXI.Texture.from("../Graphics/bullet.png"));
        this.gBullet.anchor.set(0.5);
        this.gBullet.widht = 2; 
        this.gBullet.height = 2; 
        this.gBullet.x = player.x;
        this.gBullet.y = player.y;
        this.gBullet.rotation = player.rotation;
        this.deltaX = 0;  // Änderung: Startwert auf 0 setzen
        this.deltaY = 0;  // Änderung: Startwert auf 0 setzen
        this.enemyNum=4; 
    }

    update() {
        for (let x = 0; x < 4; x++) {
            if(this.spawner.enemys[x] != null){
            let vectorX = this.spawner.enemys[x].returnXPos() - this.gBullet.x;
            let vectorY = this.spawner.enemys[x].returnYPos() - this.gBullet.y;
    
            // Länge des Vektors berechnen
            this.vectorLength = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
    
            if (Math.abs(vectorX) < 25 && Math.abs(vectorY) < 25) {
                console.log("treffe gegner");
                this.spawner.enemys[x].destroy(); 
                this.spawner.enemys[x]=null;
                 this.spawner.decreaseEnemyCount(); 
                 console.log(this.enemyNum); 
                 this.gBullet.x = -1000; 
                this.app.stage.removeChild(this.gBullet); 
                this.ticker.remove(this.updateEvent);
            }
        }
    
        this.deltaX = this.bulletSpeed * Math.cos(this.gBullet.rotation);
        this.deltaY = this.bulletSpeed * Math.sin(this.gBullet.rotation);
        this.gBullet.x += this.deltaX;
        this.gBullet.y += this.deltaY;
    }
    }
    
}

