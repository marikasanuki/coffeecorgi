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





    // const userTargetNum2 = document.getElementById("target-num-form").value;
    // console.log(userTargetNum2);

    // const targetButtonValue = document.getElementById("submit-button").value;
    // console.log(targetButtonValue);

    function getTargetNum() {
      alert("Submit button clicked!");
      return true;
    }

    
    // const targetButton = document.getElementById("submit-button");
    // targetButton.onclick = () => {
    //         const userTargetNum = document.getElementById("user-target-num")
    //           .value;
    //         console.log(userTargetNum);
    // };


    // function getTargetNum(e) {
    //     document.getElementById("user-target-num").value;
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





