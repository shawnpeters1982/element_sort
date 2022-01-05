let img;
let files = ['bromine','calcium', 'chlorine', 'copper', 'fluorine','gold','helium','iodine', 'iron','lead','magnesium','oxygen']
let imgs = [];
let cards = [];

class Card {
  constructor (img, x,y,w,h) {
    this.x1 = x;
    
    this.y1 = y;
    
    
    this.active = false;
    this.offsetX = 0;
    this.offsetY = 0;
    img.resize(int(displayWidth / 10),0);
    this.x2 = x + img.width;
    this.y2 = y + img.height;
    this.height = img.height;
    this.width = img.width;
    this.img = img;
    
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
    //rect(this.x1,this.y1,this.width,this.height);
    image(this.img, this.x1, this.y1);
    
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
  for (let i = cards.length-1; i >= 0; i--) {
    if (cards[i].active) {
      if (actived_card) {
        continue;
      }
      active_card = cards[i].pop();
      //cards[i].move(mouseX,mouseY);
      active_card.move(mouseX,mouseY);
      cards.push(active_card)
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
  for (let i = 0; i < files.length; i++) {
    img = loadImage(files[i]+'.png');
    //img.resize(120,0);
    //cards.push(new Card(img,i*10,i*10,100,100))
    imgs.push(img)
  }
    
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log(displayWidth, displayHeight);
  for (let i = 0; i < imgs.length; i++) {
    cards.push(new Card(imgs[i], i*10,i*10,100,100));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < cards.length; i++) {
    
    cards[i].show()
  }
  
  
}
