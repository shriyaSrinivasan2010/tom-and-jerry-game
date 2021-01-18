
function preload() {
bgImg = loadImage("images/garden.png")
tomImg1 = loadAnimation("images/tomOne.png")
tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png")
tomImg3 = loadAnimation("images/tomfour.png")
jerryImg1 = loadAnimation("images/jerryOne.png")
jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerryImg3 = loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(850,600)
    cat.addAnimation("catSitting",tomImg1)
    cat.scale = 0.15

    mouse = createSprite(300,600)
    mouse.addAnimation("mouseWithcheese",jerryImg1)
    mouse.scale = 0.14
   // cat.debug = true
    //mouse.debug = true
    cat.setCollider("circle",0,0,400)
    mouse.setCollider("circle",0,0,400)
}

function draw() {

    background(bgImg);
     if(keyDown("left")){
         cat.addAnimation("catWalking",tomImg2)
         cat.changeAnimation("catWalking")
         cat.velocityX = -4
         mouse.addAnimation("mouseTeasing",jerryImg2)
         mouse.changeAnimation("mouseTeasing")

     }

     if(cat.isTouching(mouse)){
         cat.addAnimation("catLastImage",tomImg3)
         cat.changeAnimation("catLastImage")
         cat.x = 400
         mouse.addAnimation("mouseLastImage",jerryImg3)
         mouse.changeAnimation("mouseLastImage")
         cat.scale = 0.18
         mouse.scale = 0.17
         

     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
