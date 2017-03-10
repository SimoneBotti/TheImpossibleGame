function gameover(){
	this.x=300;
	this.y=100;
	this.width=350;
	this.height=400;
	this.listen;
	this.sprite=new Image();
	this.sprite.src='Img/die.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}

	
	this.startListener=function(){
		this.listen=setInterval("listener()",20);
	}
	
	this.start=function(){
		game.background.Draw(ctx);
		
		game=null;
		this.Draw(ctx);
		
		this.startListener();
	
	}


}
	function listener(){
	this.bR=new buttonReset();
	this.bE=new buttonEnd();
	this.bR.Draw(ctx);
	this.bE.Draw(ctx);
	console.log(Inputs.MouseInsideRect(this.bR.x,this.bR.y,this.bR.width,this.bR.height));
//	console.log(this.bR.x);
	if (Inputs.MouseInsideRect(this.bR.x,this.bR.y,this.bR.width,this.bR.height))
	{if (Inputs.GetMouseDown(Inputs.mouseLeft)) { game=new Game();	
												  begin();
												  clearInterval(slist);
												}
												}
	console.log(Inputs.MouseInsideRect(this.bE.x,this.bE.y,this.bE.width,this.bE.height));
	if (Inputs.MouseInsideRect(this.bE.x,this.bE.y,this.bE.width,this.bE.height))
	{if (Inputs.GetMouseDown(Inputs.mouseLeft)) {
												 clearInterval(slist);
												 MenuStart();
												}							

	}
}
function buttonReset(){
	this.x=300;
	this.y=550;
	this.width=100;
	this.height=50;
	this.sprite=new Image();
	this.sprite.src='Img/playgame2.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
	
}
function buttonEnd(){
	this.x=400;
	this.y=550;
	this.width=100;
	this.height=50;
	this.sprite=new Image();
	this.sprite.src='Img/playgame2.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}

}

