let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Corregido: 'amigo' en vez de 'nombreAmigo'
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    console.log(amigos); // Para verificar en la consola

    inputAmigo.value = ''; // Limpiar el campo de entrada
    mostrarAmigos(); // Actualizar la lista de amigos en la interfaz
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}