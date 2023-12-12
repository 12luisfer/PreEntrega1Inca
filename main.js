// Función calculo el promedio
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}
// Función principal
function gestionarNotas() {
    // Arreglo para almacenar las notas
    let notas = [];
    // Solicitar al usuario que ingrese las notas
    let seguirIngresando = true;
    while (seguirIngresando) {
        let nota = parseFloat(prompt("Ingresa la nota del alumno:"));

        // Validar que la nota sea un número válido
        if (!isNaN(nota)) {
            notas.push(nota);
        } else {
            alert("Por favor, ingresa una nota válida.");
        }

        seguirIngresando = confirm("¿Deseas ingresar otra nota?");
    }
    // Verifico si se ingresaron notas
    if (notas.length > 0) {
        // Calculo promedio
        let promedio = calcularPromedio(notas);
        alert(`El promedio de las notas ingresadas es: ${promedio.toFixed(2)}`);
    } else {
        alert("No se ingresaron notas.");
    }
}
gestionarNotas();

