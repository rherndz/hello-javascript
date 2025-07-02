// 1. Crea un array que almacene cinco animales

let arrayAnimales = ["Vaca", "Conejo", "Burro", "Perro", "Gato"];

console.log(arrayAnimales);

// 2. Añade dos más. Uno al principio y otro al final

arrayAnimales.push("Pez");

arrayAnimales[0] = "Mapache";

console.log(arrayAnimales);

// 3. Elimina el que se encuentra en tercera posición

arrayAnimales.splice(2,1);    

console.log(arrayAnimales);

// 4. Crea un set que almacene cinco libros

let setLibros = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"]);

console.log(setLibros);

// 5. Añade dos más. Uno de ellos repetido

setLibros.add("Libro Agreado 1");

setLibros.add("Libro 3");

console.log(setLibros);

// 6. Elimina uno concreto a tu elección

setLibros.delete("Libro 4")

console.log(setLibros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapMes = new Map();

mapMes = new Map ([
    
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril - Juan"],
    [5, "Mayo"]

])

console.log(mapMes);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMes.has(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapMes.set(6 , ["Enero, Abril, Agosto"] )

console.log(mapMes);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

//Creacion de Array

let newArray = ["Conejo", "Perro", "Gato", "Tortuga"]

console.log(newArray);

//Conversion de Array a Set

newSet = new Set(newArray);

console.log(newSet);

// Almacenamiento en un Map

newMap = new Map([
    ["Array de Animales", newSet]
])

console.log(newMap);