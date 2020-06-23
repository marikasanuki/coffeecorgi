class BiggoButt {

    constructor(ctx, canvasEle) {

        this.ctx = ctx;
        this.canvasEle = canvasEle;

        let x = 0;
        let y = 300;
        let biggoButtPath = "src/images/corgi-butt.png";
        let biggoButt = new Image();
        biggoButt.src = biggoButtPath;
        biggoButt.onload = function () {
        ctx.drawImage(biggoButt, x, y, 300, 300 * biggoButt.height / biggoButt.width);
        };


    }



}

export default BiggoButt;
