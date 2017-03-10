function Background(){
	this.x=0;
	this.y=0;
	this.width=1024;
	this.height=600;
	this.Draw=function(ctx){
		ctx.fillStyle='#ffffff';
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
}
