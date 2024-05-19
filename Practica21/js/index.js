/*formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    };
    console.log(datos)

})*/
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");

let tareas = [
    {
        nombre: "Hugo",
        fecha: "2024-05-14",
        descripcion: "Aprende JS"
    },
    {
        nombre: "Paco",
        fecha: "2024-05-14",
        descripcion: "Hacer tortas para todos"
    },
    {
        nombre: "Luis",
        fecha: "2024-05-14",
        descripcion: "Ver la película Silk Road"
    }
];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    mostrarTareas();
    formulario.reset();
    
});

let cerrarModal=()=>{
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let agregarDatos = () => {
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    };
    if (validarDatos(tarea)) {
        tareas.push(tarea);
        mostrarTareas();
        limpiarFormulario();
    }
};

let validarDatos = (tarea) => {
    if (tarea.nombre.trim() === "" || tarea.fecha.trim() === "" || tarea.descripcion.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    return true;
};

let limpiarFormulario = () => {
    nombre.value = "";
    fecha.value = "";
    descripcion.value = "";
};

let mostrarTareas = () => {
    listaTareas.innerHTML = ""; // Limpiar el contenido anterior antes de mostrar las nuevas tareas
    tareas.forEach((tarea, indice) => {
        let tareaElemento = document.createElement("div");
        tareaElemento.classList.add("row");
        tareaElemento.innerHTML = `
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.fecha}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="editarModal"><i class="bi bi-pencil"></i>&nbsp; Editar</button>
                <button class="btn btn-danger" onClick= "borrarTarea(this,${indice})"><i class="bi bi-trash"></i>&nbsp; Borrar</button>

            </div>
        `;
        listaTareas.appendChild(tareaElemento);
    });
};
 
let borrarTarea=(boton,indice)=>
{console.log(tareas);
    if (confirm("estas seguro de borrarlo?")){
        if (confirm("realmente seguro de lanzar la bomba?")){
            boton.parentElement.parentElement.remove(boton);
            tareas.splice(indice,1);
boton.parentElement.parentElement.remove(boton);
tareas.splice(indice,1);
}
else {
    alert("salvaste al mundo de la destruccion")
}
    }
}

mostrarTareas();
