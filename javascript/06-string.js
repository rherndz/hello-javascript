// string ( cadena de texto )

// Concatenacion

let myName = "brais";
let greeting = "Hola, " + myName + "!";

console.log(greeting);

console.log(typeof greeting);

// Longitud 

console.log(greeting.length);

// Acceso a caracteres

console.log(greeting[0]);

console.log(greeting[11]);

// Metodos comunes

console.log(greeting.toUpperCase()); // Mayuscula

console.log(greeting.toLowerCase()); // Minuscula

console.log(greeting.indexOf("Hola")); // Indice

console.log(greeting.indexOf("Brais"));

console.log(greeting.indexOf("MoureDev"));

console.log(greeting.includes("Hola")); // Incluye

console.log(greeting.includes("Brais"));

console.log(greeting.includes("MoureDev"));

console.log(greeting.slice(0, 10)); // Seccion

console.log(greeting.replace("Brais", "MoureDev")); // Reemplazo

// Template literals (Plantilla literales)

// string en varias lineas

let message = `Hola, este
es un curso
de javaScript`

console.log(message);


//Interpolacion de valores

let email = "braismoure@gmail.com"
console.log(`Hola, ${myName}! Tu email es: ${email}.`);
