var form
var player,game
var playerCount = 0;
var gameState = 0;
var canvas
var database

function setup() {
  canvas = createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  database = firebase.database();
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
}

