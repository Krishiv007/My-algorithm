var fixedRect,movingRect;
var h1, h2, v1, v2;

function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  v1= createSprite(400, 100, 50, 80);
  v2= createSprite(400, 700, 50, 80);
  v1.velocityY = 5;
  v2.velocityY = -5;

  h1= createSprite(100, 400, 80, 50);
  h2= createSprite(700, 400, 80, 50);
  h1.velocityX = 5;
  h2.velocityX = -5;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  v1.shapeColor = "red";
  v2.shapeColor = "red";

  h1.shapeColor = "red";
  h2.shapeColor = "red";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(v1.y - v2.y <= v2.height/2 + v1.height/2 && 
    v2.y - v1.y <= v2.height/2 + v1.height/2) 
    {
    v1.velocityY = -v1.velocityY;
    v2.velocityY = -v2.velocityY;
     } 
  
     if(h1.x - h2.x <= h2.width/2 + h1.width/2 && 
      h2.x - h1.x <= h2.width/2 + h1.width/2) 
      {
      h1.velocityX = -h1.velocityX;
      h2.velocityX = -h2.velocityX;
       } 



  drawSprites();
}
