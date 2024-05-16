let historial = [];

function asignar(valor) {
    document.getElementById("resultado").value += valor;
}

function calcular() {
    let expresion = document.getElementById("resultado").value;
    let resultado;
    try {
        resultado = eval(expresion);
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Expresión inválida');
        }
        document.getElementById("resultado").value = resultado;
        historial.push(expresion + " = " + resultado);
        mostrarHistorial();
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

function mostrarHistorial() {
    let historialHTML = "<h2>Historial de Operaciones:</h2><ul>";
    historial.forEach(op => {
        historialHTML += "<li>" + op + "</li>";
    });
    historialHTML += "</ul>";
    document.getElementById("historial").innerHTML = historialHTML;
}
