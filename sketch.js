var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var blue,  dice2, dice3, dice4, dice5, dice6, green, ludobg, red, yellow 
var blueimage,dice2image,dice3image,dice4image,dice5image, dice6image,greenimage, ludobg, redimage, yellowimage;
function preload(){
ludobg=loadImage("images/ludo bg.png")
blueimage=loadImage("images/blue.png")
greenimage=loadImage("images/green.png")
yellowimage=loadImage("images/yellow.png")
redimage=loadImage("images/red.png")
dice6image=loadImage("images/dice6.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2) {
    game.end()
  }
}
