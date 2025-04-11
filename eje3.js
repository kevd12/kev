// 3. Función para contar cuántos números pares hay en un array
function contarPares(arr) {                   // Declara la función que recibe un array como parámetro
  let contador = 0;                         // Inicializa el contador de números pares en 0

  for (let i = 0; i < arr.length; i++) {    // Recorre cada elemento del array
    if (arr[i] % 2 === 0) {                 // Verifica si el número es par (módulo 2 == 0)
      contador++;                           // Si es par, incrementa el contador
    }
  }

  return contador;                          // Devuelve la cantidad total de pares encontrados
}

// Nuevos datos de prueba
const numeros = [13, 6, 9, 14, 21, 7];         // Crea un array de números para probar la función

// Usar la función y mostrar el resultado
const cantidadPares = contarPares(numeros);   // Llama a la función con el array y guarda el resultado
console.log("Cantidad de números pares:", cantidadPares);  // Muestra la cantidad de pares encontrados
