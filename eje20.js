let numero = 3; // 🔢 Comenzamos desde el primer múltiplo de 3

console.log('📋 Múltiplos de 3 menores a 50:');

while (numero < 50) {     // 🔁 Mientras el número sea menor a 50...
  console.log(numero);    // 📤 Mostrar el número actual
  numero += 3;            // ➕ Sumar 3 para obtener el siguiente múltiplo
}
