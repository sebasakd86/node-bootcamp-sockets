const {
    io
} = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Willkommen'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })
    client.on('enviarMensaje', (data, callback) => {
        if (callback) {
            if (mensaje.usuario)
                callback({
                    respuesta: 'todo salio bien'
                })
            else
                callback({
                    respuesta: 'todo mal!'
                })
        } else {
            // console.log(data)
            client.broadcast.emit('enviarMensaje', data)
        }
    })
})