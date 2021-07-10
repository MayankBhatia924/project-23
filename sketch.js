var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1, carAnimation2, logAnimation, playerAnimation;
var school;
function preload()
{
  carAnimation1=loadAnimation("images/car1.png");
  carAnimation2=loadAnimation("images/car2.png");
  playerAnimation=loadAnimation("images/Player-03.png");
  logAnimation=loadAnimation("images/log2.png");

}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300,);
      road.shapeColor = "black";
    }
    bottomGrass1.shapeColor = "green";
      }
     
     
      for(var i = 0; i < 40; i++){
        logs = new Log(-2);
        logGroup1.add(logs.spt);
      }
  
   
  
  for(var i = 0; i < 40; i++){
    cars = new Car(2);
    carGroup1.add(cars.spt);
  }
  Player = new Player(width/2,height-25);
 
 


}


function draw() {
  background("skyblue");
  translate(0,-Player.spt.y+height-150);
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0){
      logGroup1[i].x=width;
    }
    }
    for(i=1;i<carGroup1.length;i++){
      if(carGroup1[i].x<0){
        carGroup1[i].x=width;
      }
      if(carGroup1[i].x>width){
        carGroup1[i].x=0;
      }
      }
      if(carGroup1.isTouching(Player.spt)){
        Player.spt.x=width/2;
         Player.spt.y=height-75;
         Player.spt.velocityX=0;
         Player.spt.velocityY=0;
       }
       if(logGroup1.isTouching(Player.spt)){
        Player.spt.x=Player.spt.x-3;
        }else if((Player.spt.y > height-1550 &&Player.spt.y < height-1330)||
                (Player.spt.y < height-500 &&Player.spt.y > height-850)||
                (Player.spt.y>height)||
                (Player.spt.x<0)||
                (Player.spt.x>width)){       
         Player.spt.x=width/2;
         Player.spt.y=height-75;
        }
        
  
  keyPressed();
  
  drawSprites();


}

function keyPressed(){
if(keyDown("up")){
  Player.spt.velocityY=-2;
}
if(keyDown("down")){
  Player.spt.velocityY=+2;
}
if(keyDown("left")){
  Player.spt.velocityX=-2;
}
if(keyDown("right")){
  Player.spt.velocityX=+2;
}


}