
// sesión 3

function calculateAge(birthYear) {
    var age = 2021 - birthYear;
    return age;
}

function yearUntilRetirement(birthYear, name){
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    console.log(name+' retires in '+retirement + ' years.');
}

var myAge = calculateAge(1997)
console.log(myAge);

yearUntilRetirement(1997, "Nathaly");

// RETO 1

function power1(base, exponent){
    return base**exponent;
}

function power2(base, exponent){
    var result=base;
    for(var i=1; i<exponent; i++){
        result*=base;
    }
    return result;
}
console.log(power2(2,3));

console.log(power1(2,3));


// RETO 2

function getLargerInt(number1,number2){
    return (number1 <= number2 ? number2 : number1);
}


var number1 = 5;
var number2 = 7;
console.log("the highest between "+ number1+" and "+number2+" is " + getLargerInt(number1, number2));
number1 = 9;
number2 = 7;
console.log("the highest between "+ number1+" and "+number2+" is " + getLargerInt(number1, number2));


//RETO 3
function fibonacciSequence(limi){
    var cont=1;
    var num1=1;
    var num2=1;
   // for(var i=1;i<limi;i++){
            while(cont<=limi){
                console.log(num1);
                cont++;
                if(cont<=limi)
                 console.log(num2);
                num1+=num2;
                num2=num1+num2;
                cont++;
            }
       
   // }
}
fibonacciSequence(7);