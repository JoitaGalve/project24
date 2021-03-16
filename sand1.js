class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.2,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
        
        stroke("black")
        strokeWeight(2)
        
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(this.body.position.x, this.body.position.y, this.radius );
    
    }
  };