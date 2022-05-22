var bg, pedroPalmeirense, ricardoFlamenguista,cjBaianoRebaixado,bispo, pedroPalmeirenseImg, ricardoFlamenguistaImg,cjBaianoRebaixadoImg,bispoImg,veioDaHavanSuperHeroiImg,bispoSom,gCjBaianoRebaixado, pedra,pedraImg,gPedra,rocha,gRocha,velorioSom,vitoriaSom,flamengoSom,dificil,assalto,assaltaImg,gAssalto;
var vidas = 3;
var salvamentos=0;
var estado=0;
var carga=1;
var vidasP=50;
function preload() {
pedroPalmeirenseImg=loadImage("pedro palmeirense.png");  
ricardoFlamenguistaImg=loadImage("ricardo flamenguista.png");  
veioDaHavanSuperHeroiImg=loadImage("veio da havan super heroi.png");  
bispoImg=loadImage("bispo bombado.jpg");  
cjBaianoRebaixadoImg=loadImage("cj baiano rebaixado.png");  
bg=loadImage("IMG_5180 (1).JPG");  
bispoSom=loadSound("bispo.mp3");
pedraImg=loadImage("pedra.png");
velorioSom=loadSound("vasco.mp3");
vitoriaSom=loadSound("vitoria.mp3");
flamengoSom=loadSound("comemorar.mp3");
assaltaImg=loadImage("assaltantes.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

bispo=createSprite(width/2,height/2);
bispo.addImage(bispoImg);
bispo.scale=width/400;
bispo.visible=false;
  gCjBaianoRebaixado= new Group();
gRocha=new Group();
gPedra=new Group();


gAssalto=new Group();

ricardoFlamenguista=createSprite(width/5,height-(height/3),50,400);
ricardoFlamenguista.addImage(ricardoFlamenguistaImg);
ricardoFlamenguista.scale=width/3500;

dificil=0;


pedroPalmeirense=createSprite(width-(width/5),height-(height/3),50,400);
pedroPalmeirense.addImage(pedroPalmeirenseImg);
//pedroPalmeirense.scale=0.62;
pedroPalmeirense.scale=width/5600;

createEdgeSprites();
}
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
function draw(){
  

  background(bg);


  

if(estado<1){
  fill("white");
  rect(width-(width/3.7),pedroPalmeirense.y-height/10,50*width/300,height/70);
  fill("red");
  rect(width-(width/3.7),pedroPalmeirense.y-height/10,vidasP*width/300,height/70);
}

  if(keyDown("a")&&ricardoFlamenguista.x>width/15){
    ricardoFlamenguista.x=ricardoFlamenguista.x-width/150;
  }
  if(keyDown("d")&&ricardoFlamenguista.x<width/1.4){
    ricardoFlamenguista.x=ricardoFlamenguista.x+width/150;
  }
  if(keyDown("w")&&ricardoFlamenguista.y>height/2.3){
    ricardoFlamenguista.y=ricardoFlamenguista.y-height/60;
  }
  if(keyDown("s")&&ricardoFlamenguista.y<height/1.1){
    ricardoFlamenguista.y=ricardoFlamenguista.y+height/60;
  }
if(gCjBaianoRebaixado.isTouching(ricardoFlamenguista)){
salvamentos++;
gCjBaianoRebaixado.destroyEach();
}


if(keyDown("t")&&carga==1){
Rocha();
carga=0;
}
if(frameCount%30==0){
  carga=1;
}
if(pedroPalmeirense.isTouching(gRocha)){
  vidasP=vidasP-1;
  gRocha.destroyEach();
}

if(frameCount%250==0){

  assado();
}
if(gAssalto.isTouching(ricardoFlamenguista)){
  vidas=vidas-1;
 gAssalto.destroyEach();
 gPedra.destroyEach();

}


stroke("white");
fill("yellow");
textSize(width/25);
 text(vidas,width/20,height-height/20);

  if(frameCount%45==0){
    Pedra();
  }

  if(frameCount%1500==0){
CjBaianoRebaixado();
  }

//pedroPalmeirense.y=ricardoFlamenguista.y;
if(ricardoFlamenguista.y>pedroPalmeirense.y){
  pedroPalmeirense.y=pedroPalmeirense.y+height/85;
}
if(ricardoFlamenguista.y<pedroPalmeirense.y){
  pedroPalmeirense.y=pedroPalmeirense.y-height/85;
}


if(keyDown("p")){vidasP=vidasP-1;}


if(vidasP==0){
  flamengoSom.play();

estado=3;
vidasP=vidasP-1;
}
if(estado==3){
  gCjBaianoRebaixado.destroyEach();
  gRocha.destroyEach();
  gPedra.destroyEach();
  pedroPalmeirense.visible=false;
  fill("green");
textSize(width/80);
text("voce venceu",width/2,height/2);

}
if(estado>1&&keyDown("r")){
  reseta();
}

if(gPedra.isTouching(ricardoFlamenguista)){
  vidas=vidas-1;
  gPedra.destroyEach();
}
if(vidas<1&&salvamentos>0){
  bispoSom.play();
  vidas=3;
  bispo.visible=true;
  pedroPalmeirense.y=height/2;
estado=1;
salvamentos=salvamentos-1;

}
if(estado==1){
  gCjBaianoRebaixado.destroyEach();
  gPedra.destroyEach();
  fill("red");
textSize(30);
text("pressione espaço",width/20,height/2);
pedroPalmeirense.visible=false;
}
if(keyDown("space")){
  pedroPalmeirense.visible=true;
  bispo.visible=false;
  gPedra.setLifetimeEach(100);
  pedroPalmeirense.y=ricardoFlamenguista.y;
estado=0;
bispoSom.stop();
}
if(vidas==0&&salvamentos==0){
 
  velorioSom.play();

 
  estado=2;
  salvamentos=salvamentos-1;
}
if(estado==2){
  fill("red");
  textSize(width/25);
  text("você morreu",width/2,height/2);
  morte();
  gAssalto.destroyEach();
}


//pedroPalmeirense.debug=true;
//ricardoFlamenguista.debug=true;
//gPedra.debug=true;
//gCjBaianoRebaixado.debug=true;
if(estado>1){
  textSize(width/25);
  fill("cyan");
text("pressione R para resetar",width/2,height/3);


}
if(estado>0){
  gAssalto.destroyEach();
}

  

textSize(width/25);
fill("red");
text(salvamentos,width/20,height/20);
drawSprites();
}

function CjBaianoRebaixado(){
  
cjBaianoRebaixado=createSprite(width*1.2,height/(random(1,23)/10));
cjBaianoRebaixado.addImage(cjBaianoRebaixadoImg);
cjBaianoRebaixado.scale=width/2000;

cjBaianoRebaixado.x=width*1.2;
//cjBaianoRebaixado.x=cjBaianoRebaixado.x-width/40;
cjBaianoRebaixado.lifetime=100;
cjBaianoRebaixado.y=height/3;
cjBaianoRebaixado.velocityX=-width/80;
gCjBaianoRebaixado.add(cjBaianoRebaixado);
}
function Pedra(){
pedra=createSprite(pedroPalmeirense.x,pedroPalmeirense.y);
pedra.addImage(pedraImg);
pedra.scale=width/5000;
pedra.velocityX=-width/60;
pedra.lifetime=50;
gPedra.add(pedra);



}
function Rocha(){
  rocha=createSprite(ricardoFlamenguista.x,ricardoFlamenguista.y);
  rocha.addImage(pedraImg);
  rocha.scale=width/5000;
  rocha.velocityX=width/30;
  rocha.lifetime=50;
  gRocha.add(rocha);
  }
  function morte(){
 gPedra.destroyEach();
 ricardoFlamenguista.x=width/5;
 ricardoFlamenguista.y=height-(height/3);
gCjBaianoRebaixado.destroyEach();
gRocha.destroyEach();
ricardoFlamenguista.visible=false;

  }

  function assado(){
    assalto=createSprite(40,0);
    assalto.x=random(width/2,width/15);
  assalto.addImage(assaltaImg);
  assalto.scale=width/2000;
  assalto.velocityY=height/100;
  assalto.lifetime=300;
  gAssalto.add(assalto);
  }

  function reseta(){
    ricardoFlamenguista.visible=true;
    pedroPalmeirense.visible=true;
    vidasP=50;
    vidas=3;
    salvamentos=0;
  estado=0;
  flamengoSom.stop();
  velorioSom.stop();
  ricardoFlamenguista.y=height-(height/3);
  ricardoFlamenguista.x=width/5;
  }