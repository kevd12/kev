const numero = 7;  // Puedes cambiar este valor por cualquier número para generar su tabla

console.log(`Tabla de multiplicar del ${numero}:`); // Muestra un título en consola

for (let i = 1; i <= 10; i++) {                      // Bucle que va del 1 al 10
  console.log(`${numero} x ${i} = ${numero * i}`);   // Muestra cada línea de la tabla: multiplicación y resultado
}
