class dustbin {
    constructor(x,y){
        var options = {
           'isStatic': true,
        }
        var sideBox1 = Bodies.rectangle(x-100, y-40, 20, 100, options);
        var sideBox2 = Bodies.rectangle(x+100, y-40, 20, 100, options);
        var bottomBox = Bodies.rectangle(x, y, 200, 20, options);
    }
    display(){
        rectMode(CENTER);
        fill("blue");
        stroke("blue");
        rect(550, 314, 20, 100);
        rect(750, 314, 20, 100);
        rect(650, 354, 200, 20);
    }
}
