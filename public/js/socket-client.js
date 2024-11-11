const online = document.getElementById('online');
const offline = document.getElementById('offline');
const txtMensaje = document.getElementById('txtMensaje');
const btnSend = document.getElementById('btnSend');

const socket = io();

socket.on('connect', () => {
  offline.style.display = 'none';
  online.style.display = '';
});

socket.on('disconnect', () => {
  console.log('Desconectado');
  offline.style.display = '';
  online.style.display = 'none';
});

socket.on('mensaje', (mensaje) => {
  console.log('Mensaje recibido:', mensaje);
});

btnSend.addEventListener('click', () => {
  const mensaje = txtMensaje.value;
  socket.emit('mensaje', mensaje);
  txtMensaje.value = '';

  socket.emit('mensaje', mensaje, (id) => {
    console.log('Mensaje enviado:', id);
  });
});