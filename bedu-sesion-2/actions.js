
// console.log(typeof 10); typeof(10);
// IF RETO 1
var time = 13;
var greeting;

if(time >= 00 && time < 12){
    greeting = "Good morning";
}
else if (time >= 12 && time < 20) {
    greeting = "Good afternoon";
}
else if (time >= 20 && time <=23) {
    greeting = "Good night";
}
else {
    greeting = "Number not valid";
}

console.log(greeting);

// Switch EJEMPLO 2
var day = 2;
var text;

switch (day) {
   case day = 0:
       text = "Sunday";
       break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;
    default:
        text = "Error";
}
console.log(text);

//Operador terniario
var speed = 100;
var message = speed > 100 ? "you're going too fast" : "you're under the limit";
console.log(message);

// Ciclo For RETO 2
// números pares 0-100
for(var num=0; num<=100; num++){
    if(num % 2 === 0)
        console.log(num);
}

console.log("NÚMEROS PRIMOS");
// Ciclo For RETO 3
// números primos 0-100
for (var num = 2; num <= 100; num++) {
    var divisores = 1;
  
    for (var div = 2; div <= num; div++) {
      if (num % div === 0) {
        divisores += 1;
      }
    }
    if(divisores === 2) {
      console.log(num);
    }
  }