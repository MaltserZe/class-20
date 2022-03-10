
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball1;
var ball2;
var ground1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var ball2_Optition = {
     restitution: 1.2
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(300,10,20,ball2_Optition);
  World.add(world,ball2);
  ground1 = Bodies.rectangle(200,200,200,10,ground_options);
   World.add(world,ground1);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground1.position.x,ground1.position.y,200,10);
}

