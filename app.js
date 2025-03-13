let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('nombreAmigo');
    let nombre = inputAmigo.value.trim(); // Elimina espacios en blanco

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);

    inputAmigo.value = ''; // Limpia el campo de entrada
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}