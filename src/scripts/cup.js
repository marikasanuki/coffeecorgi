class Cup {

    constructor(ctx, canvasEle){
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        this.drawCup = this.drawCup.bind(this);
        this.drawBase = this.drawBase.bind(this);
    }

    drawBase(ctx) {
        ctx.save();
        ctx.translate(100, 40);
        this.drawCup();
        ctx.restore();
    }

    drawCup(ctx) {

        ctx.save();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "rgba(0, 0, 0, 1)";
        ctx.fillStyle = "rgb(58, 24, 24)";


        // 	top inner black ring
        ctx.save();
        ctx.translate(0, 0);
        ctx.scale(2, 0.4);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // 	top outer black ring	
        ctx.save();
        ctx.translate(0, 0);
        ctx.scale(2, 0.4);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 25, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.restore();

        //reflection ring
        ctx.save();
        ctx.translate(0, 10);
        ctx.scale(0.8, 0.15);
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, 1 * Math.PI, false);
        ctx.stroke();
        ctx.restore();

        //bottom black ring
        ctx.save();
        ctx.translate(0, 59);
        ctx.scale(1, 0.2);
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, 1 * Math.PI, false);
        ctx.stroke();
        ctx.restore();

        // 	left line of cup
        ctx.beginPath();
        ctx.moveTo(-50, 0);
        ctx.arcTo(-45, 45, 70, 115, 60);
        ctx.lineWidth = 2;
        ctx.stroke();

        // 	right line of cup
        ctx.beginPath();
        ctx.moveTo(50, 0);
        ctx.arcTo(45, 43, 28, 55, 69);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
    }







};

export default Cup; 