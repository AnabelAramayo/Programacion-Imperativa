//2
let fs = require('fs');

const leerJson = function (nombreArchivo) {
    let data = JSON.parse(fs.readFileSync('./' + nombreArchivo));
    return data
    };

// 3
const escribirJson = function (nombreArchivo, datos) {
    let arrayAutos = leerJson('AUTOS.json');
    arrayAutos.push(datos);
    fs.writeFileSync('./' + nombreArchivo, JSON.stringify(arrayAutos))
    return 'Ok, se agrego tu nuevo dato'
    };

let auto = {
    nombre: "Rayo McQueen",
    modelo: "2001",
    anio: 1992,
    precio: 652770,
    patente: "WAU329",
    vendido: true
}

console.log(escribirJson('AUTOS.json', auto));