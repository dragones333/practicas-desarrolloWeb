"use strict"; 

let x = 3.14;
x = "hola mundo";
console.log(x);


let lista = document.getElementById("lista");
let texto = "hola mi nombre es Carlos, y voy a cumplir 18 años";
console.log(texto);

lista.innerHTML = texto;

texto = 'esta es otra cadena';

lista.innerHTML = texto;

texto = `este es otra forma`;

let text = `Cadena multilinea
la salle
alumnos 301
esta semana comienzan los exámenes de 2do parcial
¡suerte!

alt + 96 apostrofe invertido o backtick
`;
console.log(text);
let a = 5;
let b = 10;

let resultado = `el resultado de la suma es ${a} + ${b} es ${a + b}

<ul>
    <li> multiplica ${a * b} </li>
    <li> divide ${a / b} </li>
    <li> resta ${a - b} </li>
</ul>


multiplica ${a * b}`;
console.log(resultado);
lista.innerHTML = resultado;

let persona = 'Pablo';
let edad = 16;
let cadena = 'mi edad es';

function miFuncion(cadena, personaX, edadExp) {
    let resultado = ``;
    resultado = `${cadena} ${personaX} tiene una edad de ${edadExp} años`;
    console.log(resultado);
    return resultado;
}

miFuncion("Nombre:", 'Saul', 27);

// let resultado2 = miFuncion`hello ${persona} your age is ${edad} years`;
// console.log(resultado2);

function mostrarNombre(name) {
    console.log(name);
    return name;
}

let resultado2 = mostrarNombre `Raul`;

let titulo = "Ganadores de los Oscares 2024";
let cantantes = ["Billie Eilish", "Lady Gaga", "Adele"];
let cadenaHTML = `<h1>${titulo}</h1>`;
cadenaHTML += `<ul>`;
for (let cantante of cantantes) { 
    cadenaHTML += `<li>${cantante}</li>`; 
}

cadenaHTML += `</ul>`; 
 
lista.innerHTML = cadenaHTML;

x=3.14;//this will not cause an error
otrafuncion();
function otrafuncion() {
    "use strict"
y=3.14; //this will not cause an error
}
