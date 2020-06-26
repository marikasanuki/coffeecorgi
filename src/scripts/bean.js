class Bean {

    constructor(ctx, canvasEle, userTargetNum){
        this.randomizedNums = this.randomizedNums.bind(this);
        this.ctx = ctx;
        this.canvasEle = canvasEle;
   


    }

    randomizedNums(num) {
        const beanArray = [];

        while (beanArray.length < num) {
            let randNum = Math.floor(Math.random() * 99)

            if (!beanArray.includes(randNum)) {
                beanArray.push(randNum);
            }
        }
        return beanArray.sort(function (a, b) { return a - b });
    }

    selectRandIdx(sortedArr) {
        Math.floor(Math.random() * sortedArr.length);
    }



    binarySearch(sortedArray, target) {
        if (sortedArray.length === 0) {
            return -1;
        }
        const midIndex = Math.floor(sortedArray.length / 2);
        if (sortedArray[midIndex] === target) {
            return midIndex;
        } else if (sortedArray[mid] > target) {
            return binarySearch(sortedArray.slice(0, midIndex), target);
        } else if (sortedArray[midIndex] < target) {
            const rightSide = binarySearch(sortedArray.slice(midIndex + 1), target);
            if (rightSide === -1) {
                return -1;
            } else {
                return rightSide + midIndex + 1;
            }
        }
    }

    drawBean(ctx, posX, posY){
        // let posX = -500;
        // let posY = 150;

        ctx.font = '14px Rubik';
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.fillText("bean id #", 495, 30)



        let soloBeanPath = "src/images/solo-bean.png";
        let soloBean = new Image();
        soloBean.src = soloBeanPath;
        soloBean.onload = () => {
            ctx.drawImage(soloBean, posX, posY, 35, 35 * soloBean.height / soloBean.width);
        };
    }

}

export default Bean;