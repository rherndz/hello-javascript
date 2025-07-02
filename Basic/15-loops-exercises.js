// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    //console.log([i]);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
let j = 0;
let cont;

for (let i = 1; i <= 100; i++) {
    j++;
    cont = i;
    console.log([" Numero: " , i]);
}

suma = j + cont;

console.log("Suma total de los numero: " + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    
    if ( i % 2 != 0) {
        let numPares = i;
        console.log(numPares)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let array = new Array();

array = ["Marta", "Jose", "Maria", "Pedro", "Mariana"]

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("------------------------------")

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let palabra = "Monumento";
let contVocal = 0;
let = vocales["a","e","i","o","u"]

for (let i = 0; i < palabra.length; i++) {
    let contp = palabra[i].toLowerCase();

    if (vocales.includes(letra)) {
        contVocal++;
    }
}

console.log("Palabra: " + palabra)

console.log("Cantidad de vocales: " + contVocal)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

console.log("------------------------------")

let arrayNum = [1,2,3,4,5];

let resultadoM = 1;

for(let i = 0; i < arrayNum.length; i++){

    console.log("Posicion: " + i);
    console.log("Numero: " + arrayNum[i]);

    resultadoM *= arrayNum[i];

    console.log("Producto parcial: " + resultadoM);
    console.log(" ---- ");
}

console.log("Resultado: " + resultadoM);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 

let numM = 5;
let multip = 0;
let index;

console.log("---------------------------------");
console.log(" TABLA DE MULTIPLICAR DEL 5 ");   
console.log("---------------------------------");    

for ( index = 1; index <= 5; index++) {
    
    multip+= index * numM;    
     
    console.log(" Multiplicacion: " + numM + " X " + index);   
    console.log(" Resultado: " + numM * index );
    console.log("---------------------------------");    
}

// 8. Usa un bucle para invertir una cadena de texto

let cad_text = "hola";
let cad_inv = "";

for (let i = cad_text.length-1; i >= 0; i--) {
    cad_inv += cad_text[i]
}

console.log(" Cadena normal : " + cad_text);

console.log(" Cadena invertidad : " + cad_inv);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


let numA = 0;
let numB = 1;

for (let i = 3; i <= 10; i++) {
    
    let numSig = numA + numB;

    console.log("Numero siguiente: " + numSig);

    numA = numB;
    numB = numSig;
}




// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrNumeros = [1,15,10,3,8,11,20,1,3,10,11];
let newArray = [];

for (let i = 0; i < arrNumeros.length; i++) {
    
    if (arrNumeros[i] > 10 ) {

        newArray.push(arrNumeros[i]);
    }
}
    console.log(" ------- Nuevo Array --------------- ")
    for (let k = 0; k < newArray.length; k++) {
        console.log("Nuevo elemento al Array: " +  newArray[k] )
    }


