console.log("creacion de un objeto con propiedades")

// const myobjet ={} esto es antes de acceder a propiedades antes de objeto
const explorer ={
    name:"pablo",
    age:30,
    mission:"launch-X",

    // listas
    stack: ["js","node","react","vue"],
    // blogs
    blog:{
        url:"https://github.com/PabloLeonA/playbook",
        posts:5

    }// es un objeto

}
// console.log(myobject) accesar a datos de propiedades de mi objeto totales

console.log(explorer)
console.log("accediendo a las propiedades de objeto")
console.log(explorer.name) //sirve para accesar a propiedades especificas de un objeto
console.log(explorer["name"]) //acceder a propiedades del objeto otra formaa