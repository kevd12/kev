function sumarArray(arr) {        // Declara una función que recibe un array como parámetro
  let suma = 0;                 // Inicializa una variable para acumular la suma
  for (let i = 0; i < arr.length; i++) {  // Bucle que recorre cada elemento del array
    suma += arr[i];            // Suma el valor actual del array a la variable 'suma'
  }
  return suma;                 // Devuelve la suma total al terminar el bucle
}

const numeros = [1, 2, 3, 4, 5];  // Crea un array con números de ejemplo

console.log("La suma total es:", sumarArray(numeros));  // Llama a la función y muestra el resultado en consola
