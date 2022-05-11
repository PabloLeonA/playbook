console.log("Ejemplo 6 Getters para acceder a los atributos del objeto")

class ajolonauta{
    constructor(name,age,stack){
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 0
        this.exercises_todo = 99
    }
    //con get podemos acceder a los atributos de esta clase
    get getExercisesCompleted(){
            return this.exercises_completed
    }
}
console.log("Ejemplo 6 getters para acceder a los atributos de un objeto")
const woopa = new ajolonauta ("Woopa",1,[])
console.log(woopa.getExercisesCompleted)