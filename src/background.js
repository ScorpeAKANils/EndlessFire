export class BackGround
{
constructor(parent)
{
    this.parent = parent; 
}

async load(loader)
{
const tex = await loader.load('Graphics/DarkForest.png'); 
this.texWidth = tex.width; 
this.bg = [new PIXI.Sprite(tex), new PIXI.Sprite(tex), new PIXI.Sprite(tex)];
this.bg[1].x += this.texWidth;
this.bg[2].x += 2 * this.texWidth;
this.parent.addChild(this.bg[0]);
this.parent.addChild(this.bg[1]);
this.parent.addChild(this.bg[2]); 
}
}