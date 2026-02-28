const inputTarea = document.getElementById('inputTarea');
const botonAgregar = document.getElementById('botonAgregar');
const listaTareas = document.getElementById('listaTareas');
const contadorTareas = document.getElementById('contadorTareas');

let totalPendientes = 0;

function actualizarContador(valor) {
    totalPendientes += valor;
    contadorTareas.innerText = totalPendientes;
}

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        alert("¡No puedes agregar una tarea vacía!");
        return;
    }

    const itemLista = document.createElement('li');
    
    itemLista.innerHTML = `
        <span>${textoTarea}</span>
        <button class="boton-eliminar">Eliminar</button>
    `;

    const botonEliminar = itemLista.querySelector('.boton-eliminar');
    botonEliminar.addEventListener('click', () => {
        itemLista.remove();
        actualizarContador(-1);
    });

    listaTareas.appendChild(itemLista);
    actualizarContador(1);

    inputTarea.value = "";
    inputTarea.focus();
}

botonAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        agregarTarea();
    }
});