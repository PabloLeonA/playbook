console.log("Ejemplo con overriding methods")

class Explorer{
    constructor(name,username,mision){
        this.name = name
        this.username = username
        this.mision = mision
    }

    getNameAndUsername(){
     return `Explorer ${this.name}, username: ${this.username}`   
    }
}

class Viajero extends Explorer {
    constructor(name,username,mission,cycle){
        super(name,username,mission) // super nos ayuda a llamar a el constructor padre
        this.cycle = cycle //al agregar este atributo de la clase viajero ,es esclusiva de esta clase y no de la padre
    }
getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()// aqui se llama el metodo de la clase padre
    //nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`
}
}

const viajero1  = new Viajero("Pablo","LaunchX","Node JS","Abril 2022")
console.log("Ejemplo 10 overridin methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // metodo de la clase padre
console.log(viajero1.getGeneralInfo())//metodo de la clase hijaclea