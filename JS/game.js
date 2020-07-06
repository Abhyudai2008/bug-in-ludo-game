class Game {
  constructor(){

  }

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

    blue = createSprite(100,200);
    //blue.addImage("blue.png")
    
    // car2 = createSprite(300,200);
    // car2.addImage("C2",car2image)
    // car3 = createSpriste(500,200);
    // car3.addImage("C3",car3image)
    // car4 = createSprite(700,200);
    // car4.addImage("C4",car4image)
    // cars = [car1, car2, car3, car4];
  }

  play(){
    

    Player.getPlayerInfo();
  
    if(allPlayers !== undefined){
      // background(ludo)
      // image(ludo,0,-displayHeight*4,displayWidth,displayHeight*5)
      


    drawSprites();
  }
}
}
