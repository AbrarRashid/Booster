
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeObject
function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	treeObject = new tree(1050,580)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeObject.display();
  drawSprites();
 
}



