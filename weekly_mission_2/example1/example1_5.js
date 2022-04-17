
console.log("creacion objeto con metodo que recibe parametros")

const myAlexa = {
    name: "alexa",
    sayHelloToMyAsistent: function(yourassis){
      console.log(`${this.name} say's hello to ${yourassis}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myAlexa.sayHelloToMyAsistent("Google")