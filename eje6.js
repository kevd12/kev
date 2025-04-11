// 6. Función que invierte el orden de un array sin usar .reverse()
function invertirArray(arr) {                   // Declara una función que recibe un array
  const resultado = [];                       // Crea un nuevo array vacío para guardar el resultado

  for (let i = arr.length - 1; i >= 0; i--) { // Recorre el array desde el último elemento hasta el primero
    resultado.push(arr[i]);                  // Agrega cada elemento al nuevo array
  }

  return resultado;                          // Devuelve el array invertido
}

// Ejemplo de uso con un array de nombres
const nombres = ["Ana", "Luis", "Carlos", "María", "Elena", "Pedro"];  // Array original

// Invertir el array
const nombresInvertidos = invertirArray(nombres);    // Llama a la función para invertir los nombres

// Mostrar resultado
console.log("Array original:", nombres);             // Muestra el array original
console.log("Array invertido:", nombresInvertidos);  // Muestra el array invertido
