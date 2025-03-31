/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let miNombre = "David" + " Cerdan" + " Valero."
// 2. Muestra la longitud de una cadena de texto
console.log(miNombre.length);
// 3. Muestra el primer y último carácter de un string
console.log(miNombre[0] + miNombre[miNombre.length - 1]);
// 4. Convierte a mayúsculas y minúsculas un string
console.log(miNombre.toUpperCase());
console.log(miNombre.toLowerCase());
// 5. Crea una cadena de texto en varias líneas
console.log(`Hola, soy David
y estoy aprendiendo JavaScript`);
// 6. Interpola el valor de una variable en un string
console.log(`Hola, soy ${miNombre}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
miNombre = miNombre.replace(/ /g, "-")
// 8. Comprueba si una cadena de texto contiene una palabra concreta
miNombre.includes("David") ? console.log("La cadena contiene la palabra David") : console.log("La cadena no contiene la palabra David");
// 9. Comprueba si dos strings son iguales
miNombre.localeCompare("David Cerdan Valero") === 0 ? console.log("Las cadenas son iguales") : console.log("Las cadenas no son iguales");
// 10. Comprueba si dos strings tienen la misma longitud
miNombre.length === "David Cerdan Valero".length ? console.log("Las cadenas tienen la misma longitud") : console.log("Las cadenas no tienen la misma longitud");