class Circle{
    constructor(radius) {
        this.radius=radius;
    }
    drawcircle(x,y,radius){
        let a=document.getElementById("id");
        let ctx=a.getContext("2d");
        ctx.fillStyle="#ffff00"
        ctx.arc(60,40,this.radius,0,2*Math.PI,);
        // ctx.fill()
        ctx.stroke()

    }
}
let hinhtron=new Circle(30);
hinhtron.drawcircle()