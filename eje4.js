// 4. Función para ordenar un array de números de menor a mayor (sin usar .sort())
function ordenarArray(arr) {                      // Declara la función que recibe un array
  let n = arr.length;                           // Guarda la longitud del array
  let intercambiado;                            // Variable para saber si hubo intercambio

  do {
    intercambiado = false;                      // Al comenzar, no ha habido intercambios

    for (let i = 0; i < n - 1; i++) {           // Recorre el array hasta el penúltimo elemento
      if (arr[i] > arr[i + 1]) {                // Compara el actual con el siguiente
        // Intercambiar elementos si están en el orden incorrecto
        let temp = arr[i];                      // Guarda el valor actual
        arr[i] = arr[i + 1];                    // Pone el siguiente en la posición actual
        arr[i + 1] = temp;                      // Pone el valor guardado en la siguiente posición
        intercambiado = true;                   // Marca que hubo intercambio
      }
    }

    n--; // Cada vuelta asegura que el número más grande ya está al final, así que se reduce

  } while (intercambiado);                      // Sigue repitiendo mientras haya intercambios

  return arr;                                   // Devuelve el array ordenado
}

// Nuevo array con más variedad de números
const numeros = [5, 4, 1, 2, 3];                   // Array original desordenado

// Ejecutar la función
const numerosOrdenados = ordenarArray(numeros);   // Llama a la función para ordenar

// Mostrar el resultado
console.log("Array ordenado:", numerosOrdenados); // Muestra el array ordenado en consola
