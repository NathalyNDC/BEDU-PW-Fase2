var Person = function(name, birthYear,job){
    this.name=name;
    this.birthYear=birthYear;
    this.job=job;
}

var ana= new Person("Ana", 1997, "Librarian");
console.log(ana);

console.log(ana instanceof Person);

//RETO 1
var Vec = function(x, y) {
    this.x=x;
    this.y=y;
}

Vec.prototype.plus= function (vector){
    return new Vec(this.x+vector.x,this.y+vector.y);
}
Vec.prototype.minus= function(vector){
    return new Vec(this.x-vector.x,this.y-vector.y);
}
Vec.prototype.length=function(){
    return (Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)));
}
  
  var vec1 = new Vec(1, 2);
  var vec2 = new Vec(2, 3);
  
  console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
  console.log(vec1.length()); // 2.23606797749979

//Ejemplo 2
var Person = function(name) {
  this.name = name;
}

var Developer = function(name, skills, yearsOfExperience) {
	Person.call(this, name);

	this.skills = skills;
	this.yearsOfExperience = yearsOfExperience;
}

var john = new Developer('John', 'JavaScript', 10);

console.log( john );


  //RETO 2
  console.log("Reto 2 ----------------------------------");

  var Group = function(){
      this.arr = [];
  }

  Group.prototype.add = function(valor){
      var igual=0;
    for(var i=0; i<this.arr.length;i++){
        if(this.arr[i]===valor){
            igual++;
        }
    }
    if(igual==0){
        this.arr.push(valor);
    }
  }
  Group.prototype.has = function(valor){
    var igual=0;
  for(var i=0; i<this.arr.length;i++){
      if(this.arr[i]===valor){
          igual++;
      }
  }
  if(igual==0){
      return(false);
  }
  else{
      return true;
  }
}

Group.from = function(arreglo){
    var grupo = new Group();
    grupo.arr=arreglo;
  return grupo;
}

//var group  = new Group();
//var group1 = group.from([1, 2, 3, 4, 5]);
var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true


  //RETO 3
  console.log("Reto 3 ----------------------------------");
  var Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c=c;
  }
  Triangle.prototype.getPerimeter = function(){
      return (this.a+this.b+this.c);
  }
  
  var triangle = new Triangle(1, 2, 3);
  
  console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
  console.log(triangle.getPerimeter()); // 6