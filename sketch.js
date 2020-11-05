
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100, 550, 20);
	ground = new Ground(400, 650, 800, 20);
	dustbin1 = new Dustbin(750, 615, 10, 50);
	dustbin2 = new Dustbin(670, 615, 10, 50);
	dustbin3 = new Dustbin(710, 635, 75, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paperObject.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:127, y:-127});
	}
}



