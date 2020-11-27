//--- opcion uno ---convierto los elementos de formato JSON a objet de JS que se encuentran en el archivo "/tareas.json" y los guardo
// en la variable tareas

/*
const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync("./tareas.json"));

//pusheo una nueva tarea al array en el archivo JSON

tareas.push({
    titulo: "tarea3",
    completada: false
});
*/

//--- opcion dos --- creo un archivo tareas.js en el cual incluyo las funciones para parsear y leer los archivos json, importo el modulo
// y guardo en una variable para poder acceder

const archivoTareas = require("./tareas");

let tareas = archivoTareas.leerJson();


function listar(opcion) {


    switch (opcion) {

        case "listar":
            tareas.forEach((tareas, index) => console.log(index, " : ", tareas.titulo));
            break;

        case "crear":
            let tituloTarea = process.argv[3];
            if (tituloTarea != undefined) {
                console.log("Creando Nueva Tarea")
                let nuevaTarea = {
                    titulo: tituloTarea,
                    estado: "pendiente"
                }
                archivoTareas.guardarTarea(nuevaTarea);
            } else {
                console.log("Debe ingresar un titulo para la nueva tarea")
            }
            break;

        case undefined:
            console.log("Atencion - tienes que pasar una accion");
            break;

        default:
            console.log("No entiendo que quieres hacer");
    }
}

listar(process.argv[2])