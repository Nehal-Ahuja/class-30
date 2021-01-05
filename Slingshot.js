class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);

            if(pointA.x<220){
                strokeWeight(6);
                line(pointA.x-20, pointA.y, pointB.x+50, pointB.y+20);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y+25);
                image(this.sling3,pointA.x-25,pointA.y-5,10,20);
            } 
            else{
                strokeWeight(3);
                line(pointA.x-20, pointA.y, pointB.x+50, pointB.y+20);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y+25);
                image(this.sling3,pointA.x-25,pointA.y-5,10,20); 
            }
        }
        image(this.sling1,200,40,60,190);
        image(this.sling2,160,45,60,110);
        
    }
    
}