var b1,b2,b3,b4,b5,b6,b7,b8,b9
var x,o
var turn=1;
var game=0;
function preload(){
x=loadImage("X.png")
o=loadImage("O.png")
}
function setup() {
  createCanvas(400,400);
b1=createSprite(100,100)
b2=createSprite(200,100)
b3=createSprite(300,100)
b4=createSprite(100,200)
b5=createSprite(100,300)
b6=createSprite(200,200)
b7=createSprite(200,300)
b8=createSprite(300,300)
b9=createSprite(300,200)
b1.visible=false;
b2.visible=false;
b3.visible=false;
b4.visible=false;
b5.visible=false;
b6.visible=false;
b7.visible=false;
b8.visible=false;
b9.visible=false;
}

function draw() {
  background("red")
  drawSprites();
  //vertical lines
   line(50,50,50,350)
   line(150,50,150,350)
   line(250,50,250,350)
   line(350,50,350,350)
   //horizontal lines
   line(50,50,350,50)
   line(50,150,350,150)
   line(50,250,350,250)
   line(50,350,350,350)
   textSize(20)
   fill("black");
   if(turn===1){
     text("X turn",20,20)
     
   }

   if(turn===2){
     text("O turn",20,20)
   }
   //turn 1
if(turn==1 && mousePressedOver(b1)){
b1.addImage(x)
b1.visible=true;
b1.scale=0.43
game=game+1
turn=2
}

if(turn==1 && mousePressedOver(b2)){
  b2.addImage(x)
  b2.visible=true;
  b2.scale=0.43
  game=game+1
turn=2
  }
  if(turn==1 && mousePressedOver(b3)){
    b3.addImage(x)
    b3.visible=true;
    b3.scale=0.43
    game=game+1
  turn=2
    }
    if(turn==1 && mousePressedOver(b4)){
      b4.addImage(x)
      b4.visible=true;
      b4.scale=0.43
      game=game+1
    turn=2
      }
      if(turn==1 && mousePressedOver(b5)){
        b5.addImage(x)
        b5.visible=true;
        b5.scale=0.43
        game=game+1
      turn=2
        }
        if(turn==1 && mousePressedOver(b6)){
          b6.addImage(x)
          b6.visible=true;
          b6.scale=0.43
          game=game+1
        turn=2
          }
          if(turn==1 && mousePressedOver(b7)){
            b7.addImage(x)
            b7.visible=true;
            b7.scale=0.43
            game=game+1
          turn=2
            }
            if(turn==1 && mousePressedOver(b8)){
              b8.addImage(x)
              b8.visible=true;
              b8.scale=0.43
              game=game+1
            turn=2
              }
              if(turn==1 && mousePressedOver(b9)){
                b9.addImage(x)
                b9.visible=true;
                b9.scale=0.43
                game=game+1
              turn=2
                }
      //turn 2

if(turn==2 && mousePressedOver(b1)){
  b1.addImage(o)
  b1.visible=true;
  b1.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b2)){
  b2.addImage(o)
  b2.visible=true;
  b2.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b3)){
  b3.addImage(o)
  b3.visible=true;
  b3.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b4)){
  b4.addImage(o)
  b4.visible=true;
  b4.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b5)){
  b5.addImage(o)
  b5.visible=true;
  b5.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b6)){
  b6.addImage(o)
  b6.visible=true;
  b6.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b7)){
  b7.addImage(o)
  b7.visible=true;
  b7.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b8)){
  b8.addImage(o)
  b8.visible=true;
  b8.scale=0.43;
  game=game+1
  turn=1
}
if(turn==2 && mousePressedOver(b9)){
  b9.addImage(o)
  b9.visible=true;
  b9.scale=0.43;
  game=game+1
  turn=1
}
}
