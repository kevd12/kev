// 8. Función que suma solo los números positivos
function sumarPositivos(arr) {
  return arr
    .filter(num => num > 0)               // Filtra solo los números mayores a 0 (positivos)
    .reduce((acum, val) => acum + val, 0); // Suma todos los valores filtrados usando .reduce()
}

// Ejemplo de uso
const numeros = [10, -5, 3, -2, -1, 2];     // Array con números positivos y negativos

// Ejecutar la función y mostrar el resultado
const sumaPositivos = sumarPositivos(numeros);              // Llama a la función con el array
console.log("Suma de números positivos:", sumaPositivos);   // Muestra el resultado en consola
