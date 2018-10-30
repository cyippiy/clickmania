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

    update(ctx,mouse){
        let maxRadius = 50;
        let minRadius = 5;
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y-this.y < 50 && mouse.y - this.y > -50){
                if (this.radius < maxRadius){
                    this.radius += 1;
                }
        } else if (this.radius > minRadius){
            this.radius -= 1;
        }
    }
}

export default Circle;