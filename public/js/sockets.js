var socket = io();

socket.on('connect', function() {
    console.log('Conectado con el servidor')
})

socket.on('disconnect', function() {
    console.log('Se perdio conexion con el servidor')
})

socket.emit('enviarMensaje', {
    usuario: 'Sebastian',
    Mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp)
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje)
})