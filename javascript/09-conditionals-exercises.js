// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let div = " ----- " ;
    console.log(div);
    let text = "juan"
    let nombre = "juan";

    if (text === "juan") {
        text = nombre;
        console.log("Se cambio a: " + text);
    }else if (text !== "juan") {
        txt = "Yo seguire siendo: " + text;
        console.log(text);
    }
    
    

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    console.log(div);

    let username = "usuario123";
    let password = "12345";
    
    let usern_leng = username.length;
    let passw_leng = password.length;

    if ((username === "usuario123" && usern_leng === 10) && (password === "12345" && passw_leng === 5)) {
        console.log(" * Bienvenido a tu cuenta " + username  + " * ");
        
    }else if (!(username === "usuario123" && usern_leng === 10) && (password === "12345" && passw_leng === 5)) {
        console.log("El usuario no coincide");
        
    }else if ((username === "usuario123" && usern_leng === 10) && !(password === "12345" && passw_leng === 5)) {
        console.log("La contraseña no coincide");
        
    }else if((username !== "usuario123" ) || (password !== "12345") ){
        console.log("Datos erroneos");
    }


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

    console.log(div);

    let cero = 0;
    let numero = 100;

    if (numero == cero) {
        console.log("El numero ingresado es cero");
    }else if (numero > 0 && numero != cero) {
        console.log("El numero ingresado es positivo");
    }else{
        console.log("El numero ingresado es negativo");
    }



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    console.log(div);

    let edad = 15;
    let edad_permitidad = 18;
    let edad_faltante = edad_permitidad - edad;

    if (edad >= 18) {
        console.log("Si Puedes votar");   

        if (edad_faltante === 0) {
            console.log("Tiene los años exactos para votar");
        }
    }else if (edad <= 17) {
        console.log("No puedes votar");

        if (edad_faltante > 0) {
            console.log("años faltantes: " + edad_faltante);
        }
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    console.log(div);

    let person_age = 25;
    let value_age;

    if (person_age >= 18) {
        value_age = true;
    }else if (person_age <= 17) {
        value_age = false;
    }

    value_age ? console.log("Es mayor de edad") : console.log("No es mayor de edad");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    console.log(div);

    let mes = "marzo";
    let estacion;

    if ( mes === "enero") {
        estacion = "invierno"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);

    }else if (mes === "febrero") {
        estacion = "invierno"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "marzo") {
        estacion = "primavera"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "abril") {
        estacion = "primavera"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "mayo") {
        estacion = "primavera"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "junio") {
        estacion = "verano"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "julio") {
        estacion = "verano"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "agosto") {
        estacion = "verano"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "otoño") {
        estacion = "verano"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "octubre") {
        estacion = "verano"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "noviembre") {
        estacion = "verano"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }else if (mes === "diciembre") {
        estacion = "invierno"

        console.log("EL mes es: " + mes + " Su estacion es: " + estacion);
    }


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    console.log(div);

    let m_dias;

    if ( mes === "enero") {
        m_dias = 31;
        console.log("EL mes es: " + mes + " Los dias que tiene son: " + m_dias);

    }else if (mes === "febrero") {
        m_dias = 29;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " + m_dias);

    }else if (mes === "marzo") {
        m_dias = 31;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " + m_dias);

    }else if (mes === "abril") {
        m_dias = 30;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " + estacion);

    }else if (mes === "mayo") {
        m_dias = 31;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " + estacion);

    }else if (mes === "junio") {
        m_dias = 30;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " +m_dias);

    }else if (mes === "julio") {
        m_dias = 31;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " +m_dias);

    }else if (mes === "agosto") {
        m_dias = 31;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " +m_dias);

    }else if (mes === "septiembre") {
        m_dias = 30;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " +m_dias);

    }else if (mes === "octubre") {
        m_dias = 31;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " +  m_dias);

    }else if (mes === "noviembre") {
        m_dias = 30;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " + m_dias);

    }else if (mes === "diciembre") {
        m_dias = 31;

        console.log("EL mes es: " + mes + " Los dias que tiene son: " +  m_dias);
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

    console.log(div);

    let idioma = "ingles";
    let idioma_posicion;
    let idioma_value;

    if (idioma === "español") {
        idioma_posicion = 1; // español
    }else if (idioma === "ingles") {
        idioma_posicion = 2; // ingles
    }else if (idioma === "frances") {
        idioma_posicion = 3; // frances
    }

    switch (idioma_posicion) {
        case 1:
            idioma_value = "hola, como estas?";
            console.log("Idioma identificado: " + idioma + " Saludo: " +  idioma_value);
            break;
        case 2:
            idioma_value = "hello, how are you?";
            console.log("Idioma identificado: " + idioma + " Saludo: " +  idioma_value);
            break;
        case 3:
            idioma_value = "Bonjour comment allez-vous?";
            console.log("Idioma identificado: " + idioma + " Saludo: " +  idioma_value);
            break;
        default:
            console.log("Idioma no identificado");
            break;
    }
    

// 9. Usa un switch para hacer de nuevo el ejercicio 6

    console.log(div);

    if (mes === "marzo" || mes === "abril" || mes === "mayor") {
        num_estacion = 1;
    }else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        num_estacion = 2;
    }else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
        num_estacion = 3;
    }else if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        num_estacion = 4;
    }

    switch (num_estacion) {
        case 1:
            estacion = "primavera";
            console.log("El mes " + mes + " tiene la estacion " + estacion);
            break;
        case 2:
            estacion = "verano";
            console.log("El mes " + mes + " tiene la estacion " + estacion);
            break;
        case 3:
            estacion = "otoño";
            console.log("El mes " + mes + " tiene la estacion " + estacion);
            break;
        case 4:
            estacion = "invierno";
            console.log("El mes " + mes + " tiene la estacion " + estacion);
            break;
    }

// 10. Usa un switch para hacer de nuevo el ejercicio 7

    console.log(div);

    let d_posicion;
    let d_cantidad;

    if ( mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
        d_posicion = 1;
    }else if(mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre"){
        d_posicion = 2;
    }else if(mes === "febrero"){
        d_posicion = 3;
    }

    switch (d_posicion) {
        case 1:
            d_cantidad = 31;
            console.log("EL mes es: " + mes + " Los dias que tiene son: " + d_cantidad);
            break;
        case 2:
            d_cantidad = 30;
            console.log("EL mes es: " + mes + " Los dias que tiene son: " + d_cantidad);
            break;
         case 3:
            d_cantidad = 28;
            console.log("EL mes es: " + mes + " Los dias que tiene son: " + d_cantidad);
            break;
    }