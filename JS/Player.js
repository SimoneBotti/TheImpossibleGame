function Player(){
	this.speed=1;
	this.jumpspeed=4;
	this.x=0;
	this.y=539;
	this.width=25;
	this.height=35;
	this.coll=false;
	this.die=false;
	this.move=false;
	this.count=0;
	this.down=false;
	this.playerav=false;
	this.playerright=false;
	this.playerleft=false;
	this.jumping=false;
	this.spriteright=LoadSprite('Img/wmonobear_sequence2.png',9,225);
	this.spriteleft=LoadSprite('Img/bmonobear_sequence_sx2.png',9,225);
	this.Playerbox = new BoundingBox(this.x,this.y,this.spriteright.frameWidth,this.height);
	this.input=new Inputs();
	this.jumpControl=false;
//Creazione metodo per salto
	this.jump=function(){
	if (counter==0){this.jumping=false;}
	else {this.jumping=true;}
	if (counter!=1) 
		 {this.jumpControl=true;}
	else {this.jumpControl=false;}
	if (counter<60 || this.down)
		{if (Inputs.GetKeyDown(KEY_RIGHT))
			{this.moveright();
			 this.movejumpdown();}
		 else if (Inputs.GetKeyDown(KEY_LEFT))
				{this.moveleft();
				 this.movejumpdown();}
	else {this.movejumpdown();}			
			}
	else {if (Inputs.GetKeyDown(KEY_RIGHT))
			{this.moveright();
			 this.moveup(counter);}
		  else if (Inputs.GetKeyDown(KEY_LEFT))
				{this.moveleft();
				 this.moveup(counter);}
			   else {this.moveup(counter);}
		 }
	}
//Creazione metodo movimento in alto personaggio	
	this.moveup=function(counter){
		this.coll=false;
		this.down=false;
		this.Playerbox.Move(this.x,this.y-this.jumpspeed);
		if (this.Playerbox.Collides(game.flag.Flagbox))
			{level++;
			game.resetLevel();}
		
		for (i in vTerreno){
		if (this.Playerbox.Collides(vTerreno[i].Terrainbox))
			{this.coll = true;}
			}
			
//		for (i in vEnemy){
//		if (this.Playerbox.Collides(vEnemy[i].Enemybox))
//			{this.coll = true;}
//			}
			
		for (i in vBlock){
		if (this.Playerbox.Collides(vBlock[i].Blockbox))
			{this.coll = true;
			this.down=true;
			counter=0;


			 vBlock[i].visible=true;}
			 
			}
		if (!this.coll) {this.Playerbox.Move(this.x,this.y+this.jumpspeed);
						this.y-=this.jumpspeed+game.gravity;
					}
					
			
		
		
		}
	this.movejumpdown=function(){
		this.coll=false;
		this.notcollTerrain=false;
		this.Playerbox.Move(this.x,this.y+this.jumpspeed-game.gravity);
		if (this.Playerbox.Collides(game.flag.Flagbox))
			{level++;
			game.resetLevel();}
		
		for (i in vTerreno){
			if (this.Playerbox.Collides(vTerreno[i].Terrainbox))
				{this.coll = true;}
					
					}
	
		for (i in vEnemy){
			if (this.Playerbox.Collides(vEnemy[i].Enemybox))
				{this.coll = true;}
			}
		for (i in vBlock){
			if (this.Playerbox.Collides(vBlock[i].Blockbox))
				{this.coll = true;}
			}	
		
		
		if (!this.coll) {
			this.Playerbox.Move(this.x,this.y-this.jumpspeed-game.gravity);
			this.y+=this.jumpspeed-game.gravity;
		}
		
	}
		
//Creazione del metodo per far abbassare il personaggio	
	this.movedown=function(){
		this.coll=false;
		this.Playerbox.Move(this.x,this.y+game.gravity);
		if (this.Playerbox.Collides(game.flag.Flagbox))
			{level++;
			game.resetLevel();}
		
		for (i in vTerreno){
			if (this.Playerbox.Collides(vTerreno[i].Terrainbox))
				{this.coll = true;}
					
					}
	
		for (i in vEnemy){
			if (this.Playerbox.Collides(vEnemy[i].Enemybox))
				{this.coll = true;}
			}
		for (i in vBlock){
			if (this.Playerbox.Collides(vBlock[i].Blockbox))
				{this.coll = true;}
			}	
		
		
		if (!this.coll) {
			this.Playerbox.Move(this.x,this.y-game.gravity);
			this.y+=game.gravity;
		}
		
		
}
//Creazione del metodo per far spostare a destra il personaggio	
	this.moveright=function(){
		this.coll=false;
		this.Playerbox.Move(this.x+this.speed,this.y);
		if (this.Playerbox.Collides(game.flag.Flagbox))
			{level++;
			game.resetLevel();}
		
		for (i in vTerreno){
		if (this.Playerbox.Collides(vTerreno[i].Terrainbox))
			{this.coll = true;}
			}
		for (i in vBlock){
			if (this.Playerbox.Collides(vBlock[i].Blockbox))
				{this.coll = true;}
				}
			
		if (!this.coll) {
			this.Playerbox.Move(this.x-this.speed,this.y);
			this.x+=this.speed;
		}
		
		}
//Creazione del metodo per far spostare a sinistra il personaggio	
	this.moveleft=function(){
		this.coll=false;
		this.Playerbox.Move(this.x-this.speed,this.y);
		if (this.Playerbox.Collides(game.flag.Flagbox))
			{level++;
			game.resetLevel();}
		
		for (i in vTerreno){
		if (this.Playerbox.Collides(vTerreno[i].Terrainbox))
			{this.coll = true;}
			}
//		for (i in vEnemy){
//		if (this.Playerbox.Collides(vEnemy[i].Enemybox))
//			{this.coll = true;}
//			}	
			for (i in vBlock){
		if (this.Playerbox.Collides(vBlock[i].Blockbox))
			{this.coll = true;}
			}
		if (!this.coll) {
			this.Playerbox.Move(this.x+this.speed,this.y);
			this.x-=this.speed;
		
		}
		}
	this.gravity=function(){
			this.coll=false;
		this.Playerbox.Move(this.x,this.y+game.gravity);
		for (i in vTerreno)
		if (this.Playerbox.Collides(vTerreno[i].Terrainbox))
			{this.coll=true;
			this.Playerbox.Move(this.x,this.y-game.gravity);}
		if (!this.coll)
			{this.y+=game.gravity;}
	
	}
	
	
	
	this.Update=function(){
//		console.log(this.jumping);
	//	console.log("da player:",game.player.jumping);
		if (this.y==539) {counter=0;
						 }
		this.playerright=true;
		this.playerleft=false;

	if (fps==0) {game.resetLevel();}
		fps++;
		if (counter==0)	{this.down=false;
						this.movedown();}
		if (this.move) {this.move=false;}
		if (this.x>204) {this.playerav=true;}
		if (this.x<204 && this.playerav){
			vTerreno[0].Update();
			vTerreno[1].Update();
			}
		if (this.y>600){this.die=true;}
		
	    if (Inputs.GetKeyDown(KEY_UP)) 
				if (this.coll)
					{counter=120;}
			if(Inputs.GetKeyDown(KEY_DOWN))
					{if (this.y+this.height!=600)
								{this.movedown();}}
			if (Inputs.GetKeyDown(KEY_RIGHT)) 
					 {if (this.x!=1024)
						{this.move=true;
						game.updateAnimation(this.spriteright);
						this.moveright();
						this.playerright=true;
						this.playerleft=false;
					}
							}
			if(Inputs.GetKeyDown(KEY_LEFT))
				{if (this.x!=0)
					{this.move=true;
					game.updateAnimation(this.spriteleft);
					this.moveleft();
					this.playerleft=true;
					this.playerright=false;
					}
					}	
			if (this.y!=449 && !this.jumpcontrol)
				{this.movedown();}
		for (i in vMissile){
			vMissile[i].Update();
			}
		for (i in vMissile){
		if (this.Playerbox.Collides(vMissile[i].missilebox))
			{this.die=true;}
			}
		for (i in vEnemy){
		if (vEnemy[i].Enemybox.Collides(this.Playerbox))
			{this.die = true;}
			}
		if (!this.die) 
			{if (Inputs.GetKeyDown(KEY_ESC)) 
				{ferma();}	
			else if (Inputs.GetKeyDown(KEY_ENTER)) avvia();
			if (counter==0)	
				{
				for (i in vEnemy)
				{if (vEnemy[i].exist)
				{vEnemy[i].Update();}}
				}
			else {this.jump();
				this.Draw(ctx);
				for (i in vEnemy)
				{if (vEnemy[i].exist)
				{vEnemy[i].controlJump();
				vEnemy[i].Draw(ctx);}}
				counter--;}
				}
	//	else {game.resetLevel();}
		}
//Creazione del metodo per disegnare il personaggio
	this.Draw=function(ctx){
		if (this.playerright){
		if (this.move){
		var ox=this.spriteright.curFrame*this.spriteright.frameWidth;
		ctx.drawImage(this.spriteright,ox,0,this.width,this.height,this.x,this.y,this.spriteright.frameWidth,this.height);
			}
	else {var ox=0;
		  ctx.drawImage(this.spriteright,ox,0,this.width,this.height,this.x,this.y,this.spriteright.frameWidth,this.height);}
		}
	    else {if (this.move){
		var ox=this.spriteleft.curFrame*this.spriteleft.frameWidth;
		ctx.drawImage(this.spriteleft,ox,0,this.width,this.height,this.x,this.y,this.spriteleft.frameWidth,this.height);
			}
	else {var ox=0;
		  ctx.drawImage(this.spriteleft,ox,0,this.width,this.height,this.x,this.y,this.spriteleft.frameWidth,this.height);}
		}
	}
	
	this.animation=function(sprite){
		if (this.count==3){
			this.count=0;
			sprite.curFrame++;
			if (sprite.curFrame==sprite.nframe)
				{sprite.curFrame=0;}
		}
		this.count++;
		
	}
}		


