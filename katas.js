//EJERCICIO 1//
// 1.1 Crea una variable llamada myFavoriteHero y asigna el valor "Hulk".
let myFavoriteHero = 'Hulk'

// 1.2 Crea una variable llamada x y asigna el valor 50.
let x = 50

// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h = 5
let y = 10

// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y

//EJERCICIO 2//
// 1.1 Cambiar el valor de la propiedad age en el objeto character:

const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25

console.log(character) // {name: "Jack Sparrow", age: 25}

// 1.2 Declarar 3 variables (firstName, lastName, age) y mostrar el mensaje por consola:

const firstName = 'Jon'
const lastName = 'Snow'
const age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

// 1.3 Sumar el precio de los dos juguetes (toy1 y toy2) e imprimir el resultado:

const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }

const totalPrice = toy1.price + toy2.price

// 1.4 Actualizar globalBasePrice y recalcular el finalPrice de los coches:

let globalBasePrice = 10000

const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }

globalBasePrice = 25000

car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice

console.log(car1) // {name: "BMW m&m", basePrice: 50000, finalPrice: 75000}
console.log(car2) // {name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 95000}

// EJERCICIO 3

// 1.1 Multiplicar 10 por 5 y mostrar el resultado:

console.log(10 * 5) // Output: 50

// 1.2 Dividir 10 por 2 y mostrar el resultado:

console.log(10 / 2) // Output: 5

// 1.3 Mostrar el resto de dividir 15 por 9:

console.log(15 % 9) // Output: 6

// 1.4 Operador de asignación para obtener o = 15 con p = 10 y j = 5:

let p = 10
let j = 5
let o = p + j

console.log(o) // Output: 15

// 1.5 Operador de asignación para obtener i = 50 con c = 10 y m = 5:

let c = 10
let m = 5
let i = c * m

console.log(i) // Output: 50

// EJERCICIO 4

// 1.1 Consigue el valor "HULK" del array avengers y muéstralo por consola:

const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0]) // Mostrará "HULK"

// 1.2 Cambia el primer elemento de avengers a "IRONMAN":

const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers[0] = 'IRONMAN'
console.log(avengers) // Mostrará ["IRONMAN", "SPIDERMAN", "BLACK PANTHER"]

// 1.3 Muestra el número de elementos en el array usando la propiedad correcta de Array:

const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers.length) // Mostrará 3

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array:

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]) // Mostrará "Summer"

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola:

const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz,Lopez'
]
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0]) // Mostrará "Rick"
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]) // Mostrará "Summer"

// 1.6 Elimina el segundo elemento del array y muestra el array por consola:

const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters) // Mostrará ["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

// EJERCICIO 5

const number1 = 10
const number2 = 20
const number3 = 2

// ejemplo
if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 === 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}

if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}

if (number3 !== number1) {
  console.log('number3 es distinto number1')
}

if (number3 * 5 === number1) {
  console.log('number3 por 5 es igual a number1')
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  )
}

if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  )
}

// EJERCICIO 6

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muéstralo por consola:

for (let i = 0; i <= 9; i++) {
  console.log(i)
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muéstralo por consola solo cuando el resto del número dividido entre 2 sea 0 (números pares):

for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// 1.3 Crea un bucle para contar ovejas y dormir:
// Este bucle debe dar 10 vueltas, mostrando un mensaje en cada vuelta, y cambiando el mensaje en la décima vuelta a 'Dormido!'.

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log('Intentando dormir')
  } else {
    console.log('Dormido!')
  }
}

// EJERCICIO 7

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {}

function sum(numberOne, numberTwo) {
  return numberOne > numberTwo ? numberOne : numberTwo
}

// EJERCICIO 8

// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {}

function findLongestWord(param) {
  let longestWord = ''

  for (let word of param) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers))

// EJERCICIO 9

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
}

function sumAll(param) {
    let total = 0; 

    for (let number of param) { 
        total += number; 
    }
    return total;
}

const numbers = [1, 2, 3, 5, 45, 37, 58];
console.log(sumAll(numbers));


// EJERCICIO 10
// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
}

function average(param) {
    let total = 0; 
    
    for (let number of param) { 
        total += number; 
    }
    return total / param.length; 
}

const numbers = [12, 21, 38, 5, 45, 37, 6];
console.log(average(numbers)); 


// EJERCICIO 11
// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
}

function averageWord(param) {
    let total = 0; 
    let count = 0; 

    for (let element of param) { 
        if (typeof element === 'number') { 
            total += element; 
            count++; 
        } else if (typeof element === 'string') { 
            total += element.length; 
            count++; 
        }
    }
    return count > 0 ? total / count : 0; 
}

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(averageWord(mixedElements));


// EJERCICIO 12
// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
}

function removeDuplicates(param) {
    const uniqueElements = []; 

    for (let i = 0; i < param.length; i++) { 
        if (!uniqueElements.includes(param[i])) { 
            uniqueElements.push(param[i]);
        }
    }
    return uniqueElements; 
}

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
console.log(removeDuplicates(duplicates)); 

// EJERCICIO 13
// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
}

function finderName(param, nameToFind) {
    const index = param.indexOf(nameToFind); 

    if (index !== -1) { 
        return { exists: true, position: index }; 
    } else {
        return { exists: false };
    }
}
const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

console.log(finderName(nameFinder, 'Tony'));    // Mostrará { exists: true, position: 2 }
console.log(finderName(nameFinder, 'Bruce'));   // Mostrará { exists: true, position: 7 }
console.log(finderName(nameFinder, 'Wolverine')); // Mostrará { exists: false }

// EJERCICIO 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
}

function repeatCounter(param) {
    const wordCount = {}; 

    for (let word of param) { 
        if (wordCount[word]) { 
            wordCount[word] += 1; 
        } else {
            wordCount[word] = 1; 
        }
    }
    return wordCount; 
}
const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep',
    'code','enjoy','upgrade','code'];

console.log(repeatCounter(counterWords)); 
// Mostrará: { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }


// EJERCICIO 15
// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

const products = [
    'Camiseta de Pokemon',
    'Pantalón coquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinrurón de Orión',
    'AC/DC Camiseta'
];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) { 
        console.log(products[i]); 
    }
}

// EJERCICIO 16
// Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const place of placesToTravel) { 
    console.log(place); 
}

// EJERCICIO 17
// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien) { 
    console.log(`${key}: ${alien[key]}`); 
}

// EJERCICIO 18
// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
];

for (let i = placesToTravel.length - 1; i >= 0; i--) {
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1); 
    }
}
console.log(placesToTravel); 


// EJERCICIO 19
// Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (let i = toys.length - 1; i >= 0; i--) {
    if (toys[i].name.includes('gato')) { // Comprobamos si el nombre incluye la palabra "gato"
        toys.splice(i, 1); // Eliminamos el juguete
    }
}
console.log(toys); // Imprimimos el array modificado


// EJERCICIO 20
// For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

const popularToys = [];
const toys = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 23, name: 'Barbie Man', sellCount: 15}, 
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of toys) {
    if (toy.sellCount > 15) { 
        popularToys.push(toy); 
    }
}
console.log(popularToys); 

// EJERCICIO 21
// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:");
for (const user of users) {
  if (user.years < 18) { 
    console.log(user.name); 
  }
}

console.log("Usuarios mayores de edad:");
for (const user of users) {
  if (user.years >= 18) { 
    console.log(user.name); 
  }
}

// EJERCICIO 22
// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const uniqueFruits = new Set(fruits);

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) { 
    if (fruitIndex < uniqueFruits.size) {
      foodSchedule[i].name = Array.from(uniqueFruits)[fruitIndex];
      fruitIndex++; 
    }
  }
}
console.log(foodSchedule); 


// EJERCICIO 23
// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie); 
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie); 
  } else {
    largeMovies.push(movie); 
  }
}

console.log("Películas pequeñas:", smallMovies);
console.log("Películas medianas:", mediumMovies);
console.log("Películas grandes:", largeMovies);


// EJERCICIO 24
// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSales = 0;

for (const product of products) {
  totalSales += product.sellCount; 
}

console.log("Total de ventas:", totalSales);


// EJERCICIO 25
// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSales = 0;
const numberOfProducts = products.length;

for (const product of products) {
  totalSales += product.sellCount; 
}

const averageSales = totalSales / numberOfProducts;

console.log("Total de ventas:", totalSales);
console.log("Media de ventas:", averageSales.toFixed(2));

// EJERCICIO 26
// Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (const product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product); 
  } else {
    badProducts.push(product); 
  }
}

console.log("Good Products:", goodProducts);
console.log("Bad Products:", badProducts);




