
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground;
var hammer;
var rubber;
var paper;
var stone;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    hammer = new Hammer(600, 600);
    rubber = new Rubber(100, 150, 20);
    paper = new Paper(350, 150);
    stone = new Stone(600, 150);
    sand1 = new Sand(800, 150, 6)
    sand2 = new Sand(810, 150, 6)
    sand3 = new Sand(820, 150, 6)
    sand4 = new Sand(830, 150, 6)
    sand5 = new Sand(840, 150, 6)
    sand6 = new Sand(850, 150, 6)
    sand7 = new Sand(860, 150, 6)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  hammer.display();
  rubber.display();
  paper.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  drawSprites();
 
}



