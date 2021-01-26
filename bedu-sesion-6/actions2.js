var car = {
	brand: 'Nissan',
	model: 'Sentra',
	year: 2020
}

function addColor(car) {
  car.color = 'Black';

  return car;
}

console.log('Before calling addColor()', car);

var sameCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', sameCar);

console.log('Same car?', car === sameCar); // true

//--------------------------------------------------------inmutable
function addColor2(car) {
  var newCar = Object.assign({}, car, { //1-crea objeto vacío, le pone lo de car, + la nueva propiedad
    color: 'Black'
  });

  return newCar;
}

var car2 = {
	brand: 'Nissan',
	model: 'Sentra',
	year: 2020
}

console.log('Before calling addColor()', car2);

var newCar2 = addColor2(car2);

console.log('After calling addColor()', car2);
console.log('After calling addColor()', newCar2);

console.log('Same car?', car2 === newCar2); // false


//--------RETO 1

function flatten(arrays) {
  var arr2 = arrays.reduce(function(one, two) {
    return one.concat(two);
  }, []);
  return arr2;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]


///RETO 2
function compact(array) {
  return array.filter(function(element){
      return (element)
  })
}

var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]


//RETO 3

function loop(start, test, update, body) {
  
  for(start; test(start); start=update(start)){
    body(start);
  }

}

var test = function(n) {
  return n > 0;
}

var update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1