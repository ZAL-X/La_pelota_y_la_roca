
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,ballImg,rock,rockImg;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restitution: 0.75,
  }

  var rock_options = {
    restitution: 0.2,
  }

  ballImg=loadImage("beachball.png");
  rockImg=loadImage("rock.png");
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
image(ballImg,ball.position.x-20,ball.position.y-20, 40, 40);
image(rockImg,rock.position.x-20,rock.position.y-20, 40, 40);
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}


  


