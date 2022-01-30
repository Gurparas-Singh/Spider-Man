var spdStanding,spdRunning,spd;
var vnmStanding,vnmRunning,vnm;
var bgImg,bg;
var gameState =0;
var invisibleGround;
var form;
var heading,headingImg;
var playerCount;
var database;
var game,player;
var cars;
var allPlayers;

function preload(){
    bgImg = loadImage("images/bg.jpg");
    a=loadImage("images/stand.1.jpg");
    //spdStanding = loadAnimation("images/stand.1.jpg","images/stand.2.jpg","images/stand.3.jpg");
    vnmStanding = loadAnimation("images/vnm.stand.1.jpg","images/vnm.stand.2.jpg","images/vnm.stand.3.jpg");
   headingImg = loadImage("images/heading.png");
}

/*function setup(){
    createCanvas(displayWidth,displayHeight);

    heading = createSprite(500,200,200,100);
    heading.addImage(headingImg);

   invisibleGround = createSprite(750,600,1500,10);
    invisibleGround.visible = false;


}*/
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount == 2){
        game.update(1);

    }
    if(gameState == 1){
        clear();
        game.play();
    }
 if(gameState == 2){
     game.end();
 }
}