console.log("Ejemplo 4 :Metodos en los objetos")
class Repository{
constructor(name,author,language,stars){//se declaran los atributos
    this.name = name
    this.author = author
    this.language = language
    this .stars = stars
}
getInfo(){// get info es una funcion que ejecutara cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars}`
}
}
console.log ("Ejemplo 4 metodos en objetos")
const myRepo = new Repository ("LaunchX","pabloleon","js",100)
console.log(myRepo.getInfo)