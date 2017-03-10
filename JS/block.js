function block(x,y,visua){
	this.x=x;
	this.y=y;
	this.width=30;
	this.height=30;
	this.Blockbox = new BoundingBox(this.x,this.y,this.width,this.height);
	this.visible=visua;
	this.sprite=new Image();
	this.sprite.src='Img/block4.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	
		}



}