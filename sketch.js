var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombie_img;
var bullet, bullet_img;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombie_img = loadImage("assets/zombie.png"); 
  bgImg = loadImage("assets/bg.jpeg")
  bullet_img = loadImage("assets/bullet.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//creating the player sprite
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.3
   //player.debug = true
   player.setCollider("rectangle",0,0,300,300)

 zombie = createSprite(windowWidth-100, windowHeight- 300, 50 , 50);
 zombie.addImage(zombie_img);
 zombie.scale = random(0.20,0.25,0.30);

}

function draw() {
  background(0); 

 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet = createSprite(player.x + 65, player.y - 25 , 50 , 50);
  bullet.addImage(bullet_img) ;
  bullet.scale = 0.09;
  bullet.velocityX = 20;
  
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg);
}

if(bullet.collide(zombie)){
  bullet.visible = false;
  zombie.visible = false;
}

drawSprites();

}

//spawnZombies(){

//}


