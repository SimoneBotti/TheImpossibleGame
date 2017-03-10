//Dichiarazione dell'oggetto del terreno
function Terreno(x){
	this.x=x;
    this.y=575;
	this.width=102.5;
	this.height=25;
	this.fallspeed=2;
	this.notanymore=false;
	this.visible=true;
	this.sprite=new Image();
	this.sprite.src='Img/terreno3.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Terrainbox = new BoundingBox(this.x,this.y,this.width,this.height);
	this.fall=function(){
		this.Terrainbox.Move(this.x,this.y+this.fallspeed);
		this.y+=this.fallspeed;
	}
	this.Update=function(){
		if (this.y>0)
		{this.notanymore=true;
		this.fall();}
	}
//Creazione metodo per disegnare il terreno
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
/*		ctx.fillStyle='#abc879';
		ctx.fillRect(this.x,this.y,this.width,this.height);	
	*/
		}	
	
}
