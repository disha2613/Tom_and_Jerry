var bgImg;
var cat, catImg, catImg2;
var mouse, mouseImg, mouseImg2;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    catImg = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png")
    mouseImg = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700);
    cat.addAnimation("cat_resting",catImg);
    cat.scale = 0.1;
    mouse = createSprite(400,700);
    mouse.scale = 0.1;
    mouse.addAnimation("mouse_resting",mouseImg);

}

function draw() {

    background("bgImg");
    
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
      
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("cat",catImg3);
        mouse.addAnimation("mouse", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouse",mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      
      
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouseFrameDelay = 25;
      mouse.changeAnimation("mouseTeasing");
      
      
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      

}



}
