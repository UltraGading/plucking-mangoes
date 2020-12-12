const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree1, ground1, stone1
var boyImg
function preload() {
boyImg = loadImage('images/boy.png')
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
tree1 = new Tree(600,485,400,400)
ground1 = new Ground(400,690,800,20)
stone1 = new Stone(107,408,50,50)
mango1 = new Mango(600,700,50)
mango2 = new Mango(690,450,50)
mango3 = new Mango(560,710,50)
mango4 = new Mango(650,700,50)
mango5 = new Mango(500,750,50)
sling = new Slingshot(stone1.body,{x:65, y:505})
Engine.run(engine);  
}


function draw() {
rectMode(CENTER);
background(255,255,255);
tree1.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
ground1.display()
imageMode(CENTER)
image(boyImg,107,605,160,350)
stone1.display()
drawSprites(); 
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly()
}

