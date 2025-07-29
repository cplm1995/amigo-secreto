// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value;

    // 1. Verificar que el input no esté vacío
    if (nombreAmigo.trim() === '') {
        alert('Por favor, ingresa el nombre de tu amigo.');
        return; // Detiene la ejecución de la función
    }

    // 2. Verificar que el amigo no esté ya en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya ha sido agregado.');
        limpiarInput(); // Limpiar para el siguiente nombre
        return;
    }

    amigos.push(nombreAmigo);

    // Opcional: Actualizar la lista de amigos en la pantalla
    let lista = document.getElementById('listaAmigos');
    if (lista) {
        lista.innerHTML = ""; // Limpiar la lista"

        for (let i = 0; i < amigos.length; i++) {
            lista.innerHTML += `<li>${amigos[i]}</li>`;
        }
    }
    limpiarInput();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para poder sortear.');
        return;
    }
    let sorteo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteo];
    document.getElementById('listaAmigos').innerHTML = amigoSorteado;
    asignarTextoElemento('h2','Tu amigo secreto es:');

}

function limpiarInput(){
    document.getElementById('amigo').value = '';
}
