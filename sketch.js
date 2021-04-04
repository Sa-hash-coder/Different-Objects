const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;
var UUBall
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(920,450,70)
    
    iron = new Iron(600,430);

    stone = new Stone(400,400);
     
    UUBall = new UBBall(200,440,80);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    UUBall.display();
    stone.display();
    iron.display();
    rubber.display();
    plane.display();
    hammer.display();

    
 
}