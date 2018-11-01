import Circle from './circle.js';
import { log, inherits } from 'util';
import * as Util from './util.js';

document.addEventListener("DOMContentLoaded",() => {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let c = canvas.getContext("2d");
    // c.fillStyle = 'rgba(255,0,0,0.5)';
    // c.fillRect(100,100, 100, 100);
    // c.fillStyle = 'rgba(0,0,255,0.5)';
    // c.fillRect(400,100, 100, 100);
    // c.fillStyle = 'rgba(0,255,0,0.5)';
    // c.fillRect(300,300, 100, 100);
    // console.log(canvas);

    // c.beginPath();
    // c.moveTo(50,300);
    // c.lineTo(300,100);
    // c.lineTo(400,300);
    // c.strokeStyle = "#fa34a3";
    // c.stroke();

    // c.beginPath();
    // c.arc(300,300, 30, 0, Math.PI * 2, false);
    // c.strokeStyle = 'blue';
    // c.stroke();

    // for (let i = 0; i < 100; i++){
    //     let x = Math.random() * window.innerWidth;
    //     let y = Math.random() * window.innerHeight;
    //     c.beginPath();
    //     c.arc(x, y, 30, 0, Math.PI * 2, false);
    //     c.strokeStyle = 'blue';
    //     c.stroke();
    // }

    // let circle = new Circle(200,200, 30, "blue");



    let mouse = { x: undefined, y: undefined };

    window.addEventListener(
        "mousemove",
        e => {
            mouse.x =
            event.x;
            mouse.y =
            event.y;
        }
    );

    window.addEventListener(
        "resize",
        e => {
            canvas.width =
            window.innerWidth;
            canvas.height =
            window.innerHeight;

            init();
        }
    );

    let getRandomColor = () => {
        let letter = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)];
        }
    return color;
    };

    //distance between two circles can be
    //calculated with pythagorean theorem
    //distance^2 = a^2 + b^2
    //distance = sqrt(a^2 + b^2)
    // let distance = (x1, y1, x2, y2) => {
    //     let xDist = x2 - x1;
    //     let yDist = y2 - y1;

    //     return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    // };

    let circleArray = [];
    let init = () => {
        circleArray = [];
        let radius = 10;
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * (innerWidth - radius * 2) + radius;
            let y = Math.random() * (innerHeight - radius * 2) + radius;
            if (i !== 0) {
            for (let j = 0; j < circleArray.length; j++) {
                if (Util.distance(x, y, circleArray[j].x, circleArray[j].y) - radius * 2 < 0) {
                    x = Math.random() * (innerWidth - radius * 2) + radius;
                    y = Math.random() * (innerWidth - radius * 2) + radius;
                    j = -1;
                }
            }
            }
            circleArray.push(new Circle(x, y, radius, getRandomColor()));
        }
    };

    let animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].draw(c);
            circleArray[i].update(c, mouse, circleArray);
        }
    };
    init();
    animate();
});