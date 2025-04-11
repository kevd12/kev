const contrasenaCorrecta = 'abc123'; // ✅ Contraseña que se debe adivinar
let intentos = 0; // 🔢 Contador de intentos fallidos
let inputSimulado = ['123', 'password', 'abc123']; // 💬 Simulamos entradas del usuario

// 🔁 Mientras no se superen los 3 intentos
while (intentos < 3) {
  let intentoActual = inputSimulado[intentos]; // 🧪 Toma el intento correspondiente del arreglo simulado
  console.log(`Intento ${intentos + 1}: Usuario ingresó "${intentoActual}"`);

  if (intentoActual === contrasenaCorrecta) { // ✅ Comparamos si coincide con la correcta
    console.log('🔓 Acceso concedido.'); // 🎉 Contraseña correcta
    break; // 🚪 Salimos del bucle porque se ingresó la contraseña correcta
  } else {
    console.log('❌ Contraseña incorrecta.'); // ❗ Si no coincide, se notifica al usuario
    intentos++; // 🔼 Se incrementa el número de intentos
  }
}

// ⚠️ Si ya se hicieron los 3 intentos y no fue correcta
if (intentos === 3) {
  console.log('🔐 Has superado el número máximo de intentos.'); // 🚫 Acceso denegado
}
