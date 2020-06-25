class BiggoFront {

    constructor(ctx, canvasEle) {

        this.ctx = ctx;
        this.canvasEle = canvasEle;

        let x = 0;
        let y = 250;
        let biggoButtPath = "src/images/corgi-butt.png";
        let biggoButt = new Image();
        biggoButt.src = biggoButtPath;
        biggoButt.onload = () => {
        ctx.drawImage(biggoButt, x, y, 200, 200 * biggoButt.height / biggoButt.width);
        };


        let biggoFrontNPath = "src/images/corgi-front-neutral.png";
        let biggoFrontN = new Image();
        biggoFrontN.src = biggoFrontNPath;
        biggoFrontN.onload = () => {
            ctx.drawImage(biggoFrontN, x, y, 200, 200 * biggoFrontN.height / biggoFrontN.width);
        };

        let biggoFrontTPath = "src/images/corgi-front-tongue.png";
        let biggoFrontT = new Image();
        biggoFrontT.src = biggoFrontTPath;
        biggoFrontT.onload = () => {
            ctx.drawImage(biggoFrontT, x, y, 200, 200 * biggoFrontT.height / biggoFrontT.width);
        };

        let biggoFrontSPath = "src/images/corgi-front-tongue-smile.png";
        let biggoFrontS = new Image();
        biggoFrontS.src = biggoFrontSPath;
        biggoFrontS.onload = () => {
            ctx.drawImage(biggoFrontS, x, y, 200, 200 * biggoFrontS.height / biggoFrontS.width);
        };


    }



}

export default BiggoFront;
