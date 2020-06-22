class BiggoLeft {

    constructor(ctx, canvasEle) {

        this.ctx = ctx;
        this.canvasEle = canvasEle;

        let x = 0;
        let y = 0;
        let biggoLeftPath = "src/images/corgi-left.png";
        let biggoLeft = new Image();
        biggoLeft.src = biggoLeftPath;
        biggoLeft.onload = function () {
        ctx.drawImage(biggoLeft, x, y);
        };


    }



}

export default BiggoLeft;
