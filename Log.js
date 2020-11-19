class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      this.image=loadImage("sprites/wood2.png");
      // log class needs an angle, so setting an angle over here
      Matter.Body.setAngle(this.body, angle);
    }
  }  