let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let peliculasOtras = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function pasajeDeElementos(array1, array2) {
    for (let i=0; i=array2.length;i++) {
    array1.push(array2.pop().toUpperCase())
    }
    return array1
}

console.log(pasajeDeElementos(peliculasOtras,peliculasAnimadas))


