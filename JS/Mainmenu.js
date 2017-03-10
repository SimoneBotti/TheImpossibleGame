/*var bplay=new btPlay();
    im=new Imagemenu();*/

function btPlay(){
	this.x=385;
	this.y=500;
	this.width=266;
	this.height=63;
	this.sprite=new Image();
	this.sprite.src='Img/playgame2.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
this.Draw=function (ctx){
	ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	/*ctx.fillStyle="#ffff00";
	ctx.fillRect(this.x,this.y,this.width,this.height);
*/
	}
this.onClick=function(){
	bplay=null;
	im=null;
	begin();
}
}

function Imagemenu(){
	this.x=0;
	this.y=0;
	this.width=1024;
	this.height=600;
	this.sprite=new Image();
	this.sprite.src='Img/sfondoMenu2.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
this.Draw=function(ctx){
	ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
	
}
function MenuStart(){
	this.bplay=new btPlay();
	this.im=new Imagemenu();
	this.im.Draw(ctx);
	this.bplay.Draw(ctx);
	}
 function list(){
	 this.bplay=new btPlay();
	 this.im=new Imagemenu();
	 if (Inputs.MouseInsideRect(bplay.x,bplay.y,bplay.width,bplay.height))
	  
	 {if (Inputs.GetMouseDown(Inputs.mouseLeft)) {
												  bplay.onClick();
												  clearInterval(slist);
												}

	}

 }

var slist=setInterval("list()",20);
	

