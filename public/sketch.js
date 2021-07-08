let socket;

function setup() {
    createCanvas(400,400);
    background(0);

    socket = io.connect('http://localhost:3000');
    //socket = io.connect('http://192.168.1.155:3000');

    //to handle to message coming in...
    socket.on('mouse', newDrawing);
    socket.on('clientesCount', newCliente);
}

function newCliente(clientes) {
    console.log('clientes = ' + clientes);
}

function newDrawing(data) {
    noStroke();
    fill(0,255,0);
    ellipse(data.x, data.y, 60,60);
}


function mouseDragged() {
    console.log('Sending: ' + mouseX + ' , ' + mouseY);

    let data = {
        x: mouseX,
        y: mouseY
    }   
    socket.emit('mouse', data);

    noStroke();
    fill(255)
    ellipse(mouseX, mouseY, 60,60);
}

function draw() {
   
}