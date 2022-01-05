let img;
let files1 = ['bromine','calcium', 'chlorine', 'copper', 'fluorine','gold','helium','iodine', 'iron','lead','magnesium','oxygen'];
let files2 = [];
let imgs1 = [];
let imgs2 = [];
let cards = [];
let button;

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
      
      cards[i].move(mouseX,mouseY);
      cards.push(cards.splice(i, 1)[0]);
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
  for (let i = 0; i < files1.length; i++) {
    img = loadImage(files1[i]+'.png');
    imgs1.push(img)
  }
  for (let i = 0; i < files2.length; i++) {
    img = loadImage(files2[i]+'.png');
    imgs2.push(img)
  }
    
}

function setup() {
  createCanvas(displayWidth, int(displayHeight*0.75));
  button = createButton('Continue');
  button.mousePressed(load_metalloids);

  button.position(200, int(displayHeight*0.75));
  for (let i = 0; i < imgs1.length; i++) {
    cards.push(new Card(imgs1[i], i*10,i*10,100,100));
  }
}

function load_metalloids() {
  console.log('loading metalloids')
}

function draw() {
  background(220);
  for (let i = 0; i < cards.length; i++) {
    
    cards[i].show()
  }
  
  
}
