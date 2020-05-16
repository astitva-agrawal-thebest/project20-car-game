var car,wall;
var speed,weigth;

function setup() {
  createCanvas(1300,800);
  speed=random(30,90);
  weigth=random(100,1500)
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1000,300,30,height/2);
  
  car.velocityX=speed;
  
}

function draw() {
  background(255,255,255); 
  
  
  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weigth * speed * speed/22509;
    if(deformation>180){
        car.shapeColor="red";
    }

    if(deformation<180 && deformation>50){
      car.shapeColor="yellow";
    }

    if(deformation<50){
      car.shapeColor="green";
    }
  }

  drawSprites();
}