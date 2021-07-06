let sound;
let imagenes = [];
let index = 0;

function preload() {
    sound = loadSound('amorMasGrande.mp3');

    for (let i = 0; i < 3; i ++) {
        imagenes[i] = loadImage(`foto_${i}.JPG`);
    }

    setInterval(changeFoto, 1000);
}

function setup() {
    createCanvas(400,400);
    let boton = createButton('Play !');
    boton.mousePressed(tocarMusica);
}

function changeFoto() {
    index ++;
    if (index >= imagenes.length) {
        index = 0;
    }
}

function tocarMusica() {
    sound.play();
}

function draw() {
    background(51);
    image(imagenes[index], 0 ,0, 300,300);
}