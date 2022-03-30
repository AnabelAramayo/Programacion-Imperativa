const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "ANABEL ARAMAYO";
const tema = "TEMA 1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivos = require(__dirname + "/jsonHelper");
const arrayPeliculas = archivos.leerJson("peliculas");


//A
let gestionDePeliculas = {
// B
    peliculas : arrayPeliculas,
// C
    listarPeliculas : function (array) {
        return array.forEach(i => console.log(
            `${i.titulo},
            de ${i.director}.
            Duración de ${i.duracion} minutos,
            ${i.fuePremiada === true? "Premiada" : "No fue premiada"},
            (${i.calificacionIMDB} en IMDB)`));
        },
//D 
    buscarPorTitulo : function (titulo) { 
        return this.peliculas.find(i=>i.titulo === titulo)
        },
// E
    peliculasPremiadas: function() {
        return this.peliculas.filter(i=>i.fuePremiada)
        },
// F
    filtrarPorDuracion : function (minimo, maximo) {
        return this.peliculas.filter(i=>i.duracion >= minimo && i.duracion<=maximo)
        },
//G
    ordenarPorCalificacion : function () {
        return this.peliculas.sort((a,b)=>a.calificacionIMDB - b.calificacionIMDB)
        },
// H
    duracionTotal : function() {
        let total = this.peliculas.reduce((acum, num)=>acum + num.duracion, 0)
        console.log(`La duración de todas las películas sumadas es de ${total} minutos`)
        },
//I
    premiarPeliculaPorTitulo : function (tituloABuscar) {
        let modificado = this.buscarPorTitulo(tituloABuscar)
        if (modificado) {
            modificado.fuePremiada = true;
            archivos.escribirJson('./peliculas', this.peliculas)
        } return modificado;
    },
}



/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(arrayPeliculas);

console.log(v, oo + " .D. Buscar");
//console.log(gestionDePeliculas.buscarPorTitulo("Tom and Huck"));

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPremiadas());

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorDuracion(50,100))

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorCalificacion())

console.log(v, oo + " .H. Duracion");
gestionDePeliculas.duracionTotal()

console.log(v, oo + " .I. Modificar Propiedad");
gestionDePeliculas.premiarPeliculaPorTitulo("Career Girls")
console.log(gestionDePeliculas.buscarPorTitulo("Career Girls"))
