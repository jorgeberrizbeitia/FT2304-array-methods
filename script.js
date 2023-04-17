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





const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
  { name: "Nettie", age: 20 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

// note that "adults" is still just a function (just a function of arrow type)
const adults = (arr) => {

  let filterArr = arr.filter((eachPer) => {
    return eachPer.age >= 21
  })

  let mappedArr = filterArr.map((eachPer) => {
    return eachPer.name
  })

  return mappedArr
}

let canDrink = adults(people)
console.log(canDrink) 


// .reduce()

let someNumbers = [ 1, 2, 3, 4, 5 ];

// necesito la suma de estos numeros

/*

Syntaxis

let valorFinalDelAcumulador = array.reduce( (acumulador, cadaElementoDelArray) => {

  return // como vamos alterando el accumulador

}, valorInicialDelAcumulador )

*/
let patata = someNumbers.reduce( (acumulador, eachNum) => {
  // console.log("ejecutando el reduce")
  console.log(acumulador, eachNum)
  // retornamos como vamos acumulando los valores
  return acumulador - eachNum
  // el return es obligatorio en reduce.
}, 100 )

// el accumulador es la bolsita que va guardando lo que será el resultado final

console.log(patata)


let somePeople = [
  { name: "Caro", candy: 20 },
  { name: "Ruth", candy: 40 },
  { name: "Clara", candy: 18 },
  { name: "Jorge" }
]

let sum = somePeople.reduce( (acc, eachPerson) => {

  // eachPerson.candy es undefined en el ultimo elemento
  // 78 + undefined = NaN

  if (typeof eachPerson.candy === "number") {
    return acc + eachPerson.candy
  } else {
    return acc // continua la operación sin cambios en el acumulador
  }

}, 0 )

console.log(sum)

let newString = somePeople.reduce((acc, eachPerson) => {

  return acc + `name: ${eachPerson.name}. candy: ${eachPerson.candy}. `

}, "")

console.log(newString)


// Actividad Reduce

const menu = [
  { name: 'Carrots', calories: 150.45 },
  { name: 'Steak'},
  { name: 'Broccoli', calories: 120.2342 },
  { name: 'Chicken', calories: 250.6523 },
  { name: 'Pizza', calories: 520.124 }
];

// again... just an arrow function below.
const calAvgCalories = (arr) => {

  if (arr.length === 0) {
    return null
  }

  let sum = arr.reduce((acc, eachFood) => {

    if (eachFood.calories === undefined) {
      return acc
    } else {
      return acc + eachFood.calories
    }

  }, 0)

  let avg = sum / arr.length
  let twoDec = avg.toFixed(2)

  // 3 formas de convertir un string a un numero
  return parseFloat(twoDec)
  // return Number(twoDec)
  // return +twoDec

}

// Invoking and running the function
let output1 = calAvgCalories(menu)
console.log(output1) //Answer should be 208.29 

let output2 = calAvgCalories([])
console.log(output2) //Answer should be null


// .reverse()


let orderedList = [0, 1, 2, 3, 4, 5]
console.log(orderedList)

// si yo no quiero modificar el arr original con reverse o sort, clonamos el array
let cloneArr = JSON.parse( JSON.stringify(orderedList) ) // DEEP CLONE => clona todas las referencias internas
// JSON.parse + JSON.stringify
// .slice(0)
// .map((e) => e)


cloneArr.reverse() // solo devuelve la misma referencia del array original mutado
console.log("clone", cloneArr)

console.log("el original", orderedList)
// en reverse y sort, mutan el array original


// .sort()

let someLetters = [ "b", "a", "c", "f", "d", "g", "ab", "aa" ]

let cloneLetters = JSON.parse( JSON.stringify(someLetters) )

cloneLetters.sort()

console.log(cloneLetters)


let originalNumbers = [ 1, 100, 30, 4, 20, 3 ]

let cloneNumbers = JSON.parse( JSON.stringify(originalNumbers) )

cloneNumbers.sort()
console.log(cloneNumbers)

// cuando trabajamos con numeros, tenemos que pasarle el algoritmo de busqueda.

cloneNumbers.sort( (elem1, elem2) => {
  console.log(elem1, elem2)
  // como ir comparando las parejas de numeros uno a uno
  // deberia retornar 2 posibles valores
  // 1 (cualquier valor positivo) : ordenalos de forma ascendente
  // -1 (cualquier valor negativo): ordenalos de forma descendente
  // 0 : no les cambies el orden

  if (elem1 < elem2) {
    return -1
  } else if (elem1 > elem2) {
    return 1
  } else {
    return 0
  }

} )

console.log(cloneNumbers)



