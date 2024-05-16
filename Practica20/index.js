let resultado = document.getElementById('resultado');

let  asignar = (valor)=>{
resultado.value +=valor;
}
 
function calcular(){
    if(resultado.value !='')
    resultado.value=eval(resultado.value);
else
 alert('ingrese un valor');
}

//reto hacer la calculadora cientifica

function limpiar(){
    resultado.value=''
}