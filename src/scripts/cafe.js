import BiggoRight from "./biggo-right";
import BiggoLeft from "./biggo-left";
import BiggoButt from "./biggo-butt";
import Cup from "./cup";

class Cafe {
    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        this.getUserTargetNum = this.getUserTargetNum.bind(this);
        this.numCups = 10;


        ctx.translate(0, 100);
        this.placeCups(ctx, canvasEle);
        ctx.translate(-850, 50);
        this.placeCups(ctx, canvasEle);
        ctx.translate(-500, -650);
        const biggoRight = new BiggoRight(ctx, canvasEle);

        // const biggoLeft = new BiggoLeft(ctx, canvasEle);
        // const biggoButt = new BiggoButt(ctx, canvasEle);


        setInterval(() => {
            biggoRight.move();
            // ctx.clearBiggo(0,0,)
        }, 20);

    }


    placeCups(ctx, canvasEle) {
        ctx.translate(100, 200);
        const coffeeCup = new Cup(ctx, canvasEle);
        let allCups = []

        for (let i = 0; i < this.numCups; i++) {
            allCups.push(coffeeCup);
            

            if (i < (this.numCups / 2)) {
                // ctx.save();
                // console.log(allCups[i]);
                allCups[i].drawCup(ctx, 150, 0);
            } //else {
                // ctx.save();
                //console.log(allCups[i]);
                //allCups[i].drawCup(ctx, -100, 50);
            //}
        }

    }


    getUserTargetNum() {
        const userTargetNum = document.getElementById("user-target-num").value;
        console.log(userTargetNum);
        debugger;
    }
}


export default Cafe;