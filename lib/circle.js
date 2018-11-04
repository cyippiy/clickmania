import * as Util from './util.js';

class Circle {
    constructor( x, y, radius, color ){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        //might be unnecessary
        this.clicked = false;
        this.dx = (Math.random() - 0.5) * 8;
        this.dy = (Math.random() - 0.5) * 8;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }



    duplicate(arr){
        let new_x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
        let new_y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
        for (let i = 0; i < 2; i++){
            // duplicate
            while (Util.posCircleCheck(new_x,new_y,arr,this.radius)===false){
                new_x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
                new_y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
            }
            let temp = new Circle(new_x,new_y,this.radius, Util.getRandomColor());
            arr.push(temp);
        }
        return arr;
    }

    //arr refers to the array of circles
    update(mouse, arr){
        let maxRadius = 50;
        let minRadius = 20;

        //handles circle collisions
        for (let i = 0; i < arr.length; i++){
            if (this === arr[i]) continue;
            if (Util.distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius * 2 < 0){
                if (this.clicked === false && arr[i].clicked === false){
                    Util.resolveCollision(this, arr[i]);
                }
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
                if (this.clicked === false){
                    console.log(`old array length: ${arr.length}`);
                    this.color = 'white';
                    this.clicked = true;
                    this.duplicate(arr);
                    let val = arr.findIndex( (el) => el === this );
                    arr.splice(val, 1);
                    console.log(`new array length: ${arr.length}`);
                }
            
        } 
        // else if (this.radius > minRadius){
        //     this.radius -= 1;
        // }
    }
}

export default Circle;