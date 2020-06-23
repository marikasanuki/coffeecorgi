import './styles/index.scss';
import BiggoRight from "./scripts/biggo-right";
import BiggoLeft from "./scripts/biggo-left";
import BiggoButt from "./scripts/biggo-butt";
import Cafe from "./scripts/cafe";
import Cup from "./scripts/cup";

document.addEventListener("DOMContentLoaded", function () {
    const canvasEle = document.getElementById('cc-cafe');
    canvasEle.width = 1300;
    canvasEle.height = 800;
    const ctx = canvasEle.getContext('2d');

    const caf = new Cafe(ctx, canvasEle);

    console.log("Webpack is working!")

});