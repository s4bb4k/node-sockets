const socketController = (socket) => {
        console.log('cliente conectado', socket.id);
        socket.on('disconnect', () => {
            console.log("cliente desconectado", socket.id);
        });
        socket.on('enviar-mensaje', ( payload, callback ) => {
            callback( payload );
            socket.broadcast.emit('enviar-mensaje', payload);
        });
}

module.exports = {
    socketController
}
