class BiggoRight {

    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;

        this.moveRight = this.moveRight.bind(this);
        this.x = -500;
        this.y = 150;


    }
    
    // debugger;
    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(-500, -50, this.canvasEle.width, this.canvasEle.height);

    moveRight() {
        console.log("animation test")
        
        let biggoRightPath = "src/images/corgi-right.png";
        let biggoRight = new Image();
        biggoRight.src = biggoRightPath;
        biggoRight.onload = () => {
            this.ctx.clearRect(-500, -50, 2000, 400);
            this.ctx.drawImage(biggoRight, this.x, this.y, 300, 300 * biggoRight.height / biggoRight.width);
        };
        this.x += 3;
        requestAnimationFrame(this.moveRight);

    }

    // debugger;
    // this.ctx.save();
    // this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            // this.ctx.clearRect(-500, -50, this.canvasEle.width, 400); 
    // this.ctx.restore();


    clearBiggo(){}
    

}

export default BiggoRight;
