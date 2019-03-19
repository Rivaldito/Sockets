const express = require('express');
const http = require('http')
const path = require('path');
const socketIO = require('socket.io')

const app = express();

const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Establecer la comunicacion con el server
module.exports.io = socketIO(server)
require('./sockets/sockt')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});