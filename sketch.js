function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect = createSprite(300,50,100,60)

movingRect.shapeColor="green";
fixedRect.shapeColor="green";

movingRect.debug=true;
fixedRect.debug=true;
}



function draw() {
  background(255,255,255);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 )  {
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
}

else {
  movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}

  drawSprites();
}


