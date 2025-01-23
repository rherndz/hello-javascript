// 1. Concatena dos cadenas de texto
    let div = " ----- " ;
    console.log(div);

    let saludo = "Hola, Bienvenido: ";
    let nombre = " Juan Carlos";

    console.log( " - " + saludo + nombre);
    

// 2. Muestra la longitud de una cadena de texto

    console.log(div);

    let palabra = "dormir";

    console.log("Longitud: " + palabra.length + " caracteres");
    

// 3. Muestra el primer y último carácter de un string

    console.log(div);

    console.log(palabra[0]);

    console.log(palabra[5]);
    

// 4. Convierte a mayúsculas y minúsculas un string

    console.log(div);

    console.log(palabra.toUpperCase());

    console.log(palabra.toLowerCase());
    
    

// 5. Crea una cadena de texto en varias líneas

    console.log(div);

    let frase = `Hola,
    mundo`;

// 6. Interpola el valor de una variable en un string

    console.log(div);

    let edad = 19;

    let alumno = "Ana";

    console.log(`La edad del estudiante: ${alumno}  es: ${edad} `);
     

// 7. Reemplaza todos los espacios en blanco de un string por guiones

    console.log(div);

    let frase_larga = "La frase del dia es";

    console.log(frase_larga.replace(" - ", " "));
    

// 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log(div);

    console.log(frase_larga.indexOf("La"));
    

// 9. Comprueba si dos strings son iguales

    console.log(div);

    let string1 = "hola";

    let string2 = "hola";

    console.log(string1 == string2);
    

// 10. Comprueba si dos strings tienen la misma longitud

    console.log(div);

    console.log(string1.length === string2.length);
    