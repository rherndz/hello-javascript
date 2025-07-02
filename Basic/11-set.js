// Set

//Declaracion

let mySet = new Set();

console.log(mySet);


//Inicializacion

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"]);

console.log(mySet);


// Metodos Comunes

// Add

mySet.add("https://moure.dev");

console.log(mySet)

// Delete

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

console.log(mySet.delete("Moure"))
console.log(mySet.delete(2))

console.log(mySet)

// Has

console.log(mySet.has("Moure"));
console.log(mySet.has("Brais"));
    
// Size


console.log(mySet.size);

// Convierte un set a array

let myArrayP = Array.from(mySet);
console.log(myArrayP);

// Convertir un array a set 

mySet = new Set(myArrayP);
console.log(mySet);


// No admite duplicados

mySet.add("braismoure@mouredev.com");
mySet.add("braismoure@mouredev.com");
mySet.add("braismoure@mouredev.com");
mySet.add("BraisMoure@mouredev.com");
console.log(mySet);