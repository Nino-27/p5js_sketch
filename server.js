let clientes = 0;

var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running ...nino...");

let socket = require('socket.io');

let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection: ' + socket.id);
    clientes++;
    socket.broadcast.emit('clientesCount',clientes);

socket.on('mouse', mouseMsg);

function mouseMsg (data) {
    socket.broadcast.emit('mouse',data);
    // io.sockets.emit('mouse', data) send the message to
    //everybody
    console.log(data)
}

}