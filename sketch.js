let img1;
let img2;
let img3;
let img4;
let img5;
let zdjecia = [];
let wspomnienia = [];
let WisPressed = 6;
let font;
let chapter = 0;
let screen = 0;

const numPoints = 4;
const dragRadius = 20;
let dragPoint = null;

function preload(){
  img1 = loadImage('pudelko.png')
  img2 = loadImage('bilet_ryszard.png')
  img3 = loadImage('kredka_ryszard.png')
  img4 = loadImage('kwiat_ryszard.png')
  img5 = loadImage('mis_ryszard.png')
  font = loadFont('PixelifySans-Regular.ttf');
}

function setup() {
  createCanvas(1920,1080);
  
  textFont(font);
  textSize(40);
  textAlign(CENTER,CENTER);
  
  zdjecia.push(img2);
  zdjecia.push(img3);
  zdjecia.push(img4);
  zdjecia.push(img5);
  
    for(let i = 0; i < numPoints; i++) {
     let w = new Wspomnienie(random(width), random(height), zdjecia[i]);
    wspomnienia.push(w);
      w.checkBox();
      if (w.inTheBox){
        w.x += 300 + random(400);
        w.y += 200 + random(250);
      }
  }

}

function draw() {
  background(237, 221, 212);
  image(img1,1920 /2 - img1.width /2 ,1080 / 2 - img1.height /2);
  fill(0);
  text('Pack the box', 1920 /2, 200);
    for(let i = 0; i<numPoints;i++) {
      wspomnienia[i].show();
    //fill(255, 0, 0);
    //circle(o.x, o.y, dragRadius * 2);
  }
  if(chapter == 0){
    background(0);
    fill(237, 221, 212);
    text('level 5 Acceptance', 1920 / 2 - 200, 1080 / 2, 300);
  
  }
    if (screen >= 1){
    background(0);
    fill(255);
    textSize(64);
    text('Childhood complete!', 1920 / 2, 1080 / 2);
  
  }
}

function mousePressed() {
  chapter++;
  for(let i = numPoints - 1; i >= 0; i --) {
    const isPressed = wspomnienia[i].mouseInCircle(); 
    if(isPressed) {
      WisPressed = i;
      /*
      let v = createVector(wspomnienia[i].x,wspomnienia[i].y);
      dragPoint = v.copy();
      wspomnienia[i].x = dragPoint.x;      
      wspomnienia[i].y = dragPoint.y;
      print( wspomnienia[i].x )
      */
     
    }    
  }
}

function mouseDragged() {
  if( WisPressed <6) {
     wspomnienia[WisPressed].x = mouseX; 
    wspomnienia[WisPressed].y = mouseY;
  }
  
  /*
  if(dragPoint) {
    dragPoint.x = mouseX; 
    dragPoint.y = mouseY;
  }
  */
}

function mouseReleased() {
  dragPoint = null;
  WisPressed = 6;
  let howManyInTheBox = 0;
  for(let i = 0; i<numPoints;i++) {
    wspomnienia[i].checkBox();
    if (wspomnienia[i].inTheBox){howManyInTheBox++}
    
    if (howManyInTheBox == 4 && screen == 2){
      window.open('https://activistgames.github.io/startingPoints', '_self');
    
    }
    if(howManyInTheBox == 4){
      screen++;
    }
  }

}
