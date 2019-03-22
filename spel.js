let ab = 4;
var ballen = [];


let sjakie = "hjhjhj"


class Ball{
  constructor(x, y, r, k, xs, ys){
    this.xPos = x;
    this.yPos = y;
    this.straal = r;
    this.color = k;
    this.xSpeed = xs;
    this.ySpeed = ys;
  }



  bots (){

    for (var i = 0; i < ballen.length; i++){
      if ( ballen[i] !=  this ) {
      let afstand = dist(this.xPos, this.yPos ,ballen[i].xPos , ballen[i].yPos)
      if (afstand < this.straal + ballen[i].straal){
        this.ySpeed = -this.ySpeed;
        this.xSpeed = -this.xSpeed;
      }
   }
}

  let afstandPlayer = dist(this.xPos, this.yPos ,b1.xPos , b1.yPos)
    if (afstandPlayer < this.straal + b1.straal){
      this.ySpeed = -this.ySpeed;
      this.xSpeed = -this.xSpeed;
      //console.log("botsing!")
    }
	}

   move() {
      if (keyIsDown(UP_ARROW)){
        this.yPos -= this.ySpeed;
      } else if (keyIsDown(DOWN_ARROW)){
        this.yPos += this.ySpeed;
      } else if (keyIsDown(LEFT_ARROW)){
        this.xPos -= this.xSpeed;
      } else if (keyIsDown(RIGHT_ARROW)){
        this.xPos += this.xSpeed;
      }

  }


  teken (){
    fill(this.color);
    ellipse (this.xPos, this.yPos, this.straal * 2, this.straal * 2)
  }

  update () {
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;

        if (this.xPos > width - this.straal || this.xPos < this.straal){
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > height - this.straal || this.yPos < this.straal){
      this.ySpeed = -this.ySpeed;
     // this.xSpeed = -this.xSpeed;
    }
  }
}
function setup() {
  createCanvas(400, 400);

  b1 = new Ball(200, 200, 40, "yellow", 10, 0)

   for(let = i = 0; i < ab; i++){
   let b = new Ball(random(10, 400), random(10,400), 20, color(random(255),random(255),random(255)), 0, random(1,5));
   ballen.push(b); 
  }
}

function draw() {
  background(220);

	for (var i = 0; i < ballen.length; i++){
    let bal = ballen[i];
    bal.teken();
    bal.update();
    bal.bots();

    }
	  b1.teken();
  	b1.move();
}
