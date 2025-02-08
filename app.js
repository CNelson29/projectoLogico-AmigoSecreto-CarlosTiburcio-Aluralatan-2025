let amigos = []; // Lista de amigos

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = ""; // Limpiar el campo de texto
    mostrarLista();
}

// Mostrar la lista de amigos
function mostrarLista() {
    const lista = document.getElementById("NombresAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrarla

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un solo amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indexAleatorio];

    // Ocultar lista de nombres
    document.getElementById("NombresAmigos").innerHTML = "";

    // Mostrar resultado del sorteo
    mostrarResultado(`¡El amigo secreto es: ${amigoSeleccionado}! 🎉`);
}

// Mostrar resultado del sorteo
function mostrarResultado(mensaje) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = mensaje;
    li.className = "result-item";
    listaResultado.appendChild(li);
}
