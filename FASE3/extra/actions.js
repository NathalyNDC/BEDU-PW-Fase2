/*var name="Aldo";
console.log(`Hello ${name}`);

//string con múltiples líneas.
const message = `Welcome Back!
John Doe
`;
console.log(`Hello ${message}`);

//
console.log(`Hello ${2+1}`);

const a = 10;
const b = 20;

console.log(`a + b = ${a + b}`); // a + b = 30 

let colors = ['blue', 'red', 'yellow'];

console.log(`Primary colors: ${ colors.join(', ') }`); // Primary colors: blue, red, yellow
//join une todos sagregando entre cada uno coma y espacio


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//funciones de alto orden
console.log(`Odd numbers: ${ 
  numbers.filter(function(n) { 
    return n % 2 !== 0 
  }) 
}`); // Odd numbers: 1,3,5,7,9

//Spread operator
 colors = ['blue', 'red', 'yellow'];
const copyOfColors = [ ...colors ];

console.log(copyOfColors); // ['blue', 'red', 'yellow']

const one = [1,2,3];
const four = [4,5,6];
const tog=[...one, ...four];
console.log(tog);


const book = {
    author: 'Marijn Haverbeke',
    title: 'Eloquent JavaScript',
    year: 2018
  };
  const copyOfBook = { ...book };
  
  console.log(copyOfBook); 
  // { author: "Marijn Haverbeke", title: "Eloquent JavaScript", year: 2018 }

  const formalGreetings = {
    english: 'Hello',
    french: 'Bonjour',
  };
  
  const informalGreetings = {
    russian: 'Privet',
    portuguese: 'Oi'
  }
  
  const greetings = { ...formalGreetings, ...informalGreetings }
  
  console.log(greetings); 
  // { english: "Hello", french: "Bonjour", russian: "Privet", portuguese: "Oi" }

  //REST PARAMETER
  function sum(a, b) {
    return a + b;
  }
  
  const total = sum(1, 2, 3, 4, 5); 
  console.log(total); // 3



  function sum2(...numbers) {
    return numbers.reduce(function(prev, curr) {
      return prev + curr}, 0 //empezando en 0
    )
  }
  
  const total2 = sum2(1, 2, 3, 4, 5); 
  console.log(total2); // 15


  const colors3 = [ 'Red', 'Blue', 'Yellow' ]

const [ red, blue, yellow ] = colors3;

console.log(red); // Red
console.log(blue); // Blue
console.log(yellow); // Yellow

let person1 = 'John Doe';
let person2 = 'Jane Doe';
[ person1, person2 ] = [ person2, person1 ];
console.log(`persona 1: ${person1} y persona2: ${person2}`)

//Intercambiar los valores del primer elemento del arreglo con el último elemento.
const colorss = [ 'Red', 'Blue', 'Yellow' ];
[ colorss[0], colorss[2] ] = [ colorss[2], colorss[0] ];
console.log(colorss);

*/
//////////////////RETO 2
const person5 = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  };

  const {facebook:fb, instagram:ig} = person5.links.social;
  console.log(` ${fb}     e      ${ig}`);

  function createPhoneNumber(numbers) {
    let phone = '(xxx) xxx-xxxx'
    for (let number of numbers) {
      phone = phone.replace('x', number)
    }
    return phone
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
//La función debe retornar el mismo formato, incluyendo el espacio después del paréntesis.

