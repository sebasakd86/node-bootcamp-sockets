var socket = io();
socket.on('connect', function() {
    console.log('Conectado al server')
});
socket.on('disconnect', function() {
    console.log('se desconecto!')
});
socket.emit('enviarMensaje', {
    msg: 'este es un mensaje',
    usuario: 'sebastian'
}, function(response) {
    console.log('respuesta -->', response)
})
socket.on('enviarMensaje', function(msg){
    console.log(msg)
})