function missile(y){
	this.x=900;
	this.y=y;
	this.width=59;
	this.height=15;
	this.speed=3;
	this.missilebox=new BoundingBox(this.x,this.y,this.width,this.height);
	this.sprite=new Image();
	this.sprite.src='Img/latest.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
	this.Move=function(){
		this.missilebox.Move(this.x-this.speed,this.y);
		this.x-=this.speed;
	}
	this.Update=function(){
		
		this.Move();
	}



}