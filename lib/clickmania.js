import Circle from './circle.js';
import { log, inherits } from 'util';

document.addEventListener("DOMContentLoaded",() => {
    let canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let c = canvas.getContext('2d');

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

    let mouse = {
        x: undefined,
        y: undefined
    }

    window.addEventListener("mousemove", (e) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener("resize", (e) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init();
    })

    let getRandomColor = () => {
        let letter = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++){
            color += letter[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let circleArray = [];
    let init = () => {  
        circleArray = [];
        let radius = 30;
        for (let i = 0; i < 200; i++){
            let x = Math.random() * (innerWidth - radius*2)+ radius;
            let y = Math.random() * (innerHeight - radius*2) + radius;
            circleArray.push(new Circle(x,y,radius,getRandomColor()))
        }
    }

    let animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);

        for (let i = 0; i < circleArray.length; i++){
            circleArray[i].draw(c);
            circleArray[i].update(c,mouse);
        }
    }

    animate();
});