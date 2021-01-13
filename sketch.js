const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var umbrella,i1,i2,i3,i4;
var drops=[];
function preload(){
   i1 = loadImage("images/thunderbolt/1.png") 
   i2 = loadImage("images/thunderbolt/2.png") 
   i3 = loadImage("images/thunderbolt/3.png") 
   i4 = loadImage("images/thunderbolt/4.png") 
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700)
    umbrella= new Umbrella(200,550)
    for(var i=0; i<100; i=i+1){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
}

function draw(){
    Engine.update(engine);
    background(0); 


umbrella.display();    
for(var k=0; k<drops.length; k=k+1){
    drops[k].display();
    drops[k].updateDrop();
}

var rand= Math.round(random(1,4));
if(frameCount%60===0){
switch(rand){
    case 1: image(i1, random(10,370), random(10,30), 450,380); break;
    case 2: image(i2, random(10,370), random(10,30), 250,380); break;
    case 3: image(i3, random(10,370), random(10,30), 450,180); break;
    case 4: image(i4, random(10,370), random(10,30), 450,80); break;
    default:break;
}
}
}   

