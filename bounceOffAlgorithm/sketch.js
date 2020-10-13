var object1, object2;

function setup() {
object1 = createSprite(200, 200, 50, 50);
object2 = createSprite(100, 100, 20, 20);
}

function draw() {
  background("yellow")
  object2.x = World.mouseX;
  object2.y = World.mouseY;
  Bounce(object1, object2);
  drawSprites();
}

function Bounce(r1, r2) {
  if(r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2
    && r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2) {
      object1.shapeColor = "red";
      object2.shapeColor = "red";
    }
  }