class Paper {
    constructor(x, y){
        var options = {
           'isStatic': false,
           'restitution': 0.3,
           'friction': 0.5,
           'density': 1.2
        }
        this.body = Bodies.circle(x, y,200, options);
    }
    display(){
        var pos =this.body.position;
        fill("red");
        ellipse(pos.x, pos.y, 100);
    }
}