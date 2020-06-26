import './styles/index.scss';
import Cafe from "./scripts/cafe";



document.addEventListener("DOMContentLoaded", function () {
    const canvasEle = document.getElementById('cc-cafe');
    canvasEle.width = 1300;
    canvasEle.height = 800;
    const ctx = canvasEle.getContext('2d');

    const caf = new Cafe(ctx, canvasEle);
});