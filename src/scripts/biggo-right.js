class BiggoRight {

    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;

        this.moveRight = this.moveRight.bind(this);
        this.x = -800;
        this.y = 710;
    }
    
    moveRight() {    
        let biggoRightPath = "src/images/corgi-right.png";
        let biggoRight = new Image();
        biggoRight.src = biggoRightPath;
        biggoRight.onload = () => {
            // this.ctx.fillRect(-500, 200, 2000, 180);
            this.ctx.clearRect(-500, this.y + 7, 2000, 180);
            this.ctx.drawImage(biggoRight, this.x, this.y, 300, 300 * biggoRight.height / biggoRight.width);
        };
        this.x += 6;
        requestAnimationFrame(this.moveRight);
    }
    
}

export default BiggoRight;
