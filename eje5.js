// 5. Función para buscar un nombre en el array
function buscarNombre(arr, nombreBuscado) {                    // Declara la función que recibe un array y el nombre a buscar
  for (let i = 0; i < arr.length; i++) {                     // Recorre el array completo
    if (arr[i].toLowerCase() === nombreBuscado.toLowerCase()) {  // Compara los nombres ignorando mayúsculas/minúsculas
      return i;                                              // Si encuentra el nombre, devuelve la posición (índice)
    }
  }
  return -1; // Si no se encuentra, devuelve -1                // Devuelve -1 si no encontró el nombre
}

// Array de nombres de ejemplo
const nombres = ["Ana", "Luis", "Carlos", "María", "Elena", "Pedro"];  // Lista de nombres

// Nombre que queremos buscar
const nombreABuscar = "maría";                                // El nombre que se va a buscar (con diferente capitalización)

// Buscar y mostrar el resultado
const posicion = buscarNombre(nombres, nombreABuscar);        // Llama a la función y guarda el resultado

if (posicion !== -1) {                                        // Si la posición es distinta de -1, el nombre fue encontrado
console.log(` El nombre "${nombreABuscar}" se encontró en la posición ${posicion}`);  // Muestra en qué posición está
} else {
console.log(` El nombre "${nombreABuscar}" no está en la lista.`);  // Si no está, muestra mensaje de no encontrado
}
