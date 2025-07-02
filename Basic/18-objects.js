//Objetos

//Sintaxis

let person = {

    name: "Armando",
    age: 24,
    alias: "Mouredev"

}

//Acceso a propiedades


//Notacion punto
console.log(person.name)


//Notacion de corchetes
console.log(person["name"])


//Modificacione de propiedades
person.name = "Brais Moure"
console.log(person.name)


//Eliminacion de propiedades
delete person.age
console.log(person)

//Nueva propiedad
person.email = "mouredev@gamil.com"
person["age" = 39 ]

console.log(person);


//Metodos (Funciones)

let person2 = {

    name: "Juan",
    age: 45,
    alias: "Juancho",
    walk: function () {
        console.log("La persona camina")
    }
}

person2.walk();


//Anidacion de objetos

let person3 = {

    name: "Carlos",
    age: 28,
    alias: "Doctorcito",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 10,
        work: function () {
            console.log(`La persona de ${ this.age } años de experiencia trabaja`)
        } 
    }


}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()


//Igualdad de objetos

let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)


//Interacion
for (let key in person4) {
    console.log(key + ": " + person4[key])
}

//Funciones como objetos
function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)
