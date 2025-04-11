// Simulamos entradas del usuario (todos son números, algunos inválidos)
const entradasSimuladas = [-5, 0, 3, 7]; // Números que vamos a probar (solo > 0 son válidos)
let index = 0;          // Índice para recorrer las entradas simuladas
let numero;             // Variable para guardar el número que se va a evaluar

do {
  let entrada = entradasSimuladas[index]; // Obtenemos la entrada actual del array
  console.log(`Usuario ingresa: ${entrada}`); // Mostramos lo que el "usuario" ingresó

  numero = parseInt(entrada); // Convertimos la entrada a número entero

  if (isNaN(numero) || numero <= 0) { // Verificamos si no es número o es menor o igual a 0
    console.log(" Número inválido. Intenta de nuevo.\n"); // Si es inválido, lo indicamos
  } else {
    console.log("Número válido ingresado:", numero); // Si es válido, lo mostramos
    break; // Salimos del ciclo porque ya tenemos una entrada correcta
  }

  index++; // Pasamos a la siguiente entrada en la lista
} while (index < entradasSimuladas.length); // Repetimos mientras haya entradas disponibles
