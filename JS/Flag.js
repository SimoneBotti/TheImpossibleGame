function flag(){
	this.x=1000;
	this.y=525;
	this.width=24;
	this.height=50;
	this.sprite=new Image();
	this.sprite.src='Img/checkpoint.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Flagbox = new BoundingBox(this.x,this.y,this.width,this.height);
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	
	
	
	
	}




}