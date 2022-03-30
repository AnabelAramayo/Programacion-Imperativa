const { basename } = require('path')
const json = require('./jsonHelper')
const bicicletas = json.leerJson('bicicletas')

//A
let carrera = {
//B
    bicicletas : bicicletas,
//C
    bicicletasPorTanda : 4,
//D 
    listarBicicletas : function (array) {
        array.forEach(i => console.log (
            `Ciclista: ${i.ciclista}, marca: ${i.marca}, rodado: ${i.rodado}, peso: ${i.peso} kg, largo: ${i.largo} cm,
            estado: ${i.dopaje?"inhabilitado":"habilitado"}`)
        )
    },
//E
    ciclistasHabilitados : function () {
        return this.bicicletas.filter(i=>i.dopaje===false)
    },
//F
    buscarPorId : function (idABuscar) {
        return this.bicicletas.find(i=>i.id === idABuscar)
    },
//G
    filtrarPorPeso : function (pesoABuscar) {
        return this.ciclistasHabilitados().filter(i=>i.peso <= pesoABuscar)
    },
//H
    ordenarPorRodado : function () {
        return this.bicicletas.sort((a, b)=> a.rodado - b.rodado)
    },
//I
    largoPromedio : function () {
        let total = this.bicicletas.reduce((acum, num)=>acum + num.largo, 0)
        console.log(`El largo promedio es: ${total/(this.bicicletas.length)}`)
    },
//J
    aumentarPeso : function (aAumentar, idABuscar) {
        let modificado = this.buscarPorId(idABuscar)
        if (modificado) {
            modificado.peso = modificado.peso + aAumentar;
            json.escribirJson('./bicicletas', this.bicicletas)
        } return modificado;
    },
// K
    generarTanda : function(rodado,peso){
        let filtro = this.ciclistasHabilitados().filter(e => e.rodado <= rodado && e.peso >= peso)
        let filtroPorTanda = filtro.slice(0,this.bicicletasPorTanda)
        return filtroPorTanda
    },
// L
    calcularPodio : function(array){
        let ordenados = array.sort((a,b) => b.puntaje - a.puntaje)
        console.log(`El ganador es: ${ordenados[0].ciclista}, con un puntaje de ${ordenados[0].puntaje}.
        El segundo puesto es para ${ordenados[1].ciclista}, con un puntaje de ${ordenados[1].puntaje}.
        El tercer puesto es para ${ordenados[2].ciclista}, con un puntaje de ${ordenados[2].puntaje}.`)
    },
}

//CONSOLE-LOGSSS
//carrera.listarBicicletas(bicicletas)
//carrera.listarBicicletas(carrera.ciclistasHabilitados())
//console.log(carrera.buscarPorId(10))
//carrera.listarBicicletas(carrera.filtrarPorPeso(7))
//carrera.listarBicicletas(carrera.ordenarPorRodado())
//carrera.largoPromedio()
//console.log(carrera.aumentarPeso(1,1))
