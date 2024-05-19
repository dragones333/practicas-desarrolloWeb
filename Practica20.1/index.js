let resultado = document.getElementById('resultado');
let historial = document.getElementById('historial-operaciones');

let asignar = (valor) => {
    if (valor === 'C') {
        limpiar();
    } else {
        resultado.value += valor;
    }
};

function calcular() {
    try {
        let expresion = resultado.value.replace('^', '**').replace(/√/g, 'Math.sqrt').replace(/!/g, 'factorial');
        
        let resultadoOperacion = eval(expresion);
        
        agregarHistorial(`${resultado.value} = ${resultadoOperacion}`);
        resultado.value = resultadoOperacion;
    } catch (e) {
        alert('Expresión inválida');
        limpiar();
    }
}

function limpiar() {
    resultado.value = '';
}

function agregarHistorial(operacion) {
    let nuevaOperacion = document.createElement('li');
    nuevaOperacion.className = 'dropdown-item';
    nuevaOperacion.textContent = operacion;
    historial.appendChild(nuevaOperacion);
}
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
