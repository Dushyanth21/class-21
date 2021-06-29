var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,200,50,50)
  rect2 = createSprite(300,200,50,50)
  rect3 = createSprite(500,200,50,50)
  rect4 = createSprite(700,200,50,50)
  rect5 = createSprite(300,400,70,70)
  rect6 = createSprite(700,400,50,50)
  
  rect5.velocityX = 3
  rect6.velocityX = -3
  

  rect1.shapeColor = "green"
  rect2.shapeColor = "green"
  rect3.shapeColor = "green"
  rect4.shapeColor = "green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect1)){
movingRect.shapeColor = "blue"

  }
  else{
movingRect.shapeColor = "green"
  }

bounceOff(rect5,rect6)
  
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true
}
else {
  return false
}

}

function bounceOff(object1,object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){
object1.velocityX = object1.velocityX*-1
object2.velocityX = object2.velocityX*-1
}

if(object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY*-1
    object2.velocityY = object2.velocityY*-1
}

}