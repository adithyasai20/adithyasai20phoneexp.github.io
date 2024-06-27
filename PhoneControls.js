class PhoneControls{
    constructor(canvas){
        this.tilt = 0;
        this.canvas = canvas;
        this.#addEventListeners();
        this.forward = true;
        this.reverse = false;
        this.canvasAngle = 0
    }
    #addEventListeners(){
        /*window.addEventListener('deviceorientation', (e) => {
            this.tilt = e.beta * Math.PI / 180;
            const canvasAngle = -this.tilt;
            this.canvas.style.transform = `translate(-50%, -50%) rotate(${canvasAngle}rad)`;


        });*/

        window.addEventListener('devicemotion', (e) => {
            this.tilt = Math.atan2(
                e.accelerationIncludingGravity.x,
                e.accelerationIncludingGravity.y
            );
            const newCanvasAngle = -this.tilt;
            this.canvasAngle = this.canvasAngle * 0.6 + newCanvasAngle * 0.4;
            this.canvas.style.transform = `translate(-50%, -50%) rotate(${this.canvasAngle}rad)`;


        });
        window.addEventListener('touchstart', (e)=>{
            this.forward = true;
            this.reverse = false;

        });
        window.addEventListener('touchend', (e)=>{
            this.forward = false;
            this.reverse = true;
        });
    }
}