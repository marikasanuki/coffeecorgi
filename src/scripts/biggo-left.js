class BiggoLeft {

    constructor(ctx, canvasEle) {
        ctx.translate(0, 0);
        this.ctx = ctx;
        this.canvasEle = canvasEle;

        this.moveLeft = this.moveLeft.bind(this);
        this.x = 50;
        this.y = 150;


    }

    moveLeft() {
        console.log("left test")

        let biggoLeftPath = "src/images/corgi-left.png";
        let biggoLeft = new Image();
        biggoLeft.src = biggoLeftPath;
        biggoLeft.onload = () => {
            // this.ctx.clearRect(-500, -50, 2000, 400);
            this.ctx.drawImage(biggoLeft, this.x, this.y, 300, 300 * biggoLeft.height / biggoLeft.width);
        };
        this.x -= 3;
        requestAnimationFrame(this.moveLeft);

    }

}

export default BiggoLeft;
