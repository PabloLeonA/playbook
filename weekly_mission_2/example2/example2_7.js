console.log("Creacion de filter para filtrar una lista de elementos")

const countries7 =['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const contriesContainingland = countries7.filter((country) =>
    country.includes('land')
)
console.log("Ejemplo 7: uso de filter para filtrar una lista de elementos")
console.log(contriesContainingland)
const contriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: paises que terminan en i")
console.log(contriesEndsByia)