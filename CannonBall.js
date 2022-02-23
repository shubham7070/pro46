class CannonBall {
    constructor(x, y) {
        var options = {
            isStatic: true

        }
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options)
        World.add(world, this.body);
        this.image = loadImage("cannon ball_1.png");
    }

    display() {
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }
}