var canvas, bg, database, form, player, game, playerCount,allPlayers;
var gameState=0;
var cars,car1,car2,car3,car4;
var track,car1_img,car2_img,car3_img,car4_img;
  
function preload(){
  car1_img=loadImage("../images/car1.png");
  car2_img=loadImage("../images/car2.png");
  car3_img=loadImage("../images/car3.png");
  car4_img=loadImage("../images/car4.png");
  track=loadImage("../images/track.jpg");
}

function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
  


  
}

function draw(){
  if(playerCount===4){
    game.update(1);

  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gaameState===2){
    game.end();
  }
    
}


