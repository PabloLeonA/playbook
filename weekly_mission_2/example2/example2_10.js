console.log("creacion de every para lista true-false")


const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') 
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)