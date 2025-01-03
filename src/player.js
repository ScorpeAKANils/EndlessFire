import { Bullet } from "./bullet.js";

export class Player {
    constructor(app) {
        this.myApp = app;
        this.ticker = app.ticker;
        this.updateEvent = this.update.bind(this);
        this.ticker.add(this.updateEvent);

        this.gPlayer = new PIXI.Sprite(PIXI.Texture.from("../Graphics/player.png"));
        this.gPlayer.anchor.set(0.5);
        this.gPlayer.x = app.view.width / 2;
        this.gPlayer.y = app.view.height / 2;

        this.gPlayer.width = 50;
        this.gPlayer.height = 50;
        this.gPlayer.rotation = 180;

        // Event Listener außerhalb des Tick-Loops hinzufügen
        document.addEventListener('keydown', this.inputHandler.bind(this));
        // Die folgenden beiden Zeilen schienen nicht verwendet zu werden, daher auskommentiert
        // const posX = this.gPlayer.x;
        // const posY = this.gPlayer.Y;
    }

    update() {
        // Code, der jeden Frame ausgeführt werden soll, kann hier platziert werden
    }

    returnXPos()
    {
        return this.gPlayer.x; 
    }

    returnYPos()
    {
        return this.gPlayer.y; 
    }

    inputHandler(event) {
        let speed = 10;
        const key = event.code;

        if (key === 'KeyD') {
            this.gPlayer.rotation += 5 * (Math.PI / 180);
        }

        if (key === 'KeyA') {
            this.gPlayer.rotation -= 5 * (Math.PI / 180);
        }

        if (key === 'KeyS') {
            speed = -10;
        }

        if (key === 'KeyW') {
            speed = 10;
        }

        if (key === 'Space') {
            console.log("schieße!"); 
            if(this.speed < 0)
            {
                this.bulletSpeed = -4; 

            } else 
            {

                this.bulletSpeed = 4;
            }
            const myBullet = new Bullet(this.myApp, this.gPlayer, this.bulletSpeed, this.myApp.returnSpawner());
            this.myApp.stage.addChild(myBullet.gBullet);
        }
        
        

        this.deltaX = speed * Math.cos(this.gPlayer.rotation);
        this.deltaY = speed * Math.sin(this.gPlayer.rotation);
        this.posX += this.deltaX;
        this.posY += this.deltaY;

        if (
            (this.gPlayer.y + 35 < 600 && this.deltaY > 0 ||
                this.gPlayer.y - 35 > 0 && this.deltaY < 0) &&
            (this.gPlayer.x + 35 < 600 && this.deltaX > 0 ||
                this.gPlayer.x - 35 > 0 && this.deltaX < 0) &&
            (key === 'KeyW' || key === 'KeyS')
        ) {
            this.gPlayer.x += this.deltaX;
            this.gPlayer.y += this.deltaY;
        }
    }
}





