console.log("probando")


//* .forEach()


let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];


let testFunction = () => {
  console.log("test de forEach")
}


randomNumbers.forEach( testFunction )
// forEach acepta como argumento una funcion.
// NO, la invocacion de la funcion.

// EJEMPLO DE COMO ESTÄ CONSTRUIDO UN forEach EN JS
// function forEach(callback) {

//   // tiene el array sobre el cual la ejecutamos
//   for (let i = 0; i < array.length; i++) {
//     callback()
//   }
// }


// let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];

randomNumbers.forEach( (eachElement, index) => {
  console.log("test de forEach", eachElement, index)

  if (eachElement === 42) {
    console.log("La respuesta al universo y a todo lo demas")
  }

} )


//* .map()

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


// EJEMPLO DE COMO ESTÄ CONSTRUIDO UN map EN JS
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
// crea una funcion que reciba un array de numeros...
// ... y retorne un nuevo array con los numeros convertidos en strings.

function numbersAsString( numbersArr ) {

  let mappedArray = numbersArr.map((eachNumber) => {
    let numAsString = eachNumber.toString()
    return numAsString // return del map
  })  

  return mappedArray // return de la funcion

}


// test de la funcion
let stringsArr = numbersAsString( [2, 10, 54] )
console.log(stringsArr)



// .filter()

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];


let mappedArr = cars.map((eachCar) => {
  if (eachCar.year >= 2010) {
    return eachCar
  }
})

// el map siempre devuelve un array con la misma cantidad elementos originales
console.log(mappedArr)

// ... entonces usamos filter

let filteredArr = cars.filter((eachCar) => {

  // el filter siempre va a tener una condición
  // en el filter debo retornar TRUE o FALSE
  // TRUE : añade el elemento
  // FALSE : no añadas el elemento

  if (eachCar.weight < 1) {
    return true // quiero agregarlo
  } else {
    return false // quiero omitirlo
  }

  // cuando tengan un condicional y deban retornar true o false
  // asi que simplemente podemos devolver la condicion
  // return eachCar.weight < 1

})

console.log(filteredArr)



