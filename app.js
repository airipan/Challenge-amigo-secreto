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
    let lista = document.getElementById('amigo');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado'); // Cambio de ID

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}