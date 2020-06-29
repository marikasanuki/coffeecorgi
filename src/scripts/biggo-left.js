class BiggoLeft {

    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        // this.ctx.translate(0, 0);

        this.moveLeft = this.moveLeft.bind(this);
        this.x = 950;
        this.y = 710;
    }

    moveLeft() {
        let biggoLeftPath = "src/images/corgi-left.png";
        let biggoLeft = new Image();
        biggoLeft.src = biggoLeftPath;
        biggoLeft.onload = () => {
            // this.ctx.fillRect(this.x, this.y, 295, 295 * biggoLeft.height / biggoLeft.width);
            this.ctx.clearRect(-500, this.y + 7, 2000, 170);
            this.ctx.drawImage(biggoLeft, this.x, this.y, 295, 295 * biggoLeft.height / biggoLeft.width);
        };
        this.x -= 6;

        const animationID = requestAnimationFrame(this.moveLeft);
        
        // setTimeout(() => {
        //     cancelAnimationFrame(animationID); 

        // }, 8);


    }

    // clearBiggo() {
    //     cancelAnimationFrame(this.moveLeft);
    // }

}

export default BiggoLeft;
