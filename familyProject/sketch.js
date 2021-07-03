let fotos = [];
let index = 0;
let boton;
let addBubble;
let musica;
let corazon;
let corazones = [];
let tocando = false;

function preload() {
    for (let i = 0; i < 10; i ++) {
        fotos[i] = loadImage(`assets/fotos/foto_${i}.jpg`);
    }

    musica = loadSound('assets/audios/amorMasGrande.mp3');
    corazon = loadImage('assets/fotos/heart.png')
}

function setup() {
    createCanvas(300,250);
    console.log(floor(millis()) + ' Milliseconds');

    setInterval(changeFoto, 1000);

    let myH = select('#myH');
    myH.style('background-color','purple')
    myH.style('color', 'white');
    myH.style('padding',' 20pt');
    myH.style('border-radius','50pt');
    myH.style('width', ' 265px')

    boton = createButton('Play Musica');
    boton.style('background-color','purple');
    boton.style('color','white')
    boton.style('font-size','12pt');
    boton.style('padding','10pt');
    boton.style('width','100pt');
    boton.style('border-radius','50pt');
    boton.style('border-color','black');
    boton.style('margin-right','30px');
    boton.mousePressed(tocarMusica);

    //addBubble button
    addBubble = createButton('Add heart');
    addBubble.style('background-color','green');
    addBubble.style('color','white')
    addBubble.style('font-size','12pt');
    addBubble.style('padding','10pt');
    addBubble.style('width','100pt');
    addBubble.style('border-radius','50pt');
    addBubble.style('border-color','black');
    addBubble.style('margin-right','10px');
    addBubble.mousePressed(agregarBubble);
}
function draw() {
    background(0);
    image(fotos[index], 10, 10, width-20, height-20);

    for(let i = 0; i < corazones.length; i ++) {
        corazones[i].show();
        corazones[i].update();
        corazones[i].limite();
    }
}

function changeFoto() {
    index ++;
    if (index >= fotos.length) {
        index = 0;
    }
}

function agregarBubble() {
    console.log("Agregar Bubble");
    let x = random(5 ,width-5)
    let y = random(30, height-10);
    corazones.push(new Bubble(random(width), random(height)));
}
function tocarMusica() {
    console.log("Tocar Musica");
    musica.play();
    if (tocando) {
        musica.stop();
        tocando = false;
    }
    else {
        musica.play();
        tocando = true;
    }
}

function mousePressed() {
    corazones.push(new Bubble(mouseX, mouseY));
}

//Bubble
class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.xx = random(-1, 1);
        this.yy = random(-5,-1);
    }

    show() {
        image(corazon, this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += this.xx;
        this.y += this.yy;
    }

    limite() {
        if (corazones.length > 15) {
            corazones.splice(0, 1);
        }
    }
}