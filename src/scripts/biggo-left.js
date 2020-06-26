class BiggoLeft {

    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        // this.ctx.translate(0, 0);

        this.moveLeft = this.moveLeft.bind(this);
        this.x = 950;
        this.y = 458;
    }

    moveLeft() {
        let biggoLeftPath = "src/images/corgi-left.png";
        let biggoLeft = new Image();
        biggoLeft.src = biggoLeftPath;
        biggoLeft.onload = () => {
            // this.ctx.fillRect(this.x, this.y, 295, 295 * biggoLeft.height / biggoLeft.width);
            this.ctx.clearRect(-500, 465, 2000, 170);
            this.ctx.drawImage(biggoLeft, this.x, this.y, 295, 295 * biggoLeft.height / biggoLeft.width);
        };
        this.x -= 6;
        requestAnimationFrame(this.moveLeft);

    }

    clearBiggo() {
        cancelAnimationFrame(this.moveLeft);
    }

}

export default BiggoLeft;
