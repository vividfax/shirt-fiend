let jacket;
let shirt;
let trouser;

let jackets = [];
let shirts = [];
let trousers = [];

let jacketIndex = 0;
let shirtIndex = 0;
let trouserIndex = 0;

let length;

function preload() {

    jackets.push(loadImage("./images/jacket-0.png"));
    jackets.push(loadImage("./images/jacket-1.png"));
    jackets.push(loadImage("./images/jacket-2.png"));
    jackets.push(loadImage("./images/jacket-3.png"));
    jackets.push(loadImage("./images/jacket-4.png"));
    jackets.push(loadImage("./images/jacket-5.png"));
    jackets.push(loadImage("./images/jacket-6.png"));
    jackets.push(loadImage("./images/jacket-7.png"));
    jackets.push(loadImage("./images/jacket-8.png"));
    jackets.push(loadImage("./images/jacket-9.png"));
    jackets.push(loadImage("./images/jacket-10.png"));
    jackets.push(loadImage("./images/jacket-11.png"));

    shirts.push(loadImage("./images/shirt-0.png"));
    shirts.push(loadImage("./images/shirt-1.png"));
    shirts.push(loadImage("./images/shirt-2.png"));
    shirts.push(loadImage("./images/shirt-3.png"));
    shirts.push(loadImage("./images/shirt-4.png"));
    shirts.push(loadImage("./images/shirt-5.png"));
    shirts.push(loadImage("./images/shirt-6.png"));
    shirts.push(loadImage("./images/shirt-7.png"));
    shirts.push(loadImage("./images/shirt-8.png"));
    shirts.push(loadImage("./images/shirt-9.png"));
    shirts.push(loadImage("./images/shirt-10.png"));
    shirts.push(loadImage("./images/shirt-11.png"));
    shirts.push(loadImage("./images/shirt-12.png"));
    shirts.push(loadImage("./images/shirt-13.png"));
    shirts.push(loadImage("./images/shirt-14.png"));
    shirts.push(loadImage("./images/shirt-15.png"));
    shirts.push(loadImage("./images/shirt-16.png"));
    shirts.push(loadImage("./images/shirt-17.png"));
    shirts.push(loadImage("./images/shirt-18.png"));
    shirts.push(loadImage("./images/shirt-19.png"));
    shirts.push(loadImage("./images/shirt-20.png"));
    shirts.push(loadImage("./images/shirt-21.png"));
    shirts.push(loadImage("./images/shirt-22.png"));
    shirts.push(loadImage("./images/shirt-23.png"));
    shirts.push(loadImage("./images/shirt-24.png"));
    shirts.push(loadImage("./images/shirt-25.png"));
    shirts.push(loadImage("./images/shirt-26.png"));
    shirts.push(loadImage("./images/shirt-27.png"));
    shirts.push(loadImage("./images/shirt-28.png"));
    shirts.push(loadImage("./images/shirt-29.png"));
    shirts.push(loadImage("./images/shirt-30.png"));
    shirts.push(loadImage("./images/shirt-31.png"));
    shirts.push(loadImage("./images/shirt-32.png"));

    trousers.push(loadImage("./images/trouser-0.png"));
    trousers.push(loadImage("./images/trouser-1.png"));
    trousers.push(loadImage("./images/trouser-2.png"));
    trousers.push(loadImage("./images/trouser-3.png"));
    trousers.push(loadImage("./images/trouser-4.png"));
    trousers.push(loadImage("./images/trouser-5.png"));
}


function setup() {

    length = windowWidth < windowHeight ? windowWidth : windowHeight;
    length *= 2/3;
    createCanvas(length, length, WEBGL);

    noStroke();

    for (let element of document.getElementsByClassName("p5Canvas")) {
        element.addEventListener("contextmenu", (e) => e.preventDefault());
    }

    jacketIndex = int(random(jackets.length));
    shirtIndex = int(random(shirts.length));
    trouserIndex = int(random(trousers.length));
}

function draw() {

    background("#222");

    displayJacket();
    displayShirt();
    displayTrousers();
}

function displayJacket() {

    push();

    rotateY(frameCount * 0.001);

    texture(jackets[jacketIndex]);
    //sphere(length*6/5);
    cylinder(length*.8, length*2);

    pop();

//     push();

//     texture(jackets[jacketIndex]);
//     translate(0, 0, -70);
//     rotateY(-frameCount * 0.001);

//     cylinder(length/6/2*3.8, length);

//     pop();
}

function displayShirt() {

    push();

    rotateY(frameCount * 0.001 + 30);
    translate(0,-length/6, 0)

    texture(shirts[shirtIndex]);
    cylinder(length/6/2*3, length/6*4);

    pop();
}

function displayTrousers() {

    push();

    rotateY(-frameCount * 0.001 + 30);
    translate(0, length/6*3, 0)

    texture(trousers[trouserIndex]);
    cylinder(length/6/2*3, length/6*4);
    // translate(0, -length/6*2, 0)
    // cylinder(length/6/2*3 + 2, length/6/3*2);

    pop();
}

function mouseReleased() {

    if (mouseX < 0 || mouseX > width) return;
    if (mouseY < 0 || mouseY > height) return;

    if (mouseX < width/2 - length/6/2*3 || mouseX > width - (width/2 - length/6/2*3)) {

        if(mouseButton == LEFT) {
            jacketIndex++;
        }
        if(mouseButton == RIGHT) {
            jacketIndex--;
        }

        if (jacketIndex >= jackets.length) {
            jacketIndex = 0;
        } else if (jacketIndex < 0) {
            jacketIndex = jackets.length-1;
        }
    } else if (mouseY < height/4*3 - length/30) {

        if(mouseButton == LEFT) {
            shirtIndex++;
        }
        if(mouseButton == RIGHT) {
            shirtIndex--;
        }

        if (shirtIndex >= shirts.length) {
            shirtIndex = 0;
        } else if (shirtIndex < 0) {
            shirtIndex = shirts.length-1;
        }
    } else if (mouseY > height/4*3) {

        if(mouseButton == LEFT) {
            trouserIndex++;
        }
        if(mouseButton == RIGHT) {
            trouserIndex--;
        }

        if (trouserIndex >= trousers.length) {
            trouserIndex = 0;
        } else if (trouserIndex < 0) {
            trouserIndex = trousers.length-1;
        }
    }
}