let playerX = 200;
let playerY = 350;
let targetX = 150;
let targetY = 50;
let playerRadius = 25;
let targetSpeed = 5;
let enemyX = 200
let enemyY = 200

function setup() {
  createCanvas(400, 400);
  noStroke();
img=createImg('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png'
)
  img.position(140, 5);
  img.size(105,55,);
}

function draw() {
  if(targetX >= playerX - playerRadius && targetX <= playerX + playerRadius && targetY >= playerY - playerRadius && targetY <= playerY + playerRadius)   {
    targetX = Math.random() * width;
    targetY = Math.random() * height;
    background('orange');
  } else {
    background('blue');
  }
  circle(enemyX, enemyY, 10)
  fill('orange')
  square(targetX, targetY, 10);
  circle(playerX, playerY, playerRadius * 2);
  targetX = targetX + getMovementAmount();
  targetY = targetY + getMovementAmount();
  
  enemyX = enemyX + getMovementAmount();
  enemyY = enemyY + getMovementAmount();
  
  if(keyIsDown(LEFT_ARROW) == true) {
    playerX = playerX - 5;
  }
  if(keyIsDown(RIGHT_ARROW) == true) {
    playerX = playerX + 5;
  }
  if(keyIsDown(UP_ARROW) == true) {
    playerY = playerY - 5;
  }
  if(keyIsDown(DOWN_ARROW) == true) {
    playerY = playerY + 5;
  }
  
  function drawBackground (backgroundText)
  {
    backgroundText()
    background('blue')
    
    
    for(let count = 1; count < 100; count + 1);
    
  }
}

function getMovementAmount(){
  let randomNumber = Math.random();
  
  if(randomNumber > 0.5){
    return Math.random() * targetSpeed;
  }else{
    return Math.random() * targetSpeed * -1
  }
}