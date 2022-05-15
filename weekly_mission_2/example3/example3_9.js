console.log("Ejemplo 9: Herencia entre 2 clases")
class Developer{
    constructor(name,mainLang,stack){
        this.name = name
        this.mainLang = mainLang
    }

    get getName(){
                 return this.name
}
}
console.log("Ejemplo 9: Herencia entre 2 clases")
const pabloDev =new Developer ("Pablo","js",["elixir","groovy","lisp"])
console.log(pabloDev)

// se usa la palabra extends para indicar herencias en las propiedades de clase padre developer en la clase definida
// podemos definir una clase vacia y reusar todos los componentes de la clase padre

class LaunchXStudent extends Developer{
}
const pabloLaunchXDev = new LaunchXStudent("Carlo","js",["elixir","groovy","lisp"])
console.log(pabloLaunchXDev)
console.log(pabloLaunchXDev.getName)// getter de la clase padre reusada en la clase hija
