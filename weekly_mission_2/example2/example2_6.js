console.log("creacion de map para convertir todos los nombres de una lista en mayusculas")

const contries6 =['France','Poland','Unite Kindom','Germany','Spain']
const contriestFirstThreeLetters = contries6.map((country)=>

country.toUpperCase().slice(0,3)
)
console.log("Ejemplo 6: uso de map para convertir todos lo nombres de una lista a mayusculas las primeras 3 letras")
console.log (contriestFirstThreeLetters)