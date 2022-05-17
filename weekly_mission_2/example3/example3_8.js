console.log("Ejemplo 8 Metodos static nos ayudan a escribir metodos en una clase que podemos usar sin necesidad de instancia algun objeto")
class Toolbox{
    static getMostUsefulTools(){
        return["Command line","git","Text Editor"]
    }
}
console.log ("Ejemplo  8 :Metodos static")
//con esta opcion se llama el metodo static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
//si intentamos instalar un objeto, no podremos llamar este metodo static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function

/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/