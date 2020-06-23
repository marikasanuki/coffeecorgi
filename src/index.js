import './styles/index.scss';
import BiggoRight from "./scripts/biggo-right";
import BiggoLeft from "./scripts/biggo-left";
import BiggoButt from "./scripts/biggo-butt";
import Cafe from "./scripts/cafe";

document.addEventListener("DOMContentLoaded", function () {
    const canvasEle = document.getElementById('cc-cafe');
    canvasEle.width = 1000;
    canvasEle.height = 800;

    const ctx = canvasEle.getContext('2d');

    let biggoRight = new BiggoRight(ctx, canvasEle);
    let biggoLeft = new BiggoLeft(ctx, canvasEle);
    let biggoButt = new BiggoButt(ctx, canvasEle);

    setInterval(() => {
        biggoRight.move();
        // ctx.clearBiggo(0,0,)
    }, 20);



    // debugger;
    // ctx.fillStyle = "purple";
    // ctx.fillRect(0, 0, 1000, 800);

    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();
    console.log("Webpack is working!")

});