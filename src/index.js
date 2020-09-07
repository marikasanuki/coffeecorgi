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
    canvasEle.width = 1300;
    canvasEle.height = 800;
    const ctx = canvasEle.getContext('2d');

    const caf = new Cafe(ctx, canvasEle);



    // const userTargetNum = document.getElementById("user-target-num").value;
    // console.log(userTargetNum);
    // const userTargetNum2 = document.getElementById("target-num-form").value;
    // console.log(userTargetNum2);
    // const userTargetNum3 = document.getElementById("submit-button").value;
    // console.log(userTargetNum3);


    // const targetButton = document.getElementById("submit-button");
    // targetButton.addEventListener("click", getTargetNum);
    // function getTargetNum(e) {
    //     let userTargetNum = document.getElementById("user-target-num").value;
    //     console.log(userTargetNum);
    //     let userTargetNum2 = e.target.value;
    //     console.log(userTargetNum2);
    // }


        // this.onSubmit.addEventListener('click', () => {
        //     this.submit-button
        // })
});







// const strokeSize = document.querySelector('.toolbar-spraysize-selector');
// strokeSize.addEventListener('change', chooseSize);
// function chooseSize(e) {
//     ctx.lineWidth = e.target.value;
// };





