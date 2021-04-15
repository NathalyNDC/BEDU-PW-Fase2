import React from 'react';
import '../css/header.css';

function Header(props) {
  let counter = null;
  if(props.show){
    counter = props.tasks.filter(e=> !e.status).length;
  }
  else{
    counter = props.tasks.length;
  }
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        Hay {counter} tareas
      </h1>
    </div>
  )
};

export default Header;