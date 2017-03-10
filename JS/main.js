var canvas=document.getElementById('gamecanvas');
    ctx=canvas.getContext("2d");
    game=new Game();
	life=500;
	canvas.style.backgroundColor='white';
	level=1;
	counter=0;
	tcount=0;
	cont=60;
	fps=0;
// Avvio Musica
function avvia(){
var play = document.getElementById("audio").play(); 
}	
// Stop Musica
function ferma(){
	
 var mute = document.getElementById("audio").pause();
}


//Dichiarazione oggetto game
function Game(){
//	******* COSTRUZIONE PRIMO LIVELLO
	this.setVectorial=function(){
	vTerreno=[];
	vBlock=[];
	vEnemy=[];
	vMissile=[];
	vTerreno=[new Terreno(0),new Terreno(102.5),new Terreno(205),new Terreno(307.5),new Terreno(410),new Terreno(512.5),new Terreno(615),new Terreno(717.5),new Terreno(820),new Terreno(922.5)];
    vBlock=[new block(100,400,false),new block(200,349,true),new block(350,349,false),new block(430,250,true),new block(500,349,true),new block(560,250,true)];
	vEnemy=[new enemy(500),new enemy(600)];
	vMissile=[new missile(400),new missile(300)];
	}
//  ******** COSTRUZIONE SECONDO LIVELLO	(per costruirlo riempire i vettori passando i seguenti parametri, vTerreno(x),vBlock(x,y,visibilita se sara visibile true),vEnemy(x))
	this.setVectorial2=function(){
	vTerreno=[new Terreno(0),new Terreno(102.5),new Terreno(205),new Terreno(307.5),new Terreno(410),new Terreno(512.5),new Terreno(615),new Terreno(717.5),new Terreno(820),new Terreno(922.5)];
	vBlock=[new block(0,370,true),new block(25,370,true),new block(50,370,true),new block(75,370,false),new block(100,370,false),new block(125,370,false),new block(200,370,false),new block(225,370,false),new block(325,370,true),new block(350,370,true),new block(375,370,true),new block(400,370,true),new block(425,370,true),new block(450,370,true),new block(475,370,true),new block(500,370,true),new block(525,370,true),new block(550,370,true),new block(550,345,true),new block(550,320,true),new block(550,295,true),new block(550,270,true),new block(550,245,true),new block(550,220,true),new block(550,195,true),new block(550,170,true)];
	vEnemy=[new enemy(700),new enemy(800)];
	vMissile=[new missile(450),new missile(550)];

	
	
	}
	this.player=new Player();
	this.background=new Background();
	this.flag=new flag();
	this.sun=new sun(50,50);
	this.spike=new spike(200,344);
	this.enemyfirstexist=false;
	this.gravity=1;
	this.buttonpause= new Buttonpause();
	this.pause=false;
	this.gameover=new gameover();
//	this.terrain=new Terreno();
//Creazione del metodo update dell'oggetto game
this.Update=function() {
	this.spike.update();
	if (this.player.die){
		this.gameover.start();
	}
	if (Inputs.MouseInsideRect(this.buttonpause.x,this.buttonpause.y,this.buttonpause.width,this.buttonpause.height))
		{if (Inputs.GetMouseDown(Inputs.mouseLeft)) 
		{this.buttonpause.onClick();}
		}
	if (Inputs.GetKeyDown(KEY_Q)) 
		{if (this.pause==false) {this.pause=true;
								this.buttonpause.sprite.src='Img/resume.png'
				}
		else {this.pause=false;
			  this.buttonpause.sprite.src='Img/pause.png'					
			  }
		}	  
	if (!this.pause){
		this.player.Update();
	for (i in vEnemy)
		{if (vEnemy[i].x<=0){vEnemy.splice(0,1)}}
	
	if (vMissile.length!=0){
	if (vMissile[1].x<=0){vMissile.splice(0,vMissile.length);}
	}
	}
		}
//Creazione del metodo draw dell'oggetto game
this.Draw=function(){
	this.background.Draw(ctx);
	this.buttonpause.Draw(ctx);
	this.vDraw(vTerreno);
	this.vDraw(vBlock);
	this.sun.Draw(ctx);
	this.spike.Draw(ctx);
	this.DrawMissile(vMissile);
	this.player.Draw(ctx);
	this.drawEnemy(vEnemy);
//	ctx.fillStyle="red";
//	ctx.fillRect(this.player.Playerbox.x,this.player.Playerbox.y,this.player.Playerbox.width,this.player.Playerbox.height);
/*	for (var i in vTerreno){
		ctx.fillStyle="red";
		ctx.fillRect(vTerreno[i].Terrainbox.x,vTerreno[i].Terrainbox.y,vTerreno[i].Terrainbox.width,vTerreno[i].Terrainbox.height);
	}
	*/
}
this.DrawMissile=function(v){
	for (i in v){
		v[i].Draw(ctx);
	  }


}
this.drawEnemy=function(v){
	for (i in v){
	if (this.player.x>100){v[i].exist=true;
							this.enemyfirstexist=true;}
	else {v[i].exist=false;}
	if (this.enemyfirstexist){v[i].exist=true;}
	if (v[i].exist)
		{v[i].Draw(ctx);}
			
		
	}
}
this.resetLevel=function(){
	life-=50;
	switch (level){
	case 1: this.setVectorial();
			for (i in vEnemy){vEnemy[i].exist=false;}
			game=null;
			game=new Game();
			break;
	case 2: this.setVectorial2();
			for (i in vEnemy){vEnemy[i].exist=false;}
			game=null;
			game=new Game();
			break;
	}
}	



this.vDraw=function(v){
	for (i=0;i<v.length;i++){
		this.vectorialDraw=v[i];
	if (this.vectorialDraw.visible)
		{this.vectorialDraw.Draw(ctx);}
		this.vectorialDraw=null;
	}
}
this.updateAnimation=function(sprite){
	
	this.player.animation(sprite);

}
//	this.playerRun=LoadSprite('img/stickman',15);
//Creazione del game loop
this.loop=function(){
//			this.getCollision();
			this.Update();
			this.Draw(ctx);
			Inputs.Clear();
			requestAnimFrame(function(){
				game.loop();
			});
		}		
//Metodo per far iniziare il game loop
this.start=function() {
	this.loop();
}
}
function begin(){
	game.start();
} 
window.requestAnimFrame = (function(cb){
	return window.requestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||
		   window.mozRequestAnimationFrame ||
		   window.oRequestAnimationFrame ||
		   window.msRequestAnimationFrame ||
		    
		   function(cb){
				setTimeout(cb,1000/60);
		   }
	
})();











/*
function vv(vet){
		for (i in vet)
			vet[i].Update();
}

/*	this.Clear = function() {
			for (i in this.enemy) {
					if (this.vEnemy[i].dead) {
						this.vEnemy.splice(i,1);
					}
			}
	
		
 	}
 	this.Spawn() {
		this.vEnemy.push(new Enemey());
		
	}
	vectorialUpdate(this.vEnemy);*/



   	
         		
		

