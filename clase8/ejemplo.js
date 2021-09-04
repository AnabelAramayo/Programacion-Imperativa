
function promedio (nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
}

// mayo o igual aprobado, menor desaprobado

function aprobamos (nota1, nota2, nota3) {
    let resultado = promedio(nota1, nota2, nota3);
    if (promedio >=7) {
        console.log("aprobaste")
    }
    else {
        console.log("desaprobaste")
    }
}

aprobamos (1,6,8);

// EJERCICIOS EXTRAS DEL PROFE

function dividir (num1, num2) {
        if (num2 === 0) {
            return "error:no se puede dividir por cero";
        }
        return num1 / num2;
}
// puede reemplazarse por una versión más sintética

function dividirr (num1, num2) {
    return num2 === 0 ? "error: nose puede dividir por cero" : num1 / num2 ;
}
console.log(dividirr(5, 0))

// VAMOS CON EL SIGUIENTE
//Crear una función que reciba un valor y nos retorne si ese valor es par o impar.

function queEs (num) {
    return num % 2 == 0 ? "es par" : "es impar";
}
console.log(queEs(6));

// Crear una función que levante una barrera si el vehículo pagó el peaje BOOLEANO

let pago = "si";
function peaje (pago) {
    if (pago == "si") {
        console.log("arriba barreras");
    } else {
        console.log("no puede pasar");
    }
}
peaje("hola");

// Crear una función que reciba un número y retorne si es el mismo que eligió al azar la función Math.random() entre 0 y 10.

//  Crear una función que al recibir una fecha indique si la misma es navidad o no

//function fecha (esNavidad) {
//    return esNavidad == "25 de diciembre"? "Sí, es navidad" : "Todavía no es navidad";}
//console.log(fecha("25 de diciembre"));

function fecha (esNavidad) {
    if (esNavidad == "25 de diciembre") {
        console.log("Sí, es navidad");
    } else {
        console.log("Todavía no es navidad");
    }
}
fecha("25 de diciembre");

// hacer una suma y el resultado guardarlo en una variable para usarlo después en una resta

function sumar(num1, num2){
    return num1 + num2;
}
let resultado=sumar(5,10);
function restar (num1, num2){
    return resultado-num1-num2;
}
console.log(restar(11,2));

// hacer una función que al recibir un mes, con un switch, nos indique cuántos días tiene ese mes.

function queMes (mes) {
    switch (mes){
        case "Diciembre":
        case "Julio":
        case "Enero":
        case "Agosto":
            console.log("Tiene 31 días");
            break;
        case "Febrero":
            console.log("Tiene 28 días");
            break;
        default: {
            console.log("Tiene 30 días")
        }
    }
}
queMes("Marzo");

// crear una función que reciba un valor por parámetro e indique que el alumno recursa si tiene una nota menor a 4, va a recuperatorio si tiene una nota menor a 7 y aprueba en el caso de que la nota sea igual o superior a 7.

function recursa (nota) {
    if (nota <= 4) {
        console.log("Recursas")
    }
    else if (nota<7) {
        console.log("Vas a recuperatorio")
    }
    else {
        console.log("Estas aprobado")
    }
}
recursa(10);

// crear una función que retorne si una nave espacial que está entrando a la atmósfera ya puede abrir su paracaídas. La altura debe ser entre 2000 m. y 3000 m., y la velocidad debe ser menor a 1000 km/h.

function naveEspacial (estado, altura, velocidad) {

    if (estado == "Entrando a la atmósfera") {
        console.log("puede abrir el paracaídas");
    }
    else {
        console.log("Todavía no, hay que esperar");
    }

    if (altura>=2000 && altura<=3000) {
        console.log("Estamos cerca");
    }else {
        console.log("Vas a morir")
    }

    if (velocidad<1000){
        console.log("Velocidad adecuada");
    }else {
        console.log("No es la velocidad requerida");
    }
}
naveEspacial("asdfasd",1000,500)

// Crear una función llamada dividir, que reciba dos parámetros y realice la división del primero con el
//segundo. En caso de que el segundo parámetro sea 0 deberá retornar "No se puede dividir por 0", caso
//contrario, deberá retornar el resultado de la división.

function dividir (numero, numero2) {
    if (numero2==0){
    console.log("No se puede dividir por 0");
    }else {
        return numero/numero2;
    }
}
console.log(dividir(10,2));

// Tomando esto de ejemplo, crear una función que reciba por parámetro un mes y devuelva a qué estación climática pertenece (verano, invierno, otoño o primavera).
let mes = ("Julio");
switch (mes) {
    case ("Enero"):
    case ("Febrero"):
    case ("Diciembre"):
        console.log("Estamos en verano");
        break;
    case ("Marzo"):
    case ("Abril"):
    case ("Mayo"): 
        console.log("Estamos en otoño");
        break;
    case ("Junio"):
    case ("Julio"):
    case ("Agosto"):
        console.log("Estamos en invierno");
        break;
    case ("Septiembre"):
    case ("Octubre"):
    case ("Noviembre"):
        console.log("Estamos en primavera");
        break;
    default:
        console.log("No es un mes");
}

//EJERCICIO EN CLASE 6 --------------------

let edad=20 

if(edad<18) {
console.log("No puede pasar al bar.")
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")

} else if(edad <= -1){
console.log("Error, edad inválida. Por favor ingrese un número válido.")

}else if(edad == 21){
    console.log("Felicidades por ser mayor, pasate al bar y tomate una birra")

}else {
console.log("Puede pasar al bar y tomar alcohol.")
}

let edadImpar =  edad % 2 == 0 ? " " : "¿Sabías que tu edad es impar?"

console.log(edadImpar);

/*
Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
litrosConsumidos.
A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones.
● Si el vehículo es “coche”, el precio por litro es de $86,
● Si es “moto” ha de ser $70.
● Si es “autobús” ha de ser $55.
● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.
*/


function totalAPagar(vehiculo, litrosConsumidos){


    let precioXLitro;
    let precioTotal = 0;
    
        switch(vehiculo){
            case "coche":
                precioXLitro = 86;
                break;
            case "moto":
                precioXLitro = 70;
                break;
            case "autobus":
                precioXLitro = 55;
                break;
            default:
                console.log("Ingrese un vehiculo correspondiente");
        }
    
        if( litrosConsumidos >= 0 && litrosConsumidos <= 25 ){
    
            precioTotal = precioXLitro * litrosConsumidos + 50;
    
        }else if(litrosConsumidos > 25){
            precioTotal = precioXLitro * litrosConsumidos + 25;
        }
    
        console.log(precioTotal)
    }
    
    
    totalAPagar("asdasdasd", 30);

/*Crear una función llamada sumatoria que reciba dos parámetros numéricos y retorne la suma de ellos si
ambos son mayores a 10, en caso de que alguno de ellos, o ambos, no lo sean deberá retornar "Por favor
ingrese números de 2 dígitos"*/

function sumatoria (n1, n2){
    let resultado = n1+n2;
    if (n1>10 && n2>10) {
        console.log(resultado);
    } else {
        console.log ("Por favor ingrese números de 2 dígitos");
    }
}
sumatoria(12,20);
//
let a = 35;
let b = a;
a = 5;
console.log(b);

console.log(5*"4")


/*Desarrollar una función llamada cuadradoDeUnNumero, que reciba un parámetro,
la misma deberá verificar que el tipo de dato sea number, en caso de ser así
retornará ese numero elevado al cuadrado, caso contrario retornar un mensaje
"No es posible operar con el tipo de dato" + <tipo de dato>. Deberá tener la
invocación de dicha función.*/

function cuadradoDeUnNumero (Numero){
    let number = Math.pow(Numero,2);
    if (typeof Numero === 'number') {
        return number;
    } else {
        return "No es posible operar con el tipo de dato" + " " + Numero
    }
}
console.log(cuadradoDeUnNumero(2))
// me da 4
console.log(cuadradoDeUnNumero("hola"))
// me da No es posible operar con el tipo de dato hola

/*Crear una función llamada esBisiesto que reciba un año por parámetro y nos
determine si el mismo es un año bisiesto, deberá retornar un mensaje en el que
indique el año ingresado y si es o no bisiesto. Tené en cuenta que tomaremos como
año bisiesto aquellos años que sean divisibles por 4, o por 100 o por 400.*/

function esBisiesto (anio) {
    if (anio % 4 === 0 || anio % 100 === 0 || anio % 400 === 0){
        return anio + " " + "es un año bisiesto";
    } else {
        return anio + " " + "no es un año bisiesto";
    }
}
console.log(esBisiesto(2008));

