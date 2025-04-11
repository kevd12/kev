const nombres = ["ana", "juan", "maría", "pedro"];         // Array original con nombres en minúsculas

const nombresMayusculas = nombres.map(nombre =>           // Usa .map() para recorrer cada elemento del array
  nombre.toUpperCase()                                    // Convierte cada nombre a mayúsculas con .toUpperCase()
);

console.log(nombresMayusculas);                           // Muestra el nuevo array con los nombres en mayúsculas
