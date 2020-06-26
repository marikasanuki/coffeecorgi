import BiggoRight from "./biggo-right";
import BiggoLeft from "./biggo-left";
import BiggoFront from "./biggo-front";
import Cup from "./cup";
import Bean from "./bean";

        // 1) on submit
        // 2) call biggoLeft.moveLeft();
        // 3) call biggoRight.moveRight();

class Cafe {
    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        this.numCups = 10;

        const biggoFront = new BiggoFront(this.ctx, this.canvasEle);

        const biggoLeft = new BiggoLeft(this.ctx, this.canvasEle);
        biggoLeft.moveLeft();

        const biggoRight = new BiggoRight(this.ctx, this.canvasEle);
        setTimeout(() => {
            biggoRight.moveRight();
        }, 4500);

        this.ctx.translate(0, 100);
        this.placeCups(this.ctx, this.canvasEle);
        this.ctx.translate(-850, 50);
        this.placeCups(this.ctx, this.canvasEle);
        this.ctx.translate(-500, -650);
        this.ctx.restore();
        this.placeBeans(this.ctx, this.canvasEle, 365);
        this.placeBeans(this.ctx, this.canvasEle, 635);

        // this.onSubmit.addEventListener('click', () => {
        //     this.submit-button
        // })

        // this.submitTargetNum = document.getElementById('submit-button');
        // this.submitTargetNum.onclick = this.laLaLa.bind(this);

        // const userTargetNum = document.getElementById("user-target-num").value;
        // console.log(userTargetNum);
    }

    // drawSortedArray(){
    //     this.ctx.fillText(beantest.randomizedNums(12))
    // }

    placeBeans(ctx, canvasEle, y) {
        // ctx.translate(100, 200);
        const soloBean = new Bean(ctx, canvasEle);
        let allBeans = [];
        let x = -280;
        for (let i = 0; i < 6; i++) {

            allBeans.push(soloBean);
            allBeans[i].drawBean(ctx, x, y);
            x += 156;
        }
        // ctx.restore();

        // const beantest = new Bean(this.ctx, this.canvasEle)
        // beantest.drawBean(ctx, 100, 150);

        // const sortedArray = beantest.randomizedNums(12);
        // this.ctx.font = '14px Rubik';
        // this.ctx.fillStyle = "rgb(58, 24, 24)";
        // this.ctx.fillText('Menu (sorted array): [' + sortedArray + ']', 150, 20);
        // console.log(sortedArray);
    }

    placeCups(ctx, canvasEle) {
        ctx.translate(100, 200);
        const coffeeCup = new Cup(ctx, canvasEle);

        let allCups = [];


        for (let i = 0; i < this.numCups; i++) {
            allCups.push(coffeeCup);
            // allBeans.push(soloBean);

            if (i < (this.numCups / 2)) {
                // ctx.save();
                // console.log(allCups[i]);
                allCups[i].drawCup(ctx, 150, 0);
                // allBeans[i].drawBean(ctx, 150, 0);
            } //else {
            // ctx.save();
            //console.log(allCups[i]);
            //allCups[i].drawCup(ctx, -100, 50);
            //}
        }
        ctx.restore();
    }



    placeTrays() {

    }


    play() {
        //once user clicks button/submit, it will invoke play function
    }




}


export default Cafe;