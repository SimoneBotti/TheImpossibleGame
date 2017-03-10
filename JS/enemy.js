function enemy(x){
	this.x=x;
	this.y=525;
	this.width=50;
	this.height=50;
	this.speed=1;
	this.jumpspeed=game.player.jumpspeed;
	this.coll=false;
	this.exist=false;
	this.Enemybox= new BoundingBox(this.x,this.y,this.width,this.height);
	this.sprite=new Image();
	this.sprite.src='Img/enemy2.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.jumpControl=false;
	this.gravitys=3;
//Creazione metodo per salto
/*	this.jump=function(){
	if (counter!=1) 
		 {this.jumpControl=true;}
	else {this.jumpControl=false;}
	if (counter<60)
		{this.moveleft();
		this.movedown();}
	else {this.moveleft();
		  this.moveup();}
	}*/
//Creazione metodo movimento in alto personaggio	
	this.moveup=function(){
		this.Enemybox.Move(this.x,this.y-this.speed);
		this.y-=this.jumpspeed-game.gravity;
		
		
		}
//Creazione del metodo per far abbassare il personaggio	
	this.movedown=function(){
		this.Enemybox.Move(this.x,this.y+this.speed);
		this.y+=this.jumpspeed-game.gravity;	
		
	}
//Creazione del metodo per far spostare a sinistra il personaggio	
	this.moveleft=function(){
		this.Enemybox.Move(this.x-this.speed,this.y);
		this.x-=this.speed;
	}
	this.gravity=function(){
		this.coll=false;
		this.Enemybox.Move(this.x,this.y+this.gravitys);
		for (i in vTerreno)
		if (this.Enemybox.Collides(vTerreno[i].Terrainbox))
			{this.coll=true
			this.Enemybox.Move(this.x,this.y-this.gravitys);}
		if (!this.coll)
			{this.y+=this.gravitys;}
	}

	this.Update=function(){
		this.gravity();
		this.moveleft();
		if (counter==0) {game.player.jumping=false;}
		console.log('gravita');
		
		}
	this.controlJump=function(){
	if (game.player.jumping){
		this.moveup();
		this.moveleft();
		
	}
		
	}	
	
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
}


