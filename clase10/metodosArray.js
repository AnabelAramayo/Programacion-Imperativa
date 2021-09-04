// practicando métodos de un array
// array es un objeto

let libros = ["mal educadas", "mujeres que corren con lobos", "anormal", "solas"];
let series = ["mandalorian", "night manager", "what if", "gossip girl", "sharp knives"];  
let deportes = ["boxeo", "natacion"];
let mascotas = ["roco", "woody", "deisy", "bartolo", "deisy", "moreno", "bruno"];

// PUSH - AGREGA elementos AL FINAL del array
console.log(libros.push(`harry potter`))
console.log(libros)

//console.log(libros.push(`harry potter`, `crepusculo`))
//console.log(libros)

// POP - ELIMINA el ÚLTIMO elemento del array. Se suele guardar ese valor que eliminamos en una variable
console.log(series)
let seriesPop = series.pop()
console.log(seriesPop)

// SHIFT - ELIMINA el PRIMER elemento del array. Se suele guardar en una variable
let librosShift = libros.shift();
console.log(librosShift);

// UNSHIFT - AGREGA elementos al PRINCIPIO del array
console.log(deportes.unshift("handball", "tenis"))
console.log(deportes)

// JOIN - UNE los elemento de un array, usando el separador que queramos
console.log(mascotas.join())
console.log(mascotas.join(" - "))

// INDEXOF - BUSCA en el array el parametro que nosotros le digamos, devuelve el indice donde se encuentra
console.log(mascotas.indexOf("deisy"))

// LASTINDEXOF -BUSCA de atrás hacia adelante el parametro que nosotros le digamos, devuelve el indice donde se encuentra
console.log(mascotas.lastIndexOf("deisy"))

// INCLUDES - BUSCA en el array el parametros que nosotros le digamos, pero te devuelve un BOOLEANO
console.log(mascotas.includes("roco"))
console.log(mascotas.includes("pepita"))
