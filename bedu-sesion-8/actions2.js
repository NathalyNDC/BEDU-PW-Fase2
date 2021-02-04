window.addEventListener("click", function() {
  console.log("Hello World!");
});

var button = document.querySelector("button");

//agregar evento a lemento
/*button.addEventListener("click", () => {
  console.log("Button clicked.");
});*/

//quitar evento
function once() {
  console.log("Click once");
  button.removeEventListener("click", once);
}

button.addEventListener("click", once);