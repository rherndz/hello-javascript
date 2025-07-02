// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

let num1 = 0;
let num2 = 0;
let suma = 0;

function sumaFunc( num1, num2 ){
    suma = num1 + num2;

    console.log("Suma " + suma);
}

sumaFunc(1,2);


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let aNumeros = [1,2,6,4,5,10];
let num_comp = aNumeros[0];

function valNumbM(){

    for (let i = 1; i < aNumeros.length; i++) {
        
        if (aNumeros[i] > num_comp){

            num_comp = aNumeros[i]

            console.log("Comparacion exitosa: " + num_comp );
        }
    }

}

console.log(valNumbM());


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let palabra = "";
let vocales = ["a","e","i","o","u"];
let cont_vocal = 0;

function numVocales( palabra){
    
    for (let i = 0; i < vocales.length; i++) {
        let letra = palabra[i].toLowerCase();
        
        if (vocales.includes(letra)) {
            cont_vocal++;
        }
    }
    console.log("Palabra: " + palabra);
    console.log("Cantidad de vocales: " + cont_vocal);
}

console.log(numVocales("Frutas"))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let meses = ["enero", "febrero", "marzo", "abril", "mayo"];
let meses_M = [];

function converMayus(meses) {
    
    for (let i = 0; i < meses.length; i++) {


        meses_M.push(meses[i].toUpperCase())   

        console.log("Minuscula: " + meses[i]);
    }
    
    for (let l = 0; l < meses_M.length; l++) {
        console.log("Mayuscula: " + meses_M[l])
    }
}

console.log(converMayus(meses))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numero

function numPrimo(numero) {

    if (numero < 2) {
        return false
    }
    
    for (let i = 2; i < Math.sqrt(numero); i++) {
        
        if (numero % i === 0) {
            return true
        }
    }
    console.log("Numero: " + numero)
}

console.log(numPrimo(6))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let arrayUno = [1, 2, 3, 4, 5];
let arrayDos = [5, 6, 3, 8, 9];


function numComunes(arrayUno, arrayDos) {
    
    let arrayNew = []

    for (let l = 0; l < arrayUno; l++) {

        let comunes1 = arrayUno[l];

        console.log("Valor a comun de 1 " + comunes2[l])
        
        for (let i = 0; i < array.length; i++) {

            let comunes2 = arrayDos[i];

            console.log("Valor a comun de 2 " + comunes2[i])

            if (comunes1 === comunes2) {
                arrayNew.push(arrayNew[i])
                console.log("Numeros Comunes: " + arrayNew[i])
            }
        }
    }

}

console.log(numComunes())

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado