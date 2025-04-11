// 2. Función que retorna el número mayor y menor de un array
function mayorYMenor(arr) {             // Declara la función que recibe un array como parámetro
  let mayor = arr[0];                 // Asume que el primer número es el mayor (por ahora)
  let menor = arr[0];                 // Asume que el primer número también es el menor

  for (let i = 1; i < arr.length; i++) {  // Recorre el array desde el segundo elemento
    if (arr[i] > mayor) {             // Si el número actual es mayor que el guardado...
      mayor = arr[i];                 // ...actualiza el valor de 'mayor'
    }
    if (arr[i] < menor) {             // Si el número actual es menor que el guardado...
      menor = arr[i];                 // ...actualiza el valor de 'menor'
    }
  }

  return { mayor, menor };            // Devuelve un objeto con los dos valores encontrados
}

// Datos de prueba
const numeros = [1, 2, 3, 4, 5];         // Crea un array con números para probar

// Usar la función y mostrar el resultado
const resultado = mayorYMenor(numeros); // Llama a la función y guarda el resultado
console.log("Número mayor:", resultado.mayor);  // Muestra el número mayor
console.log("Número menor:", resultado.menor);  // Muestra el número menor
