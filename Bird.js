class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  //were are again writing display function because we wont to move the bird with the mouse. This concept is called overriding.
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //calling the display function of parent class, parent class is called a super in the child class
    super.display();
  }
}