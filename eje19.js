let a = 0; // 🟢 Primer número de la serie de Fibonacci
let b = 1; // 🔵 Segundo número de la serie

console.log('📈 Serie de Fibonacci hasta que un número supere 100:');

while (a <= 100) { // 🔁 Mientras el número actual no supere 100
  console.log(a); // 📤 Mostrar el número actual

  let siguiente = a + b; // ➕ Calcular el siguiente número de la serie
  a = b;                 // 🔄 Avanzar: el nuevo 'a' será el valor de 'b'
  b = siguiente;         // 🔄 Avanzar: el nuevo 'b' será el número calculado
}
