let numeros = [5, 10, -3, 8, 0]; // 📥 Simulamos números que el usuario ingresaría (el 0 detiene la suma)
let i = 0; // 🔢 Índice para recorrer el array
let suma = 0; // ➕ Acumulador para la suma

// 🔁 Recorremos el array mientras queden números
while (i < numeros.length) {
  let numero = numeros[i]; // 🎯 Tomamos el número actual
  console.log(`Número ingresado: ${numero}`);

  if (numero === 0) { // ⛔ Si el número es 0, terminamos el bucle
    break;
  }

  suma += numero; // ➕ Sumamos el número si no es 0
  i++; // ▶️ Pasamos al siguiente número
}

console.log(`✅ Suma total: ${suma}`); // 🧮 Mostramos la suma final
