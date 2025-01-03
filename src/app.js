import { Player } from "./player.js";
import { enemySpawner } from "./EnemySpawner.js";

class App {
    constructor() {
        this.app = new PIXI.Application({
            width: 600,
            height: 600,
            backgroundColor: 0x808080,
        });

        document.body.appendChild(this.app.view);
        this.app.returnSpawner = ()=>this.returnSpawner(); 
        // Erstelle Player-Instanz
        this.myPlayer = new Player(this.app);
        this.app.stage.addChild(this.myPlayer.gPlayer);
        this.eSpawner = new enemySpawner(this.app, this.myPlayer);

        // Erstelle Enemy-Instanz und übergebe die Player-Instanz
    }
    returnSpawner()
    {
        return this.eSpawner;
    }
}

new App();
