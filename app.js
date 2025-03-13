let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('nombreAmigo');
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    console.log(amigos); // Para verificar en la consola que se agregó correctamente

    inputAmigo.value = ''; // Limpiar el campo de entrada
}