let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let video = document.getElementById("video");
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");
let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");
let imagenEditar = document.getElementById("imagenEditar");
let videoEditar = document.getElementById("videoEditar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");

let indiceEdicion;

let tareas = [
    {
        nombre: "Hugo",
        fecha: "2024-05-14",
        descripcion: "Aprende JS",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEjTPeC4qmHeO3Wm92OJLMIkAHgHSpVD9mpoN2lbr0mq9ZQax_2wjZqvEbLIqabAGNEM&usqp=CAU",
        video: "https://www.youtube.com/watch?v=HD48zAa-4sk"
    },
    {
        nombre: "Paco",
        fecha: "2024-05-14",
        descripcion: "Hacer tortas para todos",
        imagen: "",
        video: ""
    },
    {
        nombre: "Luis",
        fecha: "2024-05-14",
        descripcion: "Ver la película Silk Road",
        imagen: "",
        video: ""
    }
];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal('#nuevoModal');
    mostrarTareas();
    formulario.reset();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    actualizarDatos();
    cerrarModal('#editarModal');
    mostrarTareas();
    formularioEditar.reset();
});

let cerrarModal = (modalId) => {
    const modalElement = document.querySelector(modalId);
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
};

let agregarDatos = () => {
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        imagen: imagen.value,
        video: video.value
    };
    if (validarDatos(tarea)) {
        tareas.push(tarea);
        mostrarTareas();
        limpiarFormulario();
    }
};

let actualizarDatos = () => {
    let tareaActualizada = {
        nombre: nombreEditar.value,
        fecha: fechaEditar.value,
        descripcion: descripcionEditar.value,
        imagen: imagenEditar.value,
        video: videoEditar.value
    };
    if (validarDatos(tareaActualizada)) {
        tareas[indiceEdicion] = tareaActualizada;
        mostrarTareas();
    }
};

let validarDatos = (tarea) => {
    if (tarea.nombre.trim() === "" || tarea.fecha.trim() === "" || tarea.descripcion.trim() === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }
    return true;
};

let limpiarFormulario = () => {
    nombre.value = "";
    fecha.value = "";
    descripcion.value = "";
    imagen.value = "";
    video.value = "";
};

let mostrarTareas = () => {
    listaTareas.innerHTML = ""; // Limpiar el contenido anterior antes de mostrar las nuevas tareas
    tareas.forEach((tarea, indice) => {
        let tareaElemento = document.createElement("div");
        tareaElemento.classList.add("row");
        tareaElemento.innerHTML = `
            <div class="col-12 col-md-2 border p-3">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="col-12 col-md-2 border p-3">
                <strong>${tarea.fecha}</strong>
            </div>
            <div class="col-12 col-md-2 border p-3">
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class="col-12 col-md-2 border p-3">
                ${tarea.imagen ? `<img src="${tarea.imagen}" alt="Imagen" style="width: 100%;">` : ''}
            </div>
            <div class="col-12 col-md-2 border p-3">
                ${tarea.video ? `<video src="${tarea.video}" controls style="width: 100%;"></video>` : ''}
            </div>
            <div class="col-12 col-md-2 border p-3">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarModal" onclick="editarTarea(${indice})"><i class="bi bi-pencil"></i>&nbsp; Editar</button>
                <button class="btn btn-danger" onclick="borrarTarea(${indice})"><i class="bi bi-trash"></i>&nbsp; Borrar</button>
            </div>
        `;
        listaTareas.appendChild(tareaElemento);
    });
};

let editarTarea = (indice) => {
    let tarea = tareas[indice];
    nombreEditar.value = tarea.nombre;
    fechaEditar.value = tarea.fecha;
    descripcionEditar.value = tarea.descripcion;
    imagenEditar.value = tarea.imagen;
    videoEditar.value = tarea.video;
    indiceEdicion = indice;
};

let borrarTarea = (indice) => {
    if (confirm("¿Estás seguro de que deseas borrar esta tarea?")) {
        tareas.splice(indice, 1);
        mostrarTareas();
    }
};

mostrarTareas();
