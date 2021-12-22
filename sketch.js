let img;
let cards = [];

class Card {
  constructor (x,y,w,h) {
    this.x1 = x;
    this.x2 = x + w;
    this.y1 = y;
    this.y2 = y + w;
    this.height = h;
    this.width = w;
    this.active = false;
    this.offsetX = 0;
    this.offsetY = 0;
    
  }
  check_click(x,y) {
    
    if (is_between(x,this.x1,this.x2) && is_between(y,this.y1,this.y2)) {
        this.active = true;
        this.offsetX = x - this.x1;
        this.offsetY = y - this.y1;
      
    } else {
      this.active = false;
    }
  }
  
  
  
  move(x,y) {
    this.x1 = x - this.offsetX;
    this.y1 = y - this.offsetY;
    this.x2 = this.x1 + this.width;
    this.y2 = this.y1 + this.height;
    
  }
  
  show() {
    rect(this.x1,this.y1,this.width,this.height);
  }
}

function is_between(checker,low,high) {
  
  if (checker > low && checker < high) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].check_click(mouseX, mouseY);
    }
}

function mouseDragged() {
  let actived_card = false;
  for (let i = cards.length-1; i > 0; i--) {
    if (cards[i].active) {
      if (actived_card) {
        continue;
      }
      cards[i].move(mouseX,mouseY);
      actived_card = true;
    }
  }
}

function mouseRelease() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].active = false;
  }
}

function preload() {
  img = loadImage('bromine.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < 30; i++) {
    cards.push(new Card(i*10,i*10,100,100));2
  }
}

function draw() {
  background(220);
  image(img, 0, 0);
  console.log(image.size)
  
}
