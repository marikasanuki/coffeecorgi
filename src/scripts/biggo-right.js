class BiggoRight {

    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;

        // this.pos = [0,0];

        let x = -500;
        let y = 150;
        let biggoRightPath = "src/images/corgi-right.png";
        let biggoRight = new Image();
        biggoRight.src = biggoRightPath;
        biggoRight.onload = function () {
            ctx.drawImage(biggoRight, x, y, 400, 400 * biggoRight.height / biggoRight.width);
        };
    }

    move(x, y){
        this.ctx.moveTo(x, y);
    }

    clearBiggo(){}
    

}

export default BiggoRight;
