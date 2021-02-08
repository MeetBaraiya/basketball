const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ballObject,ball;
var background_img;


function preload()
{
	background_img = loadImage("bgI.jpg")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,480,1000,20);
	basketback = new Ground(990,100,20,150);
	basketback1 = new Ground(980,145,70,20);
	side = new Ground (990,200,20,800)

	ball = new Ball (90,50,60);

	basket = new Basket (970,180,20,100);
	basket1 = new Basket (850,180,20,100);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(background_img);
  Engine.update(engine);


 
  
  basketback1.display(); 
 ball.display();
  ground.display();
 basket.display();
 basket1.display();
 basketback.display();
 


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-370});
		
	}

	if (keyCode === DOWN_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:100});
		
	}
	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:0});
		
	}
	if (keyCode === LEFT_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:-70,y:0});
		
	}

	if(keyCode === 32){
		Matter.Body.setPosition(ball.body, {x: 90 , y: 50});
	}
}



