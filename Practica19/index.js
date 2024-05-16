const fruit = ["apple", "orange", "banana", "kiwi"];
let size = fruit.length;
console.log(size);

let contenido = "";

for (let i = 0; i < size; i++) {
    console.log(fruit[i]);
    contenido += fruit[i] + ", ";
}
let lista1 = document.getElementById("lista1");
lista1.innerHTML = contenido;
console.log(lista1);

console.warn("la fruta es", fruit);
console.error("la fruta es", fruit);
console.info("la fruta es", fruit);
console.table(fruit);
console.debug("la fruta es", fruit);

let lista2 = document.getElementById("lista2");
lista2.innerHTML = fruit.join("***");

let lista3 = document.getElementById("lista3");
fruit.pop(); // quita el ultimo elemento
console.log(fruit);
lista3.innerHTML = "lista3:" + fruit.join("---");

let lista4 = document.getElementById("lista4");
fruit.push("mango");
fruit.push('fresa');
lista4.innerHTML = "lista4:" + fruit.join("---");

let lista5 = document.getElementById("lista5");
fruit.shift(); // quita el primer elemento
console.log(fruit);
lista5.innerHTML = "lista5:" + fruit.join("---");

let lista6 = document.getElementById("lista6");
fruit.unshift("pera");
fruit.unshift("uva");
console.log(fruit);
lista6.innerHTML = "lista6:" + fruit.join("---");

const nombreMujeres = ["greys", "denise", "saray"];
const nombreHombres = ["hugo", "paco", "luis"];

let listaNombres = nombreMujeres.concat(nombreHombres);
console.log(listaNombres);
let lista7 = document.getElementById("lista7");
lista7.innerHTML = "lista de nombres:" + listaNombres.join(", ");
