let sound;

function preload() {
    sound = loadSound('amorMasGrande.mp3');
}


function setup() {
    createCanvas(400,400);
    let boton = createButton('Play !');
    boton.mousePressed(tocarMusica);
}

function tocarMusica() {
    sound.play();
}

function draw() {
    background(51);
}