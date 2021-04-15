import React from 'react';
import Todo from './Todo';
import '../css/TodoList.css';




function TodoList (props){
  let elements = null;
  if(props.show){
    elements = props.tasks.filter(e=> !e.status).map(element => 
        <Todo key={element.id} task={element.task} done={element.status} id={element.id} change={props.change} delete={props.delete}/>
    )
  }
  else{
    elements = props.tasks.map(element => <Todo key={element.id} task={element.task} done={element.status} id={element.id} change={props.change} delete={props.delete}/>)
  }

   
    
    return (
      <div className="container-list">
        {elements}
      </div>
    )
  }




export default TodoList;


//RETO 1
/*
¿Por qué hay clases de css en los componentes que no codeamos nosotros?, ¿De dónde están trayendo el CSS esas clases?
-En React tu haces cada Componente y puede tener o no su CSS tu al crear el componente lo puedes poner o no pero si no encuentra el CSS particular Va a jalar el de Index


¿Cómo podemos hacer una mejor implementación de TodoList, para no copiar y pegar todos los Todo?
Si quisieramos hacer una listado en orden podríamos agregar una función para que esté generando el componente con un ciclo.
*/