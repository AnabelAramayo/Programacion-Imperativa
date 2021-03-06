const archivos = require(__dirname + "/jsonHelper");
const arrayPeliculas = archivos.leerJson("peliculas");

// A
let gestionDePeliculas = {
// B
    peliculas : arrayPeliculas,
// C
    listarPeliculas : function (array) {
        return array.forEach(i => console.log(
            `Titulo ${i.titulo},
            de ${i.director}.
            Duración de ${i.duracion} minutos,
            ${i.fuePremiada === true? "Premiada" : "No fue premiada"},
            ${i.calificacionIMDB} en IMDB`));
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
gestionDePeliculas.premiarPeliculaPorTitulo("Career Girls")

// CONSOLE-LOGS
//gestionDePeliculas.listarPeliculas(arrayPeliculas)
//console.log(gestionDePeliculas.buscarPorTitulo("Career Girls"))
//gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPremiadas())
//gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorDuracion(50,100))
//gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorCalificacion())
//gestionDePeliculas.duracionTotal()
