const fibonacci = [0, 1];  // Comenzamos el array con los dos primeros números de la secuencia

for (let i = 2; i < 10; i++) {                        
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Cada nuevo número es la suma de los dos anteriores
}

console.log('Secuencia de Fibonacci (10 primeros números):');

for (let i = 0; i < fibonacci.length; i++) {         
  console.log(fibonacci[i]);                          // Mostramos cada número de la secuencia
}
