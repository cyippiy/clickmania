import * as Util from './util.js';

class Circle {
    constructor( x, y, radius, color ){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() - 0.5) * 8;
        this.dy = (Math.random() - 0.5) * 8;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    //arr refers to the array of circles
    update(ctx,mouse, arr){
        let maxRadius = 50;
        let minRadius = 20;

        //handles circle collisions
        for (let i = 0; i < arr.length; i++){
            if (this === arr[i]) continue;
            if (Util.distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius * 2 < 0){
                Util.resolveCollision(this, arr[i]);
            }
        }

        //boundary
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //mouse logic
        if (mouse.x - this.x < 20 && mouse.x - this.x > -20
            && mouse.y-this.y < 20 && mouse.y - this.y > -20){
                // if (this.radius < maxRadius){
                //     this.radius += 1;
                // }
                console.log(this);
        } 
        // else if (this.radius > minRadius){
        //     this.radius -= 1;
        // }
    }
}

export default Circle;