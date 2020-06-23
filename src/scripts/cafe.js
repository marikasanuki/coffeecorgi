import BiggoRight from "./biggo-right";
import BiggoLeft from "./biggo-left";
import BiggoButt from "./biggo-butt";
import Cup from "./cup";

class Cafe {
    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        this.getUserTargetNum = this.getUserTargetNum.bind(this);

        const biggoRight = new BiggoRight(ctx, canvasEle);
        const biggoLeft = new BiggoLeft(ctx, canvasEle);
        const biggoButt = new BiggoButt(ctx, canvasEle);
        const cuptest0 = new Cup(ctx, canvasEle);
        const cuptest1 = new Cup(ctx, canvasEle);
        const cuptest2 = new Cup(ctx, canvasEle);
        const cuptest3 = new Cup(ctx, canvasEle);
        const cuptest4 = new Cup(ctx, canvasEle);
        // const cuptest5 = new Cup(ctx, canvasEle);
        // const cuptest6 = new Cup(ctx, canvasEle);
        // const cuptest7 = new Cup(ctx, canvasEle);
        // const cuptest8 = new Cup(ctx, canvasEle);
        // const cuptest9 = new Cup(ctx, canvasEle);

        setInterval(() => {
            biggoRight.move();
            // ctx.clearBiggo(0,0,)
        }, 20);

        // cuptest.drawBase(ctx);

    }

    getUserTargetNum() {
        const userTargetNum = document.getElementById("user-target-num").value;
        console.log(userTargetNum);
        debugger;
    }
}

export default Cafe;