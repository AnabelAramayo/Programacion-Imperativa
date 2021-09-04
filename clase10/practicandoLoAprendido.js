// ¿Que devuelven estos códigos?
//1
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
// da undefined porque numbers.lenght es 5, y con numbers [5] estaría queriendo llamar al índice 5, que no existe, puede existir, pero aún no lo hace.

//2
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
// devuelve Spiderman, porque estoy indicando que quiero entrar al indice 1 de grupoDeAmigos, y entrando al incide 0 de este grupo.

//3
let str = `un string cualquiera`;
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length -1])
// devuelve un string cualquiera porque le digo que vaya al 2do indice de grupoAmigos y que de ahí vaya al indicie 6, pero le resto uno, osea el 5 y como es str, es un string cualquiera.


/*El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(peliculas[2])

/* 2. Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

function aMayus (array) {
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();
    return array
}
console.log(aMayus(peliculas))

// ACORDARSE! Sobreescribirlo para poder guardarlo y no tener que hacer otra variable.

/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.
Importante: las películas animadas también deberían convertirse a
mayúsculas.*/

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function sumandoPeliculas (array1, array2) {
    return array1.push(array2)
}

let arrayUltimo = sumandoPeliculas(peliculas, peliculasAnimadas);
console.log(arrayUltimo)

/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento
del array de películas animadas es un videojuego. Ahora tenés que editar el
código y modificarlo de manera que puedas eliminar ese último elemento
antes de migrar el contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let peliculaBorrada = peliculasAnimadas.pop();
console.log(peliculaBorrada)
console.log(peliculasAnimadas)

/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son
iguales o diferentes. Te confirman que están en el orden adecuado y que solo
traen valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden
en orden al del array resultante de combinar películas con películas animadas.
Es decir, el primer elemento del array de películas general corresponde al
primer elemento de asiaScores y al primer elemento de euroScores, y así
sucesivamente.*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparandoCalificaciones (valor1, valor2, pelicula) {
    if (valor1 == valor2 ) {
        console.log("La pelicula " + pelicula + " tiene la misma puntuacion en europa y en asia");
    } else {
        console.log("La pelicula " + pelicula + " tiene diferente puntuacion en europa y en asia");
    }
}

console.log(comparandoCalificaciones (asiaScores[3], euroScores[3], peliculas[3]));
