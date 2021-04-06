var contetInputNote = document.querySelector('input');
var createBtn = document.getElementById('addNote');
var textAreaNotes = document.getElementById('content-notes');
var counter = 0;

function Note (id, content, dateCreation) {
    this.id= id;
    this.content = content;
    this.dateCreation = createDate();
};

contetInputNote.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      createNote(contetInputNote.value);
    }
});
  

//----> cambiaría porque eso toca a "VER"
  function createNote(content){
    var newCheck = document.createElement("checkbox");
    var newNote = document.createElement("p");
    newNote.textContent = content;
    newNote.id = "note"+couter;
    var newBtn = document.createElement("button");
    newBtn.style.value = "Delete";

    //limpiar input al final

  }

  function refreshNotes(){

  }

  function createDate(){
    var hoy  = new Date();
    var fechaHora =  hoy.getDate()+ '/'+ (hoy.getMonth()+1)+'/'+ hoy.getFullYear()+' '+ hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds;
    return fechaHora;
  }



  var checkbox = document.querySelector("input[name=checkbox]");
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});


/*


https://bulmatemplates.github.io/bulma-templates/templates/cheatsheet.html,  https://bulmatemplates.github.io/bulma-templates/templates/kanban.html, https://fonts.google.com/specimen/Kaushan+Script?query=Kaushan+Script&preview.text_type=custom&sidebar.open=true&selection.family=Kaushan+Script, https://cssninjastudio.github.io/krypton/
*/