class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    
      spd = createSprite(displayWidth/2,displayHeight/2,20,20);
    spd.addImage(a);
    spd.scale = 5;

    vnm = createSprite(1000,400,20,20);
    vnm.addAnimation(vnmStanding);
    vnm.scale = 2;

    cars = [spd,vnm];
    }
  
    play(){
      form.hide();
     // textSize(30);
     // text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
      //  var display_position = 130;
      background(rgb(198,135,183));
      image(bgImg,0,-displayHeight*2,displayWidth,displayHeight*3);

      var index = 0;
      var x = 175;
      var y;
        for(var plr in allPlayers){
          index+=1;
          x+=200;
          y=displayHeight-allPlayers[plr].distance;
          cars[index-1].x=x;
          cars[index-1].y=y;
            if (index == player.index){
                stroke(10);
                fill("red");
                ellipse(x,y,60,60);
                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
            }
         
  
        //   display_position+=20;
        //   textSize(15);
        //   text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        //player.distance +=10
        player.update();
      }
    /* if(player.distance>3860){
         gameState =2;
        player.rank+=1;
        Player.updateCarsAtEnd(player.rank);
        }*/
      drawSprites();
    }
 end(){
     console.log("Game Ended");
 }
  }