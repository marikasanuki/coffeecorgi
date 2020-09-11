import './styles/index.scss';
import Cafe from "./scripts/cafe";

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("close-modal-icon");
    closeModalBtn.onclick = () => {
        modal.style.display = "none"; //hide modal from document
    };

    const openModalBtn = document.getElementById("open-modal-icon");
    openModalBtn.onclick = () => {
        modal.style.display = "block";
    };

    const canvasEle = document.getElementById('cc-cafe');
    canvasEle.width = 1000;
    canvasEle.height = 800;
    const ctx = canvasEle.getContext('2d');
    const caf = new Cafe(ctx, canvasEle);

});