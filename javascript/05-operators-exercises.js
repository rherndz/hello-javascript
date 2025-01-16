// 1. Crea una variable para cada operación aritmética

    let suma = 4 + 2;
    let resta = 5 - 2;
    let multiplicacion = 5 * 2;
    let division = 4 / 2;

    let Modul = 4 % 2;
    let Expo = 5 ** 2;
    //let increm = a++;
    //let decrem = b--;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let asig = 2;
    asig += 2 ;

    asig -= 2;
    asig *= 2;
    asig /= 2;
    asig %= 2;
    asig **= 2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    
let p3 = " ----- " ;
    console.log(p3)

    let comp1 = 5 > 2;
    console.log(" - " + comp1);

    let comp2 = 1 == 1;
    console.log(" - " + comp2);

     let comp3 = 1 === 1;
    console.log(" - " + comp3);

    let a = 2;
    let b = 2;

    console.log(a == b);
    console.log(a === 2);
    console.log(a != 3);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    let p4 = " ----- " ;
    console.log(p4)

    let compf1 = 10 >= 15 ;
    console.log(compf1)

    let compf2 = 1 == null ;
    console.log(compf2)

    let a_f = true;
    let b_f = false;

    console.log(a_f === b_f);
    console.log(a_f != true);
    console.log(a_f == "true");

// 5. Utiliza el operador lógico and

    let p5 = " ----- " ;
    console.log(p5);

    let edad1 = 18;
    let edad2 = 18;

    if(edad1 && edad2 >= 18 ){
        console.log("Puedes pasar, eres mayor de edad ");
    }else{
        console.log("No puedes pasar, eres menor de edad");
    }

// 6. Utiliza el operador lógico or
    let p6 = " ----- " ;
    console.log(p6);

    let num1 = 3;
    let num2 = 5;

    console.log(num1 < num2 || num2 > num1);
// 7. Combina ambos operadores lógicos
    let p7 = " ----- " ;
    console.log(p7);

    console.log(100 == 100 && 50 > 45 );

// 8. Añade alguna negación
    let p8 = " ----- " ;
    console.log(p8);

    console.log(!false)

// 9. Utiliza el operador ternario
    let p9 = " ----- " ;
    console.log(p9);


// 10. Combina operadores aritméticos, de comparáción y lógicas

    let p10 = " ----- " ;
    console.log(p10);