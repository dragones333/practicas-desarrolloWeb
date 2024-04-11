let numero =100; //variable global, tipo number entero
console.log(numero);
let decimal =100.5; //variable global, tipo number decimal
console.log(decimal);//variable global,tipo string
let texto="Hola mundo"; //variable global,tipo string
let texto2="Hola mundo"; //variable global,tipo string

let booleano=true; //variable global,tipo boolean
let arreglo=[1,2,3,4,5]; //variable global,tipo arreglo
let arreglo2=["1","2","3","4","5"]; //variable global,tipo arreglo
console,log(arreglo2);
console,log(arreglo2(3));
console,log(arreglo2(-2));
console,log(arreglo2(30));

let arregloMixto = [1,2,3,4,5,"a","b","c","d","e",true,false]; //variable
console,log(arregloMixto);

arregloMixto[0]="Hola";
console,log(arregloMixto);

let objeto={
    nombe: "Juan",
    edad:30,
    telefono:"1234567890"
}
console.log(objeto);
console.log(objeto.telefono);
console.log(objeto["edad"]);
console.log("Nombre:"+objeto.nombe);

let estudiante= {
nombre: "luis felipe",
Matricula: "202424",
carrera:"Ing. Software y Sistemas",
materia: ["Matematicas","Programacion","Base de Datos"],
amigos : [
    {
        nombre: "Pedro",
        telefono: "1234567890"
    },
    {
        nombre: "Maria (Crush)",
        telefono: "0987654321"
    }
]

}
console.log(estudiante.materia[1]);
console.log(estudiante.amigos[1].nombre);

let variable=10;
console.log(typeof variable);
let variable2="10.5";
console.log(typeof variable2);
let variable3=true;
console.log(typeof variable3);
let variable4=[1,2,3,4,5];
console.log(typeof variable4);
let variable5={
    nombe: "Juan",
    edad:30,
    telefono:"1234567890"
};
console.log(typeof variable5.telefono);

let saludo,nombre="Juan";
nombre="Luis Felipe";
console.log(nombre);


