const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
// Genera un número aleatorio entre 1 y 10 (entero)

const intentos = [3, 7, 1, numeroSecreto]; 
// Array que simula intentos del usuario. El último es correcto para asegurar que adivine

let i = 0;                  // Contador de intentos
let adivinado = false;      // Bandera para saber si ya se adivinó el número

while (!adivinado && i < intentos.length) {   // Mientras no adivine y queden intentos
  const intento = intentos[i];                // Tomamos el intento actual
  console.log(`Intento ${i + 1}: ${intento}`); // Mostramos el intento

  if (intento === numeroSecreto) {            // Si adivina...
    console.log('¡Felicidades! Adivinaste el número.'); 
    adivinado = true;                         // Cambiamos la bandera
  } else {
    console.log('No es el número. Intenta de nuevo.'); 
  }

  i++; // Aumentamos el contador de intentos
}

if (!adivinado) {
  // Si terminó el ciclo sin adivinar, mostramos el número real
  console.log(`No lograste adivinar. El número era ${numeroSecreto}`);
}
