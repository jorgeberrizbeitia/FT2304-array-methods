console.log("probando")


// .forEach()


let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];


// let testFunction = () => {
//   console.log("test de forEach")
// }


// randomNumbers.forEach( testFunction )
// forEach acepta como argumento una funcion.
// NO, la invocacion de la funcion.


// function forEach(callback) {

//   // tiene el array sobre el cual la ejecutamos
//   for (let i = 0; i < array.length; i++) {
//     callback()
//   }
// }


// let testFunction = () => {
//   console.log("test de forEach")
// }


randomNumbers.forEach( (eachElement, index) => {
  console.log("test de forEach", eachElement, index)

  if (eachElement === 42) {
    console.log("La respuesta al universo y a todo lo demas")
  }

} )

