class BiggoRight {

    constructor(ctx, canvasEle) {

        this.ctx = ctx;
        this.canvasEle = canvasEle;

        let x = 0;
        let y = 0;
        let biggoRightPath = "src/images/corgi-right.png";
        let biggoRight = new Image();
        biggoRight.src = biggoRightPath;
        biggoRight.onload = function () {
        ctx.drawImage(biggoRight, x, y);
        };


    }



}

export default BiggoRight;
