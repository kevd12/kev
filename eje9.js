const numeros = [3, 8, 12, 22, 25, 30];     // Array de números

const primerMultiploDe5 = numeros.find(num => num % 5 === 0);  
// Usa .find() para buscar el primer número que sea divisible por 5

console.log(primerMultiploDe5);            // Muestra el primer múltiplo de 5 encontrado (25)
