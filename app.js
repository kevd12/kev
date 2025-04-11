function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Resultado: 120

//2
function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(esPrimo(7)); // Resultado: true
console.log(esPrimo(10)); // Resultado: false

//3
function obtenerFechaHora() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
}

console.log(obtenerFechaHora()); // Resultado: 10/04/2025 15:45:30

//4

function contarPalabra(cadena, palabra) {
    const palabras = cadena.split(' ');
    let contador = 0;
    palabras.forEach(p => {
        if (p.toLowerCase() === palabra.toLowerCase()) {
            contador++;
        }
    });
    return contador;
}

console.log(contarPalabra("JavaScript es un lenguaje de JavaScript", "JavaScript")); // Resultado: 2

//5
function sumarNumeros(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumarNumeros([1, 2, 3, 4, 5])); // Resultado: 15
