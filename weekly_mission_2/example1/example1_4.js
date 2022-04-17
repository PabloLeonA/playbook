console.log("Creacion de objeto con metodos")

const auto = {
    name: "beetle",
    
    sayHello: function(){
      
      console.log(`${this.name} soy el mejor auto!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  auto.sayHello()