var leftEdge, rightEdge, topEdge, bottomEdge;

function isTouching(object1, object2) {
    if(object1.x - object2.x <= object2.width/2 + object1.width/2 && 
      object2.x - object1.x <= object2.width/2 + object1.width/2 &&
      object1.y - object2.y <= object2.height/2 + object1.height/2 && 
      object2.y - object1.y <= object2.height/2 + object1.height/2) {
        // say yes
      return true;
    } else {
      // say no
      return false;
    }
  
  }
  
function bounceOff(o1, o2)
{
 if(o1.y - o2.y <= o2.height/2 + o1.height/2 && 
    o2.y - o1.y <= o2.height/2 + o1.height/2) 
 {
    o1.velocityY = -o1.velocityY;
    o2.velocityY = -o2.velocityY;
  } 
    
if(o1.x - o2.x <= o2.width/2 + o1.width/2 && 
   o2.x - o1.x <= o2.width/2 + o1.width/2) 
   {
     o1.velocityX = -o1.velocityX;
     o2.velocityX = -o2.velocityX;
     } 
}

function createEdges(width, height)
{
  leftEdge = createSprite(0, height/2, 0.0001, height);
  rightEdge = createSprite(width, height/2, 0.0001, height);
  topEdge = createSprite(width/2, 0, width, 0.0001);
  bottomEdge = createSprite(width/2, height, width, 0.0001);
}