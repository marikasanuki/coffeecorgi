class Cafe {
    constructor(ctx, canvasEle) {
        this.ctx = ctx;
        this.canvasEle = canvasEle;
    }

    getUserTargetNum() {
        const userTargetNum = document.getElementById("user-target-num").value;
        console.log(userTargetNum);
        debugger;
    }
}

export default Cafe;