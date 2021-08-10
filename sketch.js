var girl,girlImg;
var bg,bgImg;
var tree,tree2,obstaclesGroup;
var wild,animalsGroup;
var animal1,animal2,animal3,animal5,animal6,animal7,animal8,animal9,animal10;
var invisibleGround;
var fly,fliesGroup;
var fly1,fly2,fly3,fly4,fly5,fly6,fly7;

function preload(){
    bgImg = loadImage("jungle.jpg");
    girlImg = loadImage("girl.png");
    tree = loadImage("tree.png");
    tree2 = loadImage("tree2.png");
    animal1 = loadImage("animal.png");
    animal2 = loadImage("animal2.png");    
    animal3 = loadImage("animal3.png");
    animal4 = loadImage("animal4.png");
    animal5 = loadImage("animal5.png");
    animal6 = loadImage("animal6.png");
    animal7 = loadImage("animal7.gif");
    animal8 = loadImage("animal8.png");
    animal9 = loadImage("animal9.png");
    animal10 = loadImage("animal10.png");
    fly1 = loadImage("fly1.png");
    fly2 = loadImage("fly2.png");
    fly3 = loadImage("fly3.png");
    fly4 = loadImage("fly4.png");
    fly5 = loadImage("fly5.png");
    fly6 = loadImage("fly6.png");
    fly7 = loadImage("fly7.png");
}

function setup(){
    createCanvas(1132,440);

    bg = createSprite(670,120,576,360);
    bg.addImage(bgImg);
    bg.velocityX = -5;
    bg.scale = 2.3;

    invisibleGround = createSprite(576,390,1132,1);
    invisibleGround.visible = false;

    girl = createSprite(90,280,1,1);
    girl.addImage(girlImg);
    girl.scale = 0.2;

    obstaclesGroup = createGroup();
    animalsGroup = createGroup();
    fliesGroup = createGroup();
}

function draw(){

    background(bgImg);

    if(bg.x<470){
        bg.x = 670;
    }

    if(keyDown("space")&&girl.y>100){
        girl.velocityY = -12;
    }

    girl.velocityY = girl.velocityY + 0.8;

    spawnTrees();
    spawnAnimals();
    spawnButterflies();

    girl.collide(invisibleGround);

    drawSprites();
}

function spawnTrees(){
    if (frameCount % 200 === 0){
      var obstacle = createSprite(1200,310,1,1);
      obstacle.velocityX = -5
      
       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: obstacle.addImage(tree);
         obstacle.y = 310;
         obstacle.scale = 0.15;
                 break;
         case 2: obstacle.addImage(tree2);
         obstacle.scale = 0.3;
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }

   function spawnAnimals(){
    if (frameCount % 160 === 0){
      var wild = createSprite(1200,310,1,1);
      wild.velocityX = Math.round(random(-10,-6));
      
       //generate random obstacles
       var rand = Math.round(random(1,10));
       switch(rand){
        case 1: wild.addImage(animal1);
         wild.y = 310;
         wild.scale = 0.05;
                 break;
        case 2: wild.addImage(animal2);
         wild.scale = 0.2;
                 break;
        case 3: wild.addImage(animal3);
         wild.y = 270;
         wild.scale = 0.4;
                 break;
        case 4: wild.addImage(animal4);
        wild.scale = 0.3;
                 break;
        case 5: wild.addImage(animal5);
        wild.y = 310;
        wild.scale = 0.5;
                 break;
        case 6: wild.addImage(animal6);
        wild.scale = 0.7;
                 break;
        case 7: wild.addImage(animal7);
        wild.y = 290;
        wild.scale = 0.5;
                 break;
        case 8: wild.addImage(animal8);
        wild.y = 340;
        wild.scale = 0.06;
                 break;
        case 9: wild.addImage(animal9);
        wild.y = 310;
        wild.scale = 0.07;
                 break;
        case 10: wild.addImage(animal10);
        wild.scale = 0.06;
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       
       wild.lifetime = 300;
      
      //add each obstacle to the group
       animalsGroup.add(wild);
    }
   }

   function spawnButterflies(){
    if (frameCount % 100 === 0){
      var fly = createSprite(1200,random(80,130),1,1);
      fly.velocityX = -5
      
       //generate random obstacles
       var rand = Math.round(random(1,7));
       switch(rand) {
         case 1: fly.addImage(fly1);
         fly.scale = 0.2;
                 break;
         case 2: fly.addImage(fly2);
         fly.scale = 0.1;
                 break;
        case 3: fly.addImage(fly3);
         fly.scale = 0.21;
                 break;
         case 4: fly.addImage(fly4);
         fly.scale = 0.2;
                 break;
        case 5: fly.addImage(fly5);
         fly.scale = 0.08;
                 break;
         case 6: fly.addImage(fly6);
         fly.scale = 0.1;
                 break;
        case 7: fly.addImage(fly7);
         fly.scale = 0.1;
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       
       fly.lifetime = 300;
      
      //add each obstacle to the group
       fliesGroup.add(fly);
    }
   }