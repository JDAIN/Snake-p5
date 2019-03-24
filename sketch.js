let snake;
let scl = 30;
let realWidth;
let realHeight;
let food;

function setup() {
    frameRate(11);
    createCanvas(600, 600);
    background("black");
    realWidth = floor(width / scl);
    realHeight = floor(height / scl);
    snake = new Snake();
    generateFood();
    // put setup code here

}


function draw() {

    scale(scl);
    background("black");
    if(snake.update()){
        noLoop();
        background("red");

    }
    if (snake.eats(food)) {
        snake.grows();
        generateFood()
    }
    snake.draw();

    // put drawing code here
    // generateFood();


    noStroke();
    fill("green");
    rect(food.x, food.y, 1, 1,1,1,1,1);
}

function generateFood() {
    food = createVector(floor(random(realWidth)), floor(random(realHeight)));
    fill("white");
    rect(food.x, food.y, 1, 1,1,1,1,1);
}

function keyPressed() {
    switch (keyCode) {
        case RIGHT_ARROW:
            snake.xspeed = 1;
            snake.yspeed = 0;
            break;
        case LEFT_ARROW:
            snake.xspeed = -1;
            snake.yspeed = 0;
            break;
        case UP_ARROW:
            snake.xspeed = 0;
            snake.yspeed = -1;
            break;
        case DOWN_ARROW:
            snake.xspeed = 0;
            snake.yspeed = 1;
            break;
        case SHIFT:
            console.log("art. grow");
            snake.grows();
            break;
    }
}