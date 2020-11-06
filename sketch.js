
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var bob1,bob2,bob3,bob4,bob5;
var ground,rope;

function setup(){
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(640,600,70);
    bob2= new Bob(570,600,70);
    bob3= new Bob(360,600,70);
	bob4= new Bob(430,600,70);
	bob5= new Bob(500,600,70);
	
  ground= new Roof(510,100,410,30);
  
 rope=new Rope(bob1.body,ground.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  rope.display()

  drawSprites();
 
}



