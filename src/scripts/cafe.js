import BiggoRight from "./biggo-right";
import BiggoLeft from "./biggo-left";
import BiggoFront from "./biggo-front";
import Cup from "./cup";
import Bean from "./bean";

class Cafe {
    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;

        const beantest = new Bean(ctx, canvasEle)
        beantest.drawBean(ctx, 100, 100);

        const sortedArray = beantest.randomizedNums(12);
        ctx.font = '14px Rubik';
        ctx.fillStyle = "rgb(58, 24, 24)";
        ctx.fillText('[' + sortedArray + ']', 150, 20);

        console.log(sortedArray);

        this.numCups = 10;

        const biggoRight = new BiggoRight(ctx, canvasEle);
        biggoRight.moveRight();
        // const biggoLeft = new BiggoLeft(ctx, canvasEle);
        const biggoFront = new BiggoFront(ctx, canvasEle);

        ctx.translate(0, 100);
        this.placeCups(ctx, canvasEle);
        ctx.translate(-850, 50);
        this.placeCups(ctx, canvasEle);
        ctx.translate(-500, -650);
        ctx.restore();

        setInterval(() => {
            // biggoRight.move();
            // ctx.clearBiggo(0,0,)
        }, 20);

    }

    // drawSortedArray(){
    //     this.ctx.fillText(beantest.randomizedNums(12))
    // }

    placeCups(ctx, canvasEle) {
        ctx.translate(100, 200);
        const coffeeCup = new Cup(ctx, canvasEle);
        const soloBean = new Bean(ctx, canvasEle);
        let allCups = [];
        let allBeans = [];

        for (let i = 0; i < this.numCups; i++) {
            allCups.push(coffeeCup);
            allBeans.push(soloBean);

            if (i < (this.numCups / 2)) {
                // ctx.save();
                // console.log(allCups[i]);
                allCups[i].drawCup(ctx, 150, 0);
                allBeans[i].drawBean(ctx, 150, 0);
            } //else {
                // ctx.save();
                //console.log(allCups[i]);
                //allCups[i].drawCup(ctx, -100, 50);
            //}
        }
        ctx.restore();
    }

    placeTrays(){

    }


}


export default Cafe;