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