const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella, ground;
var maxDrops = 100;
var drops = [];
var t1, t2, t3, t4, thunderbolt;
function preload(){
   t1 = loadImage("thunderbolt/1.png");
   t2 = loadImage("thunderbolt/2.png");
   t3 = loadImage("thunderbolt/3.png");
   t4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(400, 800);
   engine = Engine.create();
   world = engine.world;
   var options = {
    isStatic : true
   }
    ground = Bodies.rectangle(200,795, 400, 10, options);
    World.add(world, ground);

    umbrella = new Umbrella(200, 700);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
}

function draw(){
    background('black');
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 10);
    umbrella.display();
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
    } 
    if(frameCount % 90 === 0){
        thunderbolt = createSprite(random(0,400), 100, 10, 10 )
        thunderbolt.lifetime = 15;
        var n = Math.round(random(1,4));
        switch(n){
            case 1: thunderbolt.addImage(t1)
                break;
            case 2: thunderbolt.addImage(t2)
                break;
            case 3: thunderbolt.addImage(t3)
                break;
            case 4: thunderbolt.addImage(t4)
                break;
            default:
                break;
        }
    }
    drawSprites();
}   

