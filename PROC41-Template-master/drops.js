class Drops {
    constructor(x,y){
    var options = {
        friction:.01,
      
    }
        this.body = Bodies.circle(x,y,4,options);
        this.radius = 4;
        World.add(world,this.body);
    }


    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        if(this.body.position.y > 785){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)})

        }
        if (this.body.speed > 1.5){
            this.body.speed = 1.5
        }
      /*  if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)})
        }*/
    }
}