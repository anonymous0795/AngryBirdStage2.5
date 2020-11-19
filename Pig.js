// pig child class inherits features from BaseClass Parent class
class Pig extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
      // adding image in the pig class
      this.image=loadImage("sprites/enemy.png");
    }
  };
  