import BiggoRight from "./biggo-right";
import BiggoLeft from "./biggo-left";
import BiggoFront from "./biggo-front";
import Cup from "./cup";
import Bean from "./bean";

class Cafe {
    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
        this.generateSortedArr = this.generateSortedArr.bind(this);

        // PLACE THE CUPS ON CANVAS
        this.numCups = 10;
        this.ctx.translate(0, 100);
        this.placeCups(this.ctx, this.canvasEle);
        this.ctx.translate(-850, 50);
        this.placeCups(this.ctx, this.canvasEle);
        this.ctx.translate(-500, -650);
        this.ctx.restore();

        // PLACE THE BEANS ON CANVAS
        this.placeBeans(this.ctx, this.canvasEle, 372);
        this.placeBeans(this.ctx, this.canvasEle, 630);

        // GENERATE A SORTED ARRAY OF RANDOM NUMBERS FROM 0 TO 99
        const currentSortedArr = this.generateSortedArr(12);

        // PLACE NUMBERS FROM SORTED ARRAY ONTO BEANS
        setTimeout(() => {
            this.placeBeanNums1(currentSortedArr, 396);
            this.placeBeanNums2(currentSortedArr, 657);
        }, 500);

        // PLACE NUMBERS ON CUPS
        this.placeCupNums1(445);
        this.placeCupNums2(697);

        // RESET ARRAY BUTTON CLICK HANDLER
        // resetButton.onclick = (e) => {
        //     e.preventDefault();
        //     this.ctx.clearRect(0, 0, 500, 500);
        // };

        // SUBMIT BUTTON CLICK HANDLER: GRAB USER INPUT NUMBER
        let targetButton = document.getElementById("submit-button");

        targetButton.onclick = (e) => {
          e.preventDefault();

          targetButton.disabled = true; //CAN'T CLICK SUBMIT BUTTON MORE THAN ONCE

          let userTargetNum = Number(
            document.getElementById("user-target-num").value
          ); //converts input string to number

          let currentTargetNum = userTargetNum;
          const biggoLeft = new BiggoLeft(this.ctx, this.canvasEle);
          biggoLeft.moveLeft();
          const biggoRight = new BiggoRight(this.ctx, this.canvasEle);
          setTimeout(() => {
            biggoRight.moveRight();
          }, 4500);

          // const randomTargetNum = this.selectRandEle(currentSortedArr); //to implement a random target number button in the future

          //Actually use bSearch on array and user's current target num if they submitted an actual number
          const answerIndex = this.binarySearch(
            currentSortedArr,
            currentTargetNum
          );

          if (answerIndex === undefined || Number.isNaN(answerIndex) ) {
                //WHEN NON-NUMBERS/NaN IS SUBMITTED
                console.log("Input not found in array.");
                setTimeout(() => {
                    this.drawRandEle("Biggo searched, but did not find the input " + document.getElementById("user-target-num").value + ".", -90, 167);
                }, 9000);

          } else {
                this.drawRandEle(
                    "Biggo is currently searching for this bean (target number): Bean " +
                    currentTargetNum +
                    ".",
                    -330,
                    140
                );
          
          // this.drawRandEle("Answer: Which index houses the target number (Bean " + currentTargetNum + ")? Cup " + answerIndex + ".", -330, 196);
          this.drawRandEle(
            "Which cup (index position) houses Bean " + currentTargetNum + "?",
            -330,
            167
          );

            // front-facing biggo appears in front of correct answer index/bean/cup
            const biggoFront = new BiggoFront(this.ctx, this.canvasEle);
            setTimeout(() => {
              biggoFront.drawBiggoFront(answerIndex);
              this.drawRandEle("Answer: Cup " + answerIndex + ".", 340, 167);
            }, 9000);

            // this.drawSortedArray(currentSortedArr, -130, 195); //CODE FOR SHOWING ACTUAL ARRAY AT TOP.
          }
        };

        
    }



    generateSortedArr(num) {
        const sortedArr = [];

        while (sortedArr.length < num) {
            let randNum = Math.floor(Math.random() * 99)

            if (!sortedArr.includes(randNum)) {
                sortedArr.push(randNum);
            }
        }
        return sortedArr.sort(function (a, b) { return a - b });
    }

    drawSortedArray(sortedArr, x, y){
        this.ctx.font = '18px Rubik';
        this.ctx.fillStyle = "rgb(58, 24, 24)";
        this.ctx.fillText('Menu Array: [' + sortedArr + ']', x, y);
    }


    placeCups(ctx, canvasEle) {
        ctx.translate(100, 200);
        const coffeeCup = new Cup(ctx, canvasEle);

        let allCups = [];

        for (let i = 0; i < this.numCups; i++) {
            allCups.push(coffeeCup);
            if (i < (this.numCups / 2)) {
                allCups[i].drawCup(ctx, 150, 0);
            } //else {
            // ctx.save();
            //console.log(allCups[i]);
            //allCups[i].drawCup(ctx, -100, 50);
            //}
        }
        ctx.restore();
    }

    placeCupNums1(y) {
        let x = -256;
        this.ctx.fillStyle = "#000000";
        for (let i = 0; i < 6; i++) {
            this.ctx.fillText(i, x, y);
            x += 150;
        }
    }

    placeCupNums2(y) {
        let x = -256;
        this.ctx.fillStyle = "#000000";
        for (let i = 6; i < 12; i++) {
            this.ctx.fillText(i, x, y);
            x += 150;
        }
    }

    placeBeans(ctx, canvasEle, y) {
        const soloBean = new Bean(ctx, canvasEle);
        let allBeans = [];
        let x = -270;
        for (let i = 0; i < 6; i++) {
            allBeans.push(soloBean);
            allBeans[i].drawBean(ctx, x, y);
            x += 151;
        }
    }
    
    placeBeanNums1(sortedArr, y) {
        let x = -258;
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = '20px Rubik';
        for (let i = 0; i < sortedArr.length/2 ; i++) {
            const element = sortedArr[i];
            // this.ctx.fillStyle = "#ffffff";
            this.ctx.fillText(element, x, y);
            x += 150;
        }
    }

    placeBeanNums2(sortedArr, y) {
        let x = -260;
        this.ctx.fillStyle = "#ffffff";

        for (let i = sortedArr.length / 2; i < sortedArr.length; i++) {
            const element = sortedArr[i];
            this.ctx.fillText(element, x, y);
            x += 151;
        }
    }

    selectRandEle(sortedArr) {
        //select rand idx
        const idx = Math.floor(Math.random() * sortedArr.length);
        return sortedArr[idx];
    }

    drawRandEle(ele, x, y) {
        this.ctx.fillStyle = "rgb(58, 24, 24)";
        this.ctx.font = '18px Rubik';
        this.ctx.fillText(ele, x, y);
    }

    binarySearch(sortedArray, target) {
        // if (sortedArray.length === 0) {
        //     return -1;
        // }
        // this.ctx.fillText(sortedArray, -280, 160);

        console.log(sortedArray);
        const midIndex = Math.floor(sortedArray.length / 2); //For JS, if we half an odd number, it'll return a decimal, so we're using Math.floor to round down to a whole number


        if (sortedArray[midIndex] === target) {
            // biggoFront.drawBiggoFront(midIndex); //This is a twelve cup array, so we'll start at the midIndex of cup 5
            
            // debugger;
            return midIndex;



        } else if (sortedArray[midIndex] > target) {
            // biggoFront.drawBiggoFront(midIndex);
            return this.binarySearch(sortedArray.slice(0, midIndex), target);




        } else if (sortedArray[midIndex] < target) {
            const rightSide = this.binarySearch(sortedArray.slice(midIndex + 1), target);
            if (rightSide === -1) {
                return -1;
            } else {
                const finalIdx = rightSide + midIndex + 1;
                // biggoFront.drawBiggoFront(finalIdx);
                // debugger;
                return finalIdx;
            }
        }


    }




}


export default Cafe;