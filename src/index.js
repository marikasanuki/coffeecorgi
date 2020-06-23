import './styles/index.scss';
import Cafe from "./scripts/cafe";
import Bean from "./scripts/bean";


document.addEventListener("DOMContentLoaded", function () {
    const canvasEle = document.getElementById('cc-cafe');
    canvasEle.width = 1300;
    canvasEle.height = 700;
    const ctx = canvasEle.getContext('2d');
    
    const caf = new Cafe(ctx, canvasEle);


    console.log("Webpack is working!")

});