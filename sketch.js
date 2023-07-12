var wall1, wall2, wall3, wall4, wall5, wall6, wall7,
  wall8, wall9, wall10, wall11, wall12, wall13, wall14,
  wall15, wall16, wall17, wall18, wall19, wall20, wall21,
  wall22, wall23, wall24, wall25, wall26, wall27, wall28;
var dino, dinoImage, life = 5;
var gameState = "play";

function preload() {
  dinoImage = loadImage("dino.png")
}

function setup() {
  createCanvas(300, 300);
  //createSprite(X, Y, width, height);
  wall1 = createSprite(70, 5, 100, 10);
  wall1.shapeColor = "yellow";

  wall2 = createSprite(120, 5, 10, 50);
  wall2.shapeColor = "yellow";

  wall3 = createSprite(120, 135, 10, 150);
  wall3.shapeColor = "red";

  wall4 = createSprite(165, 65, 100, 10);
  wall4.shapeColor = "red";

  wall5 = createSprite(5, 120, 10, 140);
  wall5.shapeColor = "green";

  wall6 = createSprite(46, 110, 80, 10);
  wall6.shapeColor = "green";

  wall7 = createSprite(65, 20, 10, 110);
  wall7.shapeColor = "yellow";

  wall8 = createSprite(160, 45, 10, 40);
  wall8.shapeColor = "red";

  wall9 = createSprite(85, 150, 80, 10);
  wall9.shapeColor = "red";

  wall10 = createSprite(210, 65, 80, 10);
  wall10.shapeColor = "RED";

  wall11 = createSprite(200, 6, 10, 60);
  wall11.shapeColor = "yellow";

  wall12 = createSprite(260, 6, 10, 60);
  wall12.shapeColor = "blue";

  wall13 = createSprite(290, 31, 50, 10);
  wall13.shapeColor = "blue";

  wall14 = createSprite(290, 110, 250, 10);
  wall14.shapeColor = "blue";

  wall15 = createSprite(180, 155, 120, 10);
  wall15.shapeColor = "RED";

  wall16 = createSprite(85, 186, 10, 70);
  wall16.shapeColor = "RED";

  wall17 = createSprite(60, 220, 60, 10);
  wall17.shapeColor = "RED";

  wall18 = createSprite(30, 240, 10, 50);
  wall18.shapeColor = "RED";

  wall19 = createSprite(68, 280, 10, 50);
  wall19.shapeColor = "blue";

  wall20 = createSprite(120, 227, 10, 70);
  wall20.shapeColor = "RED";

  wall21 = createSprite(270, 210, 190, 10);
  wall21.shapeColor = "YELLOW";

  wall22 = createSprite(178, 230, 10, 50);
  wall22.shapeColor = "BLUE";

  wall23 = createSprite(243, 250, 120, 10);
  wall23.shapeColor = "YELLOW";

  wall24 = createSprite(130, 240, 30, 10);
  wall24.shapeColor = "RED";

  wall25 = createSprite(165, 210, 30, 10);
  wall25.shapeColor = "blue";

  wall26 = createSprite(170, 165, 10, 30);
  wall26.shapeColor = "RED";

  wall27 = createSprite(290, 185, 50, 10);
  wall27.shapeColor = "blue";

  wall28 = createSprite(290, 135, 50, 10);
  wall28.shapeColor = "YELLOW";

  //PC
  dino = createSprite(30, 30);
  dino.addImage("similing dino", dinoImage);
  dino.scale = 0.09;

 
}

function draw() {
  background("black");

  //THE MOUSE CURSOR
  fill("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);

  text( "Life Left: " + life, 130,287 );

  drawSprites();

  //-------------------------------------PLAY-------------------------------
  if (gameState === "play") {
    gamePlay()
  }
  //-------------------------------------END-------------------------------
  if (gameState === "end") {
    swal({
      title: "YOU LOSE",
      text: "BETTER LUCK NEXT TIME!!!",
      imageUrl: "https://media.tenor.com/_h3TPrf9CS0AAAAC/loof-and-timmy-loof.gif",
      imageSize: "300x300",
      confirmButtonText: "PLAY AGAIN"
    },
      function (isConfirm) {
        if (isConfirm) {
          window.location.reload();
        }
      }
    )

  }
  //-------------------------------------WIN-------------------------------
  if (gameState === "win") {
    swal({
      title: "YOU WIN",
      text: "CONGRATULATIONS",
      imageUrl: "https://media.tenor.com/C0I4I8WLLh4AAAAC/loof-and-timmy-loof.gif",
      imageSize: "300x300",
      confirmButtonText: "Play Again"
    },
      function (isConfirm) {
        if (isConfirm) {
          window.location.reload();
        }
      }
    )
  }
}

function gamePlay() {
  if (keyDown("left")) {
    dino.x = dino.x - 3;
  }

  if (keyDown("right") ) {
    dino.x = dino.x + 3;
  }

  if (keyDown("up")){ //UP ARROW
   dino.y = dino.y -3;
   console.log("Up arrow is executing")
  }
  
  if (keyDown("down")){ //DOWN ARROW
    dino.y = dino.y + 3
  }
}

