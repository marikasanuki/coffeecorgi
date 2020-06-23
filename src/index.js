import './styles/index.scss';
import BiggoRight from "./scripts/biggo-right";
import BiggoLeft from "./scripts/biggo-left";
import BiggoButt from "./scripts/biggo-butt";
import Cafe from "./scripts/cafe";
import Cup from "./scripts/cup";

document.addEventListener("DOMContentLoaded", function () {
    const canvasEle = document.getElementById('cc-cafe');
    canvasEle.width = 1000;
    canvasEle.height = 800;

    const ctx = canvasEle.getContext('2d');

    let biggoRight = new BiggoRight(ctx, canvasEle);
    let biggoLeft = new BiggoLeft(ctx, canvasEle);
    let biggoButt = new BiggoButt(ctx, canvasEle);
    let cuptest = new Cup(ctx, canvasEle);
    cuptest.drawBase(ctx);

    setInterval(() => {
        biggoRight.move();
        // ctx.clearBiggo(0,0,)
    }, 20);




    console.log("Webpack is working!")

});