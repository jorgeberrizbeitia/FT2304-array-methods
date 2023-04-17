console.log("probando")


// .forEach()


// let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];


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

let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];

randomNumbers.forEach( (eachElement, index) => {
  console.log("test de forEach", eachElement, index)

  if (eachElement === 42) {
    console.log("La respuesta al universo y a todo lo demas")
  }

} )


// .map()

let algo = randomNumbers.map( (eachElement) => {
  console.log("ejecutando algo por cada elemento del array", eachElement)

  let newValue = eachElement / 10
  // con el map, nosotros debemos retornar algo.
  // con ese algo, estaremos construyendo un nuevo array.
  return newValue; // el valor modificado con el que yo quiero construir el nuevo array
} )

// estoy reconstruyendo el array
// es un NUEVO array
// el map nos permite hacer modificaciones en los elementos
console.log(algo)
console.log(randomNumbers)

// function map(callback) {

//   let newArr = []

//   // tiene el array sobre el cual la ejecutamos
//   for (let i = 0; i < array.length; i++) {
//     callback()
//     newArr.push(array[i])
//   }

//   return newArr
// }


// actividad guiada
// crea una funcion que reciba un array de numeros, y retorne un nuevo array con los numeros convertidos en strings.

function numbersAsString( numbersArr ) {

  let mappedArray = numbersArr.map((eachNumber) => {
    let numAsString = eachNumber.toString()
    return numAsString
  })  

  return mappedArray

}


// test de la funcion
let stringsArr = numbersAsString( [2, 10, 54] )
console.log(stringsArr)


let mappedArray = [2, 10, 54].map((eachNumber) => {
  let numAsString = eachNumber.toString()
  return numAsString
})  

console.log(mappedArray)





