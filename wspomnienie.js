class Wspomnienie{
  constructor(x,y,obraz){
  this.x = x;
  this.y = y;
  this.obraz = obraz;
  this.r = max(this.obraz.width, this.obraz.height);
  this.inTheBox = false;

}
  
  show(){
    //fill(210);
    //noStroke();
    //circle(this.x,this.y,this.r);
    image(this.obraz, this.x-this.obraz.width/2, this.y-this.obraz.height/2)
  }
  
  checkBox(){
    if (this.x > 818 && this.x < 1102 && this.y > 432 && this.y < 614){
    this.inTheBox = true
    } else{this.inTheBox = false}
  }
  
  mouseInCircle() {
  return dist(mouseX, mouseY, this.x, this.y) < this.r


}
  
}

