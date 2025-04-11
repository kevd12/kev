let opcionesSimuladas = ['1', '4', '2', '5', '9', '6']; // 👈 Simula las opciones que un usuario elegiría
let index = 0; // 👈 Sirve para recorrer las opciones simuladas
let opcion;    // 👈 Variable donde guardaremos la opción seleccionada en cada ciclo

do {
  // 🔽 Mostramos el menú
  console.log('\n🎮 MENÚ DE OPCIONES');
  console.log('1. Mostrar un dato curioso');
  console.log('2. Ver el clima simulado');
  console.log('3. Ver la hora actual');
  console.log('4. Generar un número aleatorio');
  console.log('5. Ver frase motivadora');
  console.log('6. Salir del programa');

  opcion = opcionesSimuladas[index]; // 👈 Tomamos la opción simulada actual
  console.log(`📌 Selección simulada: ${opcion}`); // 🖨️ Mostramos qué opción se eligió

  switch (opcion) {
    case '1':
      console.log('🧠 Dato curioso: ¡Los flamencos rosados obtienen su color por lo que comen!');
      break;
    case '2':
      console.log('🌦️ Clima simulado: Lluvia ligera con aroma a café ☕');
      break;
    case '3':
      console.log(`⏰ Hora actual: ${new Date().toLocaleTimeString()}`); // 🕒 Muestra la hora actual
      break;
    case '4':
      let aleatorio = Math.floor(Math.random() * 100); // 🔢 Número aleatorio entre 0 y 99
      console.log(`🎲 Número aleatorio: ${aleatorio}`);
      break;
    case '5':
      console.log('💡 Frase motivadora: "El único límite eres tú."');
      break;
    case '6':
      console.log('👋 ¡Gracias por usar el menú! Cerrando sesión...');
      break;
    default:
      console.log('🚫 Esa opción no está disponible. Intenta con un número del 1 al 6.'); // ❌ Si el número no es válido
  }

  index++; // 👉 Pasamos a la siguiente opción simulada
} while (opcion !== '6' && index < opcionesSimuladas.length); // 🔁 Repetimos hasta que se seleccione "6" o se acaben las simulaciones
