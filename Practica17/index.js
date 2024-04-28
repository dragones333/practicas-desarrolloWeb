let j = 500;
let nombre = "Greys";

for (let j = 10; j <= 20; j++) {
    console.log(j);
    let nombre = "Denisse";
    console.log("Nombre dentro del ciclo", nombre);
}

console.log("El valor de j después del ciclo es ", j);
console.log("Nombre fuera del ciclo", nombre);

const PI = Math.PI;
console.log(PI);

const persona = { nombre: "Diego", edad: 27, sexo: "M", casado: true };
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.sexo);
console.log(persona.casado);

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

let marcas = ["Toyota", "Nissan", "Honda", "Porsche"];
let lista = document.getElementById("Lista");


for (let marca of marcas) {
    console.log(marca);
    lista.innerHTML += "<li>" + marca + "</li>";
}

let peliculas = [
    {
        nombre: "Spiderman into the spiderverse",
        imagen: "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_80,w_820/v1547500268/content-items/002/717/887/Spider-verse-original.jpg?1547500268"
    },
    {
        nombre: "Godzilla the new empaire",
        imagen: "https://sm.ign.com/ign_latam/movie/g/godzilla-x/godzilla-x-kong-the-new-empire_ptrp.jpg"
    },
    {
        nombre: "Lu Over the Wall",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsrK-GMAW7dunB5tZeZ9qCPmE_SP-wRppGZmGMIeTjhDCKvuhIymg89NUKc3OHdxe82o&usqp=CAU"
    },
    {
        nombre: "El viaje de Chihiro",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs--65c2xNGzkIgT7V7MdMja3G5MOIRZzvicCb1uNXQw&s"
    },
    {
        nombre: "Paprika",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxfKepxI2ldZ1QRVgs3ahI28XYhtOLxganH4rwMFgfQisSh2q4s98qRtGOEK11M8aVD8&usqp=CAU"
    }
];

let ListaPeliculas = document.getElementById("ListaPeliculas");

for (let pelicula of peliculas) {
    console.log(pelicula.nombre);
    ListaPeliculas.innerHTML += `
        <div class="col-12 col-md-4 text-center">
            <div class="card" style="width: 18rem;">
                <img src="${pelicula.imagen}" class="card-img-top pelicula-imagen" alt="${pelicula.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.nombre}</h5>
                    <p class="card-text">Descripción de la película.</p>
                    <a href="#" class="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </div>`;
}






j = 1;
while (j <= 30) {
    console.log(j);
    j++;
}

let result = '0';
let i = 0;
do {
    i = i + 1;
    result = result + 1;
} while (i < 5)
console.log("Result: ", result);
