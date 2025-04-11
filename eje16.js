let suma = 0; // Inicializamos la variable suma en 0

// Recorremos los números del 1 al 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) { // 👈 Verificamos si el número es impar
    suma += i; // 👉 Sumamos el número impar a la variable suma

    // Verificamos si la suma ya ha pasado los 500
    while (suma > 500) {
      console.log(`🚨 La suma ha superado 500 en el número ${i}. Suma: ${suma}`); // 🖨️ Mostramos alerta
      i = 51; // 👉 Alteramos el valor de i para salir del for
      break; // 🛑 Rompemos el while inmediatamente
    }
  }
}

console.log(`✅ Suma final: ${suma}`); // 🖨️ Imprimimos la suma final
