class Hammer {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':3,
        'density':2
      }
      this.body = Bodies.rectangle(x, y, 120, 40, options);
      this.width = 120;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX
      pos.y = mouseY
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("white")
      strokeWeight(4)
  
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };