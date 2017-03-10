function sun(x,y){
	this.x=x;
	this.y=y;
	this.width=45;
	this.height=45;
	this.Sunbox = new BoundingBox(this.x,this.y,this.width,this.height);
	this.sprite=new Image();
	this.sprite.src='Img/sun.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	
		}



}