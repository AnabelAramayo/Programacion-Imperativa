const archivos = require(__dirname + "/lecturaEscritura");
const arrayAutos = archivos.leerJson("autos")

let carrera = {
    //A
    autos : arrayAutos,
    //B
    autosPorTanda : 6,
    //C
    autosHabilitados : function () {
        return this.autos.filter(function(hab){
            return hab.sancionado === false;
        }) 
        //otra opcion (a => a.sancionado === false)
    },
    //D
    listarAutos : function (array) {
        array.forEach(i=> console.log(
            `Piloto: ${i.piloto},
            Patente:  ${i.patente},
            Velocidad:  ${i.velocidad},
            Peso en kg:  ${i.peso},
            Estado: ${i.sancionado===true? 'habilitado' : 'no habilitado'}`)
            )
    },
    //E
    buscarPorPatente : function (patente) {
        return this.autos.filter(i => i.patente === patente)
    },
    //F
    filtrarPorCilindrada : function (cil) {
        return this.autosHabilitados().filter(i=>i.cilindrada<=cil)
    },
    //G
    ordernarPorVelocidad : function () {
        return this.autos.sort(function(a,b){
            return a.velocidad - b.velocidad;
        })
        // otra opcion this.autos.sort((a,b)=>a.velocidad - b.velocidad)
    },
    //H
    habilitarVehiculo : function (patente) {
        let buscado = this.buscarPorPatente(patente);
        if(buscado !== undefined){
            buscado.sancionado = false;
            let nuevo = JSON.stringify(this.autos);
            fs.writeFileSync('./Autos/autos.json',nuevo);
            return buscado;
        }


        let arrayModificado = [];
            if (i.patente === patente) {
                this.autos.sort( )
            }
    }
}

//CONSOLE LOGS
//console.log(carrera.autos)
//console.log(carrera.autosHabilitados())
//carrera.listarAutos(arrayAutos)
//console.log(carrera.buscarPorPatente("CJK912"))
//console.log(carrera.filtrarPorCilindrada(2000))
//console.log(carrera.ordernarPorVelocidad())






/*
const productos =[
    {id:1, nombre: "zapatillas", precio:10000},
    {id:2, nombre: "remera", precio:3000},
]
const sumaProd = productos.reduce((acc, producto) => acc + producto.precio, 0)

const prodMod = productos.map(prod => {
    return {
        ... prod, //precio: prod.precio + prod.precio - 0.1 
    }
    })*/

