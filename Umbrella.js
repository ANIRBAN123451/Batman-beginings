class Umbrella{
    constructor(x,y){
        var options={
                isStatic:true
        }
        this.body = Matter.Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.image=loadImage("images/Walking Frame/walking_1.png")
    }
    display(){
        push();
        imageMode("center");
        image(this.image,this.body.position.x,this.body.position.y,300,300);
        pop();
      }
}