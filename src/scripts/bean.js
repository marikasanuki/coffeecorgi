class Bean {

    constructor(){
        this.randomizedNums = this.randomizedNums.bind(this);
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

}

export default Bean;