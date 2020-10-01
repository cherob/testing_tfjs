var socket;

function setup() {
    createCanvas(200, 200);

    socket = io.connect('http://localhost:3000');
}

function draw() {
    noStroke();
    fill(255)
    ellipse(mouseX, mouseY, 36, 36);

}