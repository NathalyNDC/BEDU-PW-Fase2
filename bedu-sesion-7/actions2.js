var paragraphs = document.body.getElementsByTagName("p");

console.log('Colección de nodos: ', paragraphs);

console.log('Primer nodo: ', paragraphs[0]);
console.log('Segundo nodo: ', paragraphs[1]);
console.log('Tercer nodo: ', paragraphs[2]);

document.body.insertBefore(paragraphs[2],paragraphs[0]);
//-----------------------------------------------------------
function createNode(type, child) {
  var node = document.createElement(type);

  if(typeof child === "string") {
    var text = document.createTextNode(child);
    node.appendChild(text);
  } else {
    node.appendChild(child);
  }

  return node;
}

console.log(createNode('h1', createNode('strong', 'Hello World')));


document.getElementById("quote")
  .appendChild(
    createNode("footer", createNode("strong", "- Karl Popper"))
  )

  //----------------------------------------------------RETO1

 var imgs = document.getElementsByTagName('img');
  for(var i=imgs.length-1; i>=0;i--){ 
    /*no se puede comenzar con var i=0 porque si dejo la condición en imgs.lenght 
    como hago replace la longitud del arreglo va a cambiar en cada iteración (replace elimina), 
    debo sacar la longitud desde un inicio*/
    imgs[i].replaceWith(imgs[i].alt); 
  }

  //----------------------------------------------------RETO 2

  var data = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  // Code goes here
  var table = document.createElement('table');
  var heads = document.createElement('tr');
  table.appendChild(heads);
  var keysNames=Object.keys(data[0]);
  for(var elm =0;elm<keysNames.length;elm++){
    var headTable = document.createElement("th");
    headTable.appendChild(document.createTextNode(keysNames[elm]));
    heads.appendChild(headTable);
  }
  
  for(var j=0; j<data.length;j++){
    var contentTable = document.createElement('tr');
    for(var i=0;i<keysNames.length;i++){
      var headName = document.createElement("td");
      var content = document.createTextNode(data[j][keysNames[i]]);
      if(typeof data[j][keysNames[i]] == "number"){
        headName.style.textAlign="right";
      }
      headName.appendChild(content);
      contentTable.appendChild(headName);
    }
    table.appendChild(contentTable);
}
document.getElementById("mountains").appendChild(table);