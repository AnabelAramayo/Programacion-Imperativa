//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];

let banco = {

}

let arrayCliente = []
let cliente = ""

for (let i = 0; i < arrayCuentas.length; i++){
    let cliente = arrayCuentas[i]["titularCuenta"]
    arrayCliente.push(cliente)
}

console.log(arrayCliente)
console.log(arrayCuentas[0].titularCuenta);

//// Clase extra

let arrayPersonas = [
    {

    }
]

const empresa = {
    nombre:'SuperDesarrolladores',
    empleados: arrayPersonas,
    listarEmpleados:function(){
        for (let i=0; i<this.empleados[i]; i++){
            let empleado=this.empleados[i];
            console.log('Nombre: ' + empleado.nombre + 'Edad: ' + empleado.edad);
        }
    },
    buscarPorDni:function(dni){
        //buscar por dni
        for (let i=0; i<this.empleados.length; i++){
            const empleado=this.empleados[i]; // empleado en iteracion
            if (dni === empleado.dni) {
                return this.empleados;
            }
        } return "Disculpe, empleado no encontrado";
    },
    depositar (empleado, montoADepositar) { //depositar (dni,montoADepostiar)
        // invoco a un metodo buscarPorDni () dentro del obj empresa y lo que me retorne lo asigno a la variable
        // let empleado = this.buscarPorDni(dni)
        empleado.depositado = montoADepositar;
        return empleado;
    }
}

console.log(empresa.buscarPorDni(20202020))
let empleadoEncontrado = empresa.buscarPorDni(20202020); // esto no esta tan bien
empresa.depositar(empleadoEncontrado, 50000); // 
console.log(empresa.buscarPorDni(20202020))// 

//en realidad BIEN sería:
//console.log('BUSCAR POR DNI')
//console.log(empresa.buscarPorDni(20202020))// 
//console.log(empresa.depositar(20202020,50000))
//console.log('DEPOSITAR')
//console.LOG(EMPRESA.DEPOSITAR(202020,5000))
