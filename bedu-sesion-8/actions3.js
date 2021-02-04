var title = document.getElementById('title');

var input = document.getElementById('text');

input.addEventListener("input", function(event) {
    title.textContent = event.target.value;
  });
  
  //usando propiedades de un objeto - input

  //usando keyboard
  window.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      document.body.style.background = "lightblue";
    }
  
    if (event.key == "Enter" && event.ctrlKey) {
      document.body.style.background = "orange";
    }
  });

  window.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      document.body.style.background = "";
    }
  });