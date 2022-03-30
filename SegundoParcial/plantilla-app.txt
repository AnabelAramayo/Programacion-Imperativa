const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "TEMA 4";

const arrayProfesionales = [
  {
    id: 0,
    estaHabilitado: false,
    nombre: "Huber Wilkins",
    email: "huberwilkins#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
  },
  {
    id: 1,
    estaHabilitado: true,
    nombre: "Goldie Haley",
    email: "goldiehaley#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 3,
  },
  {
    id: 2,
    estaHabilitado: false,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 9,
  },
  {
    id: 3,
    estaHabilitado: false,
    nombre: "Leanne Burch",
    email: "leanneburch#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 13,
  },
  {
    id: 4,
    estaHabilitado: false,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 75,
  },
  {
    id: 5,
    estaHabilitado: true,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 32,
  },
  {
    id: 6,
    estaHabilitado: true,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 67,
  },
  {
    id: 7,
    estaHabilitado: true,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 2,
  },
  {
    id: 8,
    estaHabilitado: true,
    nombre: "Guerra Bright",
    email: "guerrabright#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 9,
    estaHabilitado: true,
    nombre: "Dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    nombre: "Stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
  },
  {
    id: 11,
    estaHabilitado: false,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 12,
    estaHabilitado: true,
    nombre: "Mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 2,
  },
  {
    id: 13,
    estaHabilitado: false,
    nombre: "Ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 23,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
// A.
let appProfesionales = {
  profesionales : arrayProfesionales,

// B
  listarProfesionales : function (array) {
    for ( let i = 0; i<array.length; i++) {
      let variable = array[i];
      console.log (
        "El id es: " + variable.id +
        ", la especialidad es: " + variable.especialidad +
        ", el nombre del profesional es: " + variable.nombre +
        " y tiene: " + variable.cantidadConsultas + " consultas." +
        " El email es: " + variable.email)
    }
  },

// C
  filtrarHabilitadosPorEspecialidad: function (especialidad) {
    let profesionalesHabilitadosPorEspecialidad = [];
    for (let i=0; i<this.profesionales.length; i++) {
      if (this.profesionales[i].estaHabilitado && this.profesionales[i].especialidad === especialidad) {
        profesionalesHabilitadosPorEspecialidad.push(this.profesionales[i]);
      }
    }return profesionalesHabilitadosPorEspecialidad;
  },

// D
  buscarPorID : function (id) {
    let profesionalEncontrado = [];
    for (let i=0; i<this.profesionales.length;i++){
      if (this.profesionales[i].id === id){
        profesionalEncontrado.push(this.profesionales[i])
      }
    }return profesionalEncontrado
  },

// E
  realizarConsulta: function(id) {
    let miProfesional = this.buscarPorID(id);
    miProfesional.cantidadConsultas++
    return miProfesional;
  },

// F
//perdón profe, lo di todo :(
}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: "Anabel Aramayo", tema: "tema 4"}]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí
appProfesionales.listarProfesionales(arrayProfesionales);

console.log(v, oo + "   C. filtrarHabilitadosPorEspecialidad('Cardiologia')");
// Ejecución aquí
console.log(appProfesionales.filtrarHabilitadosPorEspecialidad("Oftamologia"));

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí
console.log(appProfesionales.listarProfesionales(appProfesionales.buscarPorID(5)));

console.log(v, oo + "  E. realizarConsulta()");
// Ejecución aquí
console.log(appProfesionales.realizarConsulta(5));

console.log(v, oo + " F. corregirEmails");
// Ejecución aquí
console.log(o);