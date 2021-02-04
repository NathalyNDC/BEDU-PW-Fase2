var title = document.getElementById('title');

var redButton = document.getElementById('red');

var blueButton = document.getElementById('blue');

document.getElementById('black').addEventListener("click", function() {
    title.style = "color: black;";
  });


redButton.addEventListener("click", function() {
    title.style = "color: red;";
  });
  
blueButton.addEventListener("click", function() {
    title.style = "color: blue;";
});
  


  var button = document.querySelector("button");

  /*
  si quisiéramos saber cuál botón del mouse fue presionado podemos leer la propiedad button del event object.
  */
  button.addEventListener("mousedown", function(event) {
    if (event.button == 0) {
      console.log("Left button");
    } else if (event.button == 1) {
      console.log("Middle button");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });