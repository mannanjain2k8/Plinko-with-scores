  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;

 

var plinkos = [];
var divisions = [];
var particles = [];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start";




function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

   
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(32);
 
 for(var i = 15;i < 320;i = i + 80){
  text("500",i,540)
 }

 for(var i = 335;i < 560;i = i + 80){
  text("100",i,540)
 }

 for(var i = 575;i < 800;i = i + 80){
  text("200",i,540)
 }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
        
   }


   if(gameState === "end"){
        particle = null;
        text("GAME OVER",400,300)
   }


if(particle !==  null){
 
  particle.display();


  if(particle.body.position.y >= 790){

     if(particle.body.position.x < 300){
       score = score + 500;
       particle = null;

       if(count >= 5)gameState = "end";
                   
    
      }
   
    }  

    if(particle.body.position.y >= 790){

      if(particle.body.position.x > 300 && particle.body.position.x <600){
        score = score + 500;
        particle = null;
 
        if(count >= 5)gameState = "end";
                    
     
       }
    
     }  

     if(particle.body.position.y >= 790){

      if(particle.body.position.x > 600 && particle.body.position.x <800){
        score = score + 500;
        particle = null;
 
        if(count >= 5)gameState = "end";
                    
     
       }
    
     }  


}
   


}

  function mousePressed(){

    if(gameState !== "end"){
    particle = new Particle(mouseX,10,10)
    count = count+ 1

    }

  }