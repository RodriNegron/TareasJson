const fs = require ("fs");

const archivoTareas = {

    nombreArchivo: "tareas.json",

    leerJson: function (){
        return JSON.parse(fs.readFileSync(this.nombreArchivo))  //parsea los datos de formato JSON del archivo tareas.json a objects en JS
    },

    escribirEnJson: function (arraytareas){
        let tareasParseadasEnJson = JSON.stringify(arraytareas); //recibo un array de tares en formato object de JS y la parseo a JSON 
        fs.writeFileSync(this.nombreArchivo,tareasParseadasEnJson); //escribo las tareas JSON en el archivo .JSON
    },

    guardarTarea: function (tarea){
        let arrayTareasJS=this.leerJson();  //leo archivo JSON y guardo en un array de objects JS
        arrayTareasJS.push(tarea); // pusheo la nueva tarea al array
        this.escribirEnJson(arrayTareasJS); //escribo el array con la nueva tarea en el archivo JSON llamando a la funcion escribirEnJson
    },
    leerPorEstado: function(estado){
        let array=this.leerJson();
        return array.filter(tarea => tarea.estado==estado);
    },

    filtrarPorEstado: function(){

    } 
    
}

module.exports= archivoTareas;
