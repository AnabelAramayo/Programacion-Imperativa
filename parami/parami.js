//1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
//2
function aMayus (array) {
    let peliculasEnMayus= [];
    for (let i=0; i<array.length; i++){
//       console.log("paso por aca" + i)
//       console.log(array[i])
        peliculasEnMayus.push(array[i].toUpperCase())
    } return peliculasEnMayus
}
//lo que estoy haciendo es hacer una variable nueva donde estoy guardando mis peliculas en mayuscula
//Cada pelicula una vez que se pasa a mayuscula, le hago push, por lo que mi variable hace de acumulador
//la variable la hago afuera por el scope, y porque así no se ve afectada por el for haciendo que me sea
//viable sacarla de la iteracion y que me permita guardar mis peliculas en mayus

/*
function aMayus (array) {
    for(let i=0; i<array.length;i++){
        array[i]=array[i].toUpperCase();
    }return array
}

lo que le estoy diciendo es que me lo guarde en la misma variable, que me lo reasigne
así no tengo la necesidad de hacer una nueva variable. Puedo decir que me lo reemplaza.
*/

let peliculasEnMayuscula = aMayus(peliculas)
//console.log(peliculasEnMayus)
//3
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
/*
function juntandoArrays (array1,array2){
    let granArray = [];
    for (let i=0; i<array1.length;i++){
        granArray.push(array1[i].toUpperCase())
        granArray.push(array2[i].toUpperCase())
    }return granArray
}
let misPeliculasJuntas = juntandoArrays(peliculasAnimadas,peliculas)
console.log(juntandoArrays(peliculasAnimadas, peliculas))*/
//4
/*
function juntandoArrays (array1,array2){
    for (let i=0; i<array1.length;i++){
        array1[i].push(array2[i])
}return array1
}
console.log(juntandoArrays(peliculas, peliculasAnimadas))
*/
