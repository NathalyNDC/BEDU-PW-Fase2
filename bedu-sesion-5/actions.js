
// sesión 4

var color1 = 'Red';
var color2 = 'Blue';
var color3 = 'Green';

console.log(color1);	// Red
console.log(color2);	// Blue
console.log(color3);	// Green

var colors = ['Red', 'Blue', 'Green'];

console.log(colors);	// ['Red', 'Blue', 'Green']

//editar valor
colors[1]='Pink';
console.log(colors);


//Multiplicar los números de un arreglo por 2 y guardar en otro arreglo
var ini= [1, 3, 4, 7, 2, 1, 9, 0];  // Arreglo inicial
function enterosDoblados(nums){
    var dobles=[];
    for(var i=0;i<nums.length;i++){
        dobles.push(nums[i]*2);
    }
    return dobles;
}
console.log(ini);
console.log(enterosDoblados(ini));

// [2, 6, 8, 14, 4, 2, 18, 0]   Resultado esperado OK

//RETO 1

function calculateAverage(numbers) {
    var suma = 0;
    for(var i=0;i<numbers.length;i++){
        suma += numbers[i];
    }
    return(suma/numbers.length);
  }
  console.log(ini);
  console.log("promedio: "+ calculateAverage(ini));


  ///OBJETOS---->ARREGLO
    var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }
  
  //[['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]  // Resultado esperado

  function keyValuePairs(obj) {
    var keys = Object.keys(obj);
    var pairs = [];

    for(var i = 0; i < keys.length; i++) {
      pairs.push( [ keys[i], obj[keys[i]] ] )
    }

    return pairs;
}

var result = keyValuePairs(car);

console.log(result);

//RETO 2 ARREGLO ---> OBJETO
function arrayToObject(arr) {
    var obje = {};
  
    for(var i in arr) {
        for(var j=0;j<arr[i].length-1;j++){
        obje[arr[i][j]] = arr[i][j+1]
        }
      }
  
    return obje;
  }
  console.log(arrayToObject(result));
//versión 1
  function arrayToObject(arr) {
    var obje = {};
  
    for(var i in arr) {
        obje[arr[i][0]] = arr[i][1]
        
      }
    return obje;
  }
  console.log(arrayToObject(result));

  //RETO 3
  var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
  function pluck(list, propertyName) {
    var result=[];
    for(var i in list){
        result.push(list[i][propertyName]);
    }
    return result;
  }
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]


  //POSTWORK --- ejercicio 2
function chunk(array, size){
    var nvo=[];
    var nvo2=[];
    for(var i=0;i<array.length;i++){
        for(var j=0;j<size;j++){
            if(i<array.length) nvo2.push(array[i]);
             i++;
        }
        if(j==size && i<array.length) i--;
        nvo.push(nvo2);
        nvo2=[];
    }
    return nvo;
}
var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

//--------------------------------------------------------
function frequency(string) {
    // Code goes here
    
   }
   
   console.log('Test 1:', frequency('cccbbbaaa'))
   // {a: 3, b: 3, c: 3}
   console.log('Test 2:', frequency('www.bedu.org'))
   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
   console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}