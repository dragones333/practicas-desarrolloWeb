/*aqui va el codigo en js*/
let a= 10;
let b=20;
let sumar=a+b;
console.log(sumar);

let restar=a-b;
console.log(restar);
let multiplicar=a*b;
console.log(multiplicar);
let dividir=a/b;
console.log(dividir);
let modulo=a%b;
console.log("el residuo de a%b es : ",modulo);


let menor=a<b;
console.log(menor);
let mayor=a>b;
console.log(mayor);

let menorIgual=a<=b;
console.log(menorIgual);
let mayorIgual=a>=b;
console.log(mayorIgual);
let igual=a==b;
console.log(igual);

a=-50; //tipo number - entero
b=10*(-1) //tipo number - entero

if(a!=b){
    console.log("es diferente a b");
} else{
    console.log("es igual  a b");
}

//operador ternario
let comparacion = a>b ? "a es mayor qu b":"a es mayor o igual que b";
console.log(comparacion);

let x=100;
let y=200;

function multiplicarNumero(x,y){
    return x*y;
}

let resultado= multiplicarNumero(x,y);
console.log("el resultado de la multiplicacion es:",resultado);

function calcularAreaCirculo(radio){
    //const PI = 3.1416;
   //let area = PI * radio * radio;
   let area=Math.PI*Math.pow(radio,2);
   return area;
}

console.log("area del circulo",calcularAreaCirculo(10));

function toCelsius(fareheit){
    return(5/9)*(fareheit-32);
}
let temp =toCelsius(77);
console.log("temperatura"+temp);

let edadX2 = (edad)=>{
    return edad*2;

}

console.log("la edad multiolicada x2 es : ",edadX2(20));

let hello=()=>{
    return"hwllo worl! con funcion flecha";
}

console.log(hello());