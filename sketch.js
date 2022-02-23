const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var cannonBall, ballon, cannon, angle;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	angleMode(DEGREES);
	angle = 15;

	
	ballon = new Ballon(600, 400);
	b1 = new Ballon(650, 100);
	b2 = new Ballon(700, 200);
	b3 = new Ballon(750, 150);
	b4 = new Ballon(800, 410);
	b5 = new Ballon(850, 300);
	b6 = new Ballon(870, 250);
	b7 = new Ballon(900, 320);
	b8 = new Ballon(920, 180);
	b9 = new Ballon(950, 120);
	b10 = new Ballon(1000, 350);
	
	cannon = new Cannon(666, 530, 120, 130, angle);
	cannonBall = new CannonBall(cannon.x, cannon.y);
	
	//Engine.run(engine);

}


function draw() {
  background(180);
  text(mouseX + "," + mouseY, 120, 120);

  Engine.update(engine);
  ballon.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  cannon.display();
  cannonBall.display();

  drawSprites();

}
