let j=500;
let nombre="Greys";
for(let j =10;j<=20;j++){
    console.log(j);
    let nombre ="Denisse";
    console.log("Nombre dentro del ciclo", nombre);
}

console.log("el valor de j despues del cicloes ",j);
console.log("Nombre fuera del ciclo", nombre);
const PI=Math.PI;
console.log(PI);

const persona={nombre:"Diego", edad : 27, Sexo:"M",casado: true};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.sexo);
console.log(persona.casado);

for(let propiedad in persona){
    console.log(propiedad + ":"+ persona[ propiedad]);
}

let marcas =["Toyota","Nissan","Honda","Porsche"];
let lista=document.getElementById("Lista");
//lista.innerHTML="";
for(let marca of marcas){
    console.log(marca);
    lista.innerHTML += "<li>" + marca + "</li>";
}

let peliculas=[
    {
        nombre: "Spiderman into the spiderverse",
        imagen: "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_80,w_820/v1547500268/content-items/002/717/887/Spider-verse-original.jpg?1547500268"
    }, 
    {
        nombre: "Godzilla the new empaire",
        imagen: "https://sm.ign.com/ign_latam/movie/g/godzilla-x/godzilla-x-kong-the-new-empire_ptrp.jpg"
    },{
        nombre: "Lu Over the Wall",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsrK-GMAW7dunB5tZeZ9qCPmE_SP-wRppGZmGMIeTjhDCKvuhIymg89NUKc3OHdxe82o&usqp=CAU"
    }
]

let ListaPeliculas=document.getElementById("ListaPeliculas");
//lista.innerHTML="";
for(let pelicula of peliculas){
    console.log(pelicula.nombre);
    ListaPeliculas.innerHTML+="<p>", pelicula.nombre,"</p>";
    ListaPeliculas.innerHTML+="<img src='", pelicula.imagen,"'>";

}