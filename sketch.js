var box;

function setup() {
  createCanvas(500,600);
 box = createSprite(100,70,50,50)

}

function draw() 
{
 
 
  background(30);
if(keyDown("right")){
  box.x = box.x+2
}

drawSprites();
}




