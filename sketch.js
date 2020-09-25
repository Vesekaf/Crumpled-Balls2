const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, paper1;
var floor;
var bin1, bin2, bin3, bin4, binIM;

var gameState;

function preload()
{
	binIm = loadImage("dustbingreen.png");



}

function setup() {

	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//
	//Create the Bodies Here.

	paper = new Paper( 100, 50, 70);

	floor = new Ground(400, 650, 1200 ,20);

	bin1 = new Trash(650, 630, 200, 20);
	bin2 = new Trash(750, 500, 20, 250);
	bin3 = new Trash(550, 500, 20, 250);
	

	
	

	Engine.run(engine);
  
	gameState = "set"

}


function draw() {

	
	Engine.update(engine);
	
	rectMode(CENTER);
	background(255);
	
	
	
	floor.display();
	bin1.display();
	bin2.display();
	bin3.display();
	bin4 = createSprite(650, 500, 80, 80);
	bin4.addImage(binIm);
	bin4.scale = 0.75;
	paper.display();

	drawSprites();
 
}



function keyPressed (){

	if(keyCode === UP_ARROW && gameState === "set"){

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 700, y: -1100});

		gameState = "launched"


	}




}
