const tf = require('@tensorflow/tfjs-node-gpu')
const express = require('express');
const socket = require('socket.io');
const fs = require('fs');

var _ = JSON.parse(fs.readFileSync('config.json'));

let app = express();
let server = app.listen(_.web.port)
console.log(`listening on port ${_.web.port}`)

console.log(`loading webpage`)
app.use(express.static('public'))

console.log(`create socket`)
let io = socket(server);

io.sockets.on("connection", newConnection)

function newConnection(socket) {
    console.log(`connected to ${socket.id}`);
}

function main() {
    const values = [];
    for (let i = 0; i < 30; i++) {
        values[i] = Math.round(Math.random() * 100);
    }

    const shape = [2, 5, 3];

    const data = tf.tensor3d(values, shape, 'int32')
    console.log(data.toString())
}

main();