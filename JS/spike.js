function spike(x,y){
	this.x=x;
	this.y=y;
	this.width=30;
	this.height=5;
	this.sprite=new Image();
	this.sprite.src='Img/spike.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Spikebox=new BoundingBox(this.x,this.y,this.width,this.height);
	this.Draw=function(ctx){
	/*	ctx.fillStyle="red";
		ctx.fillRect(this.x,this.y,this.width,this.height);
	*/
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
	this.update=function(){
		if (this.Spikebox.Collides(game.player.Playerbox)){
			game.player.die=true;
		}
	}

}