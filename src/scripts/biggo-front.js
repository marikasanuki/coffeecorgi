// const POSITIONS = {
//     ROW1_X: 10,
//     ROW1_Y: 150,
//     ROW2_X: 10,
//     ROW3_Y: 350,
// };  

class BiggoFront {

    constructor(ctx, canvasEle) {

        this.ctx = ctx;
        this.canvasEle = canvasEle;

        // let biggoFrontSPath = "src/images/corgi-front-tongue-smile.png";
        // let biggoFrontS = new Image();
        // biggoFrontS.src = biggoFrontSPath;
        // biggoFrontS.onload = () => {
        //     ctx.drawImage(biggoFrontS, x + 200, y, size, size * biggoFrontS.height / biggoFrontS.width);
        // };

    }

    // 1) FIRST CHECK IDX5ELE
    //     IF TARGETNUM < IDX5ELE
    //         CHECK IDX2ELE;
    //                 IF TARGET NUM < IDX2ELE
    //                     CHECK IDX0ELE
    //                 ELSIF TARGET NUM > IDX2ELE 
    //                     CHECK IDX1ELE
    //                 ELSIF TARGET NUM == IDX2ELE
    //                     STAY AT IDX2ELE!!!
    //     ELSIF TARGET NUM > IDX5ELE
    //         CHECK IDX8ELE;
    //                 IF TARGET NUM < IDX8ELE
    //                     CHECK IDX6ELE
    //                 ELSIF TARGET NUM > IDX8ELE
    //                     CHECK IDX10ELE
    //                 ELSIF TARGET NUM == IDX8ELE
    //                     STAY AT IDX8ELE;
    //     ELSIF TARGET NUM == IDX5ELE
    //         STAY AT IDX5!!!;



    drawBiggoFront(idx){
        let size = 120;
        // let x = 0;
        // let y = 0;

        // debugger;
        if (idx === 0) {
            let x = -310;
            let y = 200;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 1) {
            let x = -165;
            let y = 200;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 2) {
            let x = -15;
            let y = 200;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 3) {
            let x = 135;
            let y = 200;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 4) {
            let x = 285;
            let y = 200;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 5) {
            let x = 435;
            let y = 200;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 6) {
            let x = -310;
            let y = 459;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 7) {
            let x = -165;
            let y = 459;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 8) {
            let x = -15;
            let y = 459;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 9) {
            let x = 135;
            let y = 459;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 10) {
            let x = 285;
            let y = 459;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        } else if (idx === 11) {
            let x = 435;
            let y = 459;
            let biggoFrontNPath = "src/images/corgi-front-tongue.png";
            let biggoFrontN = new Image();
            biggoFrontN.src = biggoFrontNPath;
            biggoFrontN.onload = () => {
                this.ctx.drawImage(biggoFrontN, x, y, size, size * biggoFrontN.height / biggoFrontN.width);
            };
        }
    }


    drawBiggoButt(){
        let x = 0;
        let y = 700;
        let size = 120;
        let biggoButtPath = "src/images/corgi-butt.png";
        let biggoButt = new Image();
        biggoButt.src = biggoButtPath;
        biggoButt.onload = () => {
            ctx.drawImage(biggoButt, x - 200, y, size, size * biggoButt.height / biggoButt.width);
        };
    }

    drawBiggoClosed(){
        let x = 0;
        let y = 700;
        let size = 120;
        let biggoFrontCPath = "src/images/corgi-front-neutral.png";
        let biggoFrontC = new Image();
        biggoFrontC.src = biggoFrontCPath;
        biggoFrontC.onload = () => {
            ctx.drawImage(biggoFrontC, x + 400, y, size, size * biggoFrontC.height / biggoFrontC.width);
        };
    }

}

export default BiggoFront;
