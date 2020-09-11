
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,100);
	ground = new Ground(400,400,800,73);
	dustbin1 = new dustbin(650, 354);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  ground.display();
  dustbin1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85, y:-85} )
	}
}


