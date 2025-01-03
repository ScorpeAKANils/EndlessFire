

export class Enemy {
    constructor(app, player, enemyFactory) {
        this.enemySpeed = 0.5;
        this.target = player.gPlayer;
        this.ticker = app.ticker;
        this.updateEvent = this.update.bind(this);
        this.ticker.add(this.updateEvent);
        this.myApp = app;   
        this.enemy = new PIXI.Sprite(PIXI.Texture.from("../Graphics/gegner.png"));
        this.enemy.destroy = ()=>this.destroy(); 
        this.enemy.returnXPos = ()=>this.returnXPos(); 
        this.enemy.returnYPos = ()=>this.returnYPos(); 
        this.enemy.anchor.set(0.5);
        this.enemy.width = 50;
        this.enemy.height = 50;
        this.setSpawn(); 
        this.deltaX = 0;
        this.deltaY = 0;

        console.log("Gegner erfolgreich initialisiert!");
    }

    update() {
        // Vektor zwischen dem Gegner und dem Ziel (Player)
        const vectorX = this.target.x - this.enemy.x;
        const vectorY = this.target.y - this.enemy.y;

        // Länge des Vektors berechnen
        const vectorLength = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

        // Vektor normalisieren
        const normalizedVectorX = vectorX / vectorLength;
        const normalizedVectorY = vectorY / vectorLength;

        // Vektor mit Geschwindigkeit multiplizieren
        this.deltaX = this.enemySpeed * normalizedVectorX;
        this.deltaY = this.enemySpeed * normalizedVectorY;

        // Bewegung des Gegners
        this.enemy.x += this.deltaX;
        this.enemy.y += this.deltaY;

        if (Math.abs(vectorX) < 35 && Math.abs(vectorY) < 35) {
            window.location.reload(false);
            console.log("Restarte game");
        }

        if(this.enemy.width <= 0)
        {
            this.ticker.remove(this.updateEvent);
        }
    }
    destroy()
    {
        this.myApp.stage.removeChild(this.enemy);
        this.ticker.remove(this.updateEvent);
    }
returnXPos()
{
    return this.enemy.x;
}

returnYPos()
{
    return this.enemy.y;
}
    setSpawn() {
        this.isFinished = false;
        while (this.isFinished === false) {
            this.ranX = Math.random() * 600;
            this.ranY = Math.random() * 600;
            if (this.ranX !== this.myApp.view.width / 2 && this.ranY !== this.myApp.view.height / 2) {
                this.enemy.x = this.ranX;
                this.enemy.y = this.ranY;
                this.myApp.stage.addChild(this.enemy);
                this.isFinished = true;
            }
        }
    }
    
}

