// practicando metodos de string
// cuando una función le pertenece a un objeto lo llamamos método

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let peliculasOtras = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let frase = `Para aquellas que siguen buscando respuestas`;
let autora = `     Flor  Freijo     `

// LENGTH - te dice cuantos elementos tengo dentro
console.log(peliculasAnimadas.length)
console.log(peliculasOtras.length)

// INDEXOF - te indica en qué indice se encuentra la palabra o letra que quiero. 
console.log(frase.indexOf("aquellas"))
console.log(frase.indexOf("siguen"))
console.log(frase.indexOf("a"))
console.log(frase.indexOf("buscando"))

// SLICE - corta el string y devuelve esa parte
console.log(frase.slice(6,24))
console.log(frase.slice(0,24))
console.log(frase.slice(25))
console.log(frase.slice(-10))

// TRIM - borra los espacios del principio y del final del string pero no los del medio. NO recibe parametros.
console.log(autora.trim())

// SPLIT - separa mi string y lo convierte en un array
console.log(frase.split(` `))
console.log(frase.split(``))
console.log(frase.split())

// REPLACE - reemplaza una parte del string por otra
console.log(frase.replace(`aquellas`, `aquellos`))
console.log(frase.replace(`aquellas`, `aquellas, que se ahogan en sus emociones,`))
console.log(frase.replace(`respuestas`,``))
