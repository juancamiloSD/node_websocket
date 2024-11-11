const socketController = (socket) => {
    console.log('El socket se ha conectado', socket.id);
    socket.on('disconnect', () => {
        console.log('El socket se ha desconectado', socket.id);
    });
    socket.on('mensaje', (mensaje, callback) => {
        const id = 123456789;
        if (typeof callback === 'function') {
            callback(id);
        } else {
            console.error('El callback no es una función');
        }
        socket.broadcast.emit('mensaje', mensaje);
    });
}

module.exports = { 
    socketController 
};