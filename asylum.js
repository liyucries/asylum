// Jade Martin-Dubois
// Nicholas Brown-Hernandez
// Web and FX: from Theory to Practice 502-A22-LA, section
// Asylum
// https://openprocessing.org/sketch/1866592
/* (Instruction) Use arrow keys to move the player! Click on the monster to recover! Try not to go insane!
/* (Analysis/artist statement) This interaction is about the player trying to see how long they can delay the inevitable or how fast they can change the situation in which they find themsekves in. */

new p5();
let player;
let enemy;
let sanity = 100
let recovery = 0

let ceiling = 0
let floor = 1000
let leftwall = 0
let rightwall = 1400

let enemyW = 79
let enemyH = 79
let enemyX = random(0, 600);
let enemyY = random(0, 600);
let x = random(0, 500);
let y = random(0, 500);

let d = 3.5;
let w = 99
let h = 99


function preload(){
  player = loadImage("patient.png")
  enemy = loadImage("sick.png")
  dead = loadImage("dead.png")
  one = loadImage("backdrop.png")
  alive = loadImage("alive.png")
}


function setup() {
  createCanvas(1400, 1000);
  background(one);
    rectMode(CENTER);
    textAlign(CENTER);
}


function draw() {
  background(one);
  textSize(30);
    playerplayer();
    enemyenemy();
  fill(0)
  rect(150, 80, 200, 40)
    fill(255);
    text ('sanity:', 100, 90)
  
  if (sanity >= 80){
    a = color(70, 218, 80);
    }
  if (sanity >= 60 && sanity <= 80){
    a = color (245, 240, 105);
  }
  if (sanity >= 40 && sanity <= 60){
    a = color (255, 170, 84);
  }
  if (sanity >= 20 && sanity <=40){
    a = color (222, 70, 39);
}
fill (a);
  text (sanity, 195, 91)
  
  let collision = checkCollision(x, y, w, h, enemyX, enemyY, enemyW, enemyH)
    if (collision){
      sanity -= 0.5;
  }

if (sanity <= 0){
  lose();
  }
  
if (recovery >= 100){
  win();
  }
}


function mouseClicked(){
  if (mouseX, mouseY == enemyX, enemyY){
  recovery += 10}
}


function playerplayer() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 4.5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 4.5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 4.5;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 4.5;
  }
    x = constrain(x, leftwall, rightwall-w)
    y = constrain(y, ceiling, floor-h)
      noFill();
      noStroke();
    rect (x, y, 99, 99)
    image(player, x, y, 100, 100)
}


function enemyenemy(){
  let m = createVector (enemyX - x, enemyY - y);
  m.normalize();
    enemyX -= m.x * d;
    enemyY -= m.y * d;
      noFill();
      noStroke();
    enemyX = constrain(enemyX, leftwall, rightwall-enemyW)
    enemyY = constrain(enemyY, ceiling, floor-enemyH)
      rect (enemyX, enemyY, 79, 79)
      image(enemy, enemyX, enemyY, 200, 200);
}


function checkCollision(x, y, w, h, enemyX, enemyY, enemyW, enemyH){
  let top1 = y-h/2;
  let bottom1 = y+h/2;
  let left1 = x-w/2;
  let right1 = x+w/2;
  let top2 = enemyY-enemyH/2;
  let bottom2 = enemyY+enemyH/2;
  let left2 = enemyX-enemyW/2;
  let right2 = enemyX+enemyW/2;
  
  if (top1>bottom2 || bottom1<top2 || right1<left2 || left1>right2){
  return false;
  } else {
    return true;
  }
}


function lose() {
  fill (255,43, 0);
  rect(0, 0, 900, 500);
    image (dead, 0, 0, rightwall, floor);
    textSize(100);
    textFont('Merriweather');
  fill (255);
  text('YOU WENT INSANE', 700, 500)
    noLoop();
}

function win() {
  fill (255,43, 0);
  rect(0, 0, 900, 500);
    image (alive, 0, 0, rightwall, floor);
    textSize(100);
    textFont('Merriweather');
  fill (0);
  text('YOU BEAT YOUR DEMONS', 700, 500)
    noLoop();
}
