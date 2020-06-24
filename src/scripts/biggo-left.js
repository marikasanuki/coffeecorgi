class BiggoLeft {

    constructor(ctx, canvasEle) {
        ctx.translate(0, 0);
        this.ctx = ctx;
        this.canvasEle = canvasEle;

        let x = 0;
        let y = 0;
        let biggoLeftPath = "src/images/corgi-left.png";
        let biggoLeft = new Image();
        biggoLeft.src = biggoLeftPath;
        biggoLeft.onload = () => {
        ctx.drawImage(biggoLeft, x, y, 300, 300 * biggoLeft.height / biggoLeft.width);
        };


    }



}

export default BiggoLeft;
