var bananaImg, obstacleImg;
var ground;
var obstacleGroup, foodGroup;
var background1, backImg;
var monkey, monkeyImg;
var score = 0;
function preload(){
  backImg=loadImage("images/jungle.jpg");
  
  monkeyImg = loadAnimation("images/Monkey_01.png", "images/Monkey_02.png", "images/Monkey_03.png", "images/Monkey_04.png", "images/Monkey_05.png", "images/Monkey_06.png", "images/Monkey_07.png", "images/Monkey_10.png");
  
  bananaImg=loadImage("images/banana.png");
  obstacleImg=loadImage("images/stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  background1 = createSprite(200, 385, 800, 400);
  background1.addImage("backgr",backImg);
  background.x = background.width/2;
  background.velocityX = -6;
  
  ground = createSprite(200, 390, 400, 20);
  ground.visible = false;
  
  monkey = createSprite(100, 370, 20, 20);
  monkey.addAnimation("monkey", monkeyImg);
  monkey.scale = 0.1;
}

function draw() {
  background(220);
  
  if(background.x<0){
     background.x = background.width/2;
     }
  
  if(foodGroup.isTouching(monkey)){
    score = score+2;
     }
  
  switch(score){
         case 10: player.scale=0.12;
         break;
         case 20: player.scale=0.14;
         break;
         case 30: player.scale=0.16;
         break;
         case 40: player.scale=0.18;
         break;
         default: break;
         }
  if(obstacleGroup.isTouching(monkey)){
     monkey.scale = 0.1;
  }
  
  
  food();
  obstacle();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score "+score, 500, 50);
}

function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400, random(120, 200));
    banana.addAnimation("banana", bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -10;
    banana.lifetime = 40;
    foodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount%300 === 0){
    var obstacle1 = createSprite(400, 355, 50, 50);
    obstacle1.addAnimation("obstacle", obstacleImg);
    obstacle1.scale = 0.2;
    obstacle1.velocityX = -10;
    obstacle1.lifetime = 40;
    obstacleGroup.add(obstacle1);
  }
}