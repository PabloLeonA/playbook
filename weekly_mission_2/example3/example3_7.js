console.log ("Ejemplo 7 setters para modificar los atributos del objeto")
class MisionCommander{
    constructor (name,mision){
        this.name = name
        this.mision = mision
        this.students = 0
        this.lives = 0
    }
    get getStudents(){
        return this.students
    }

    get getLives(){
        return  this.lives
    }

    set setStudents(students){
        this.students = students
    }

    set setLives(lives){
        this.lives = lives
    }
}
console.log ("Ejemplo 7 setters para modificar los atributos del objeto")
const misionCommanderNode = new MisionCommander("Pablo","NodeJS")

console.log(misionCommanderNode.getStudents) //0 por default
console.log(misionCommanderNode.getLives) //0 por default

//actualizamos los atributos por medio de los setters
misionCommanderNode.setStudents = 100
misionCommanderNode.setLives = 3

console.log(misionCommanderNode.getStudents) //0 por default
console.log(misionCommanderNode.getLives)//0 por default
