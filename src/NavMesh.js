export class NavMesh 
{
    constructor(gridWidth, gridHeight, steps, player, app) 
    {
        this.player = player;
        this.target = null;
        this.myApp = app;
        this.isReady = false;
        this._gridWidth = gridWidth;
        this._gridHeight = gridHeight;
        this.gridStep = steps;
        this._points = [[]];
        this.tolerance = 10;
        this.CreateNavMesh();
        this.ConnectNeighbors();
        this._points = [[]];
    }

    CreateNavMesh()
    {
        let height = this._gridHeight / this.gridStep; 
        let widht = this._gridWidth / this.gridStep; 
        for(let y = 0; y < height; ++y)
        {
            for(let x = 0; x < widht; ++x)
            {
                let newNode = new Node((y * this.gridStep), (x * this.gridStep), this, this.myApp)
                this._points[y][x] = newNode; 
            }
        }
    } 

    ConnectNeighbors() 
    {
        
    }
}

export class  Node 
{
    constructor(y, x, NavMesh, app)
    {
        this.yPos = y; 
        this.xPos = x; 
        this.navMesh = NavMesh; 
        this.cost = 0; 
        this.predecossor = null; 
        this.isBlocked = false; 
        this.neighbors = [];
        this.getNeighbors = () => this.getNeighbors();
    }
}