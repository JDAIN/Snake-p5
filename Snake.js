class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(1, 1);
        this.xspeed = 0;
        this.yspeed = 0;

    }

    draw() {
        noStroke();
        fill("white");
        for (let i = 0; i < this.body.length; i++) {
            rect(this.body[i].x, this.body[i].y, 0.95, 0.95);

        }

    }

    update() {
        // this.body.length-1 == is the head
        let newHead = this.body[this.body.length-1].copy();


        this.body.shift();
        newHead.x += this.xspeed;
        newHead.y += this.yspeed;
        this.body.push(newHead);
        console.log(this.body[0]);

        //check wallhit
        if(newHead.x >realWidth-1 || newHead.x<0 || newHead.y > realHeight-1|| newHead.y <0){
            return true;
        }
        //check own hit
        for (let i = 0; i < this.body.length-1; i++) {
            if(this.body[i].x === newHead.x && this.body[i].y === newHead.y ){
                return true;
            }
        }
    }


    eats(food) {
        // this.body.length-1 == is the head
        if (food.x === this.body[this.body.length-1].x && food.y === this.body[this.body.length-1].y) {
            console.log("funcX:" + food.x);
            return true;
        }
    }

    grows() {
        let nBody = this.body[this.body.length-1].copy();
        this.body.push(nBody);
        console.log(this.body.length);
        console.log(this.body.toString())

    }
}



