class Bean {

    constructor(ctx, canvasEle, userTargetNum){
        this.ctx = ctx;
        this.canvasEle = canvasEle;
    }


    drawBean(ctx, posX, posY){
        // let posX = -500;
        // let posY = 150;

        ctx.font = '14px Rubik';
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.fillText("bean id #", 495, 30)

        let soloBeanPath = "src/images/solo-bean-glow.png";
        let soloBean = new Image();
        soloBean.src = soloBeanPath;
        soloBean.onload = () => {
            ctx.drawImage(soloBean, posX, posY, 40, 40 * soloBean.height / soloBean.width);
        };
    }

}

export default Bean;