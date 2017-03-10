function LoadSprite(path,nframe,width){
	var tmp=new Image();
	tmp.src=path;
	tmp.nframe=nframe;
	tmp.curFrame=0;
	tmp.width=width;
	tmp.frameWidth=tmp.width/tmp.nframe;
	
	
	return tmp;
}