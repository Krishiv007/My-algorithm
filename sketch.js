var fixedRect,movingRect, fixedRect1;
var h1, h2, v1, v2;

function setup() 
{
  createCanvas(800,800);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1 = createSprite(300, 100, 60, 80);
  fixedRect1.shapeColor = "yellow";

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

  createEdges(800, 800);
}

function draw() {
  background(0);

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(fixedRect, movingRect) && isTouching(fixedRect1, movingRect))
  {
    fixedRect.shapeColor = "white";
    fixedRect1.shapeColor = "white";
    movingRect.shapeColor = "white";
  } 
  else if(isTouching(fixedRect1, movingRect))
  {
     fixedRect1.shapeColor = "orange";
     movingRect.shapeColor = "orange";
  }
  else if(isTouching(fixedRect, movingRect)) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } 
  else {
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }

  bounceOff(h1, h2);
  bounceOff(v1, v2);

  bounceOff(h1, leftEdge);
  bounceOff(h2, leftEdge);
  bounceOff(v1, leftEdge);
  bounceOff(v2, leftEdge);

  bounceOff(h1, rightEdge);
  bounceOff(h2, rightEdge);
  bounceOff(v1, rightEdge);
  bounceOff(v2, rightEdge);

  bounceOff(h1, topEdge);
  bounceOff(h2, topEdge);
  bounceOff(v1, topEdge);
  bounceOff(v2, topEdge);

  bounceOff(h1, bottomEdge);
  bounceOff(h2, bottomEdge);
  bounceOff(v1, bottomEdge);
  bounceOff(v2, bottomEdge);

  drawSprites();
}


