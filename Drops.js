class Drops{
    constructor(x,y){
        var options={
            restitution:1.0,
            friction:0,
        }
        this.body = Matter.Bodies.circle(x,y,3,options);
        World.add(world,this.body);
        this.radius=3;
    }
    display(){
        push();
        fill("Blue")
        ellipseMode("radius");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
      }

      updateDrop(){
          if(this.body.position.y>height){
              Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
          }
      }
}