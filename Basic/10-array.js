// Array

// Declaracion

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicializacion

myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

//---
myArray = [1,2,3,4];

myArray2 = new Array(1,2,3,4);

console.log(myArray);
console.log(myArray2);

//----
myArray = ["Brais","Moure","mouredev",4, true];

myArray2 = new Array("Brais","Moure","mouredev",4, true);

console.log(myArray);
console.log(myArray2);

//----
myArray2 = new Array(3);

myArray2[2] = "BRAIS";
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

//----
myArray = [];
myArray[2] = "Brais";
// myArray[0] = "Moure";
myArray[1] = "mouredev";

console.log(myArray);

// Metodos Comunes 

// PUSH - Para insertar datos

myArray3 = [];

myArray3.push("Brais");
myArray3.push("Moure");
myArray3.push("mouredev");
myArray3.push(37);

console.log(myArray3);

// POP - Elimina el ultimo y lo devuelve

console.log(myArray3.pop());

myArray3.pop();

console.log(myArray3);

// Length 

console.log(myArray3.length);

// clear

myArray4 = [];
myArray4.length = 0; // alternativa
console.log(myArray4);
    
// slice

myArray5 = ["Brais", "Moure", "mouredev", 37, true];

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray5.splice(1,3);
console.log(myArray5);

myArray5 = ["Brais", "Moure", "mouredev", 37, true];

myArray5.splice(1,2, "Nueva entrada");
console.log(myArray5);

